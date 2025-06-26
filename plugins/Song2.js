const axios = require('axios');
const fs = require('fs');
const yts = require('yt-search');
const { cmd } = require('../lib/command');
const { ytmp3, ytmp3new, ytmp444, getImage, fetchJson } = require('../lib/functions');
const config = require('../settings');

// Regular expression to validate YouTube URLs
function isYouTubeUrl(url) {
  const regex = /(?:http(?:s)?:\/\/)?(?:www\.)?youtube(?:-nocookie)?\.com\/(?:watch\?.*v=|embed|shorts\/|v\/)|youtu\.be\/([-_0-9A-Za-z]{11})/;
  return regex.test(url);
}

// Extract YouTube video ID from URL
function extractYouTubeId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Convert YouTube URL to standard format
function convertYouTubeLink(url) {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : url;
}

// Fetch download URL with retry logic
async function getDownloadUrl(url, format, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    console.log(`Retrying... Attempt ${attempt}`);
    try {
      const { downloadUrl } = await require('../lib/scrap').ddownr(url, format);
      if (downloadUrl) return downloadUrl;
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
    }
  }
  throw new Error(`Failed to get download URL after ${retries} attempts.`);
}

// Alternative download function with retry logic
async function giftm(url, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    console.log(`Attempt ${attempt}`);
    try {
      const result = await ytmp3new(url);
      if (result.link) return { dl_link: result.link };
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
    }
  }
  throw new Error(`Failed to get download URL after ${retries} attempts.`);
}

// Command: Download YouTube song
cmd({
  pattern: 'song',
  desc: 'To download songs.',
  react: '🎶',
  use: '.song <Text or Link>',
  category: 'download',
  filename: __filename
}, async (conn, message, match, { from, quoted, q: query, prefix, reply }) => {
  try {
    const response = await fetchJson('https://supun-md-data.pages.dev/Supun-data/textData.js');
    const messages = response.replyMsg;
    if (!query) return reply(messages.url);

    const url = convertYouTubeLink(query);
    if (!isYouTubeUrl(url)) return reply("❌ Not found...!!");

    const searchResult = await yts(url);
    const video = searchResult.videos[0];
    const title = video.title.length > 20 ? `${video.title.substring(0, 20)}...` : video.title;
    const description = video.description || '😓 No description available.';
    const caption = `
╭─────────────────────❖
│ SUPUN-MD SONG DOWNLOADING
╰─────────────────────❖

╭────────────────❖
│ ℹ️ *SUPUN-MD*
│
│ ☍ ⦁ 📌 TITLE: ${title}
│ ☍ ⦁ ⏱️ Duration: ${video.timestamp}
│ ☍ ⦁ 👁️ Views: ${video.views}
│ ☍ ⦁ 📺 Channel: [${video.author.name}]
│ ☍ ⦁ 📅 Uploaded: ${video.ago}
│ ☍ ⦁ 📖 Description: ${description}
│ ☍ ⦁ 🔗 Link: (${video.url})
╰────────────────❖
`;

    const footer = (await axios.get('https://supun-md-data.pages.dev/Supun-data/textData.js')).data.footer;

          await conn.sendMessage(from, {
        document: fs.readFileSync('./package.json'),
        caption,
        footer: '> ᴘᴏᴠᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        buttons: [{
          buttonId: 'action',
          buttonText: { displayText: '🔑 Select Video Type' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: '🔑 Select Video Type',
              sections: [
                {
                  title: 'Download Song Audio',
                  highlight_label: '𝚂𝚄𝙿𝚄𝙽 𝙼𝙳 </>',
                  rows: [
                    { title: 'AUDIO TYPE 🎶', description: 'Download Song Audio', id: `${prefix}ytmp3 ${video.url}` },
                    { title: 'DOCUMENT TYPE 📂', description: 'Download Song Document', id: `${prefix}ytdoc ${video.url}` },
                    { title: 'VOICE TYPE 🎤', description: 'Download Song Voice', id: `${prefix}ytptt ${video.url}` }
                  ]
                }
              ]
            })
          }
        }],
        fileName: '𝚂𝚄𝙿𝚄𝙽 𝙼𝙳',
        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        fileLength: 0x5f5e0ff,
        headerType: 1,
        viewOnce: true,
        contextInfo: {
          isForwarded: true,
          mentionedJid: [match.sender],
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363270086174844@newsletter',
            newsletterName: 'ＳＵＰＵＮ ＭＤ',
            serverMessageId: 0x3e7
          },
          externalAdReply: {
            title: '👨‍💻 ＳＵＰＵＮ - ＭＤ 👨‍💻',
            body: '',
            mediaType: 1,
            sourceUrl: 'https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38',
            thumbnailUrl: video.image,
            renderLargerThumbnail: true,
            showAdAttribution: true
          }
        }
      }, { quoted: message });
    } else {
      await conn.sendMessage(from, {
        text: caption,
        image: { url: video.image },
        footer: '> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ',
        buttonText: '🔑 Select menu type',
        sections: [{
          title: '',
          rows: [
            { title: 'AUDIO TYPE 🎶', rowId: `${prefix}ytmp3 ${video.url}`, description: 'Download Song Audio' },
            { title: 'DOCUMENT TYPE 📂', rowId: `${prefix}ytdoc ${video.url}`, description: 'Download Song Document' },
            { title: 'VOICE TYPE 🎤', rowId: `${prefix}ytptt ${video.url}`, description: 'Download Song Voice' }
          ]
        }]
      }, { quoted: message });
  } catch (error) {
    console.error(error);
    await conn.sendMessage(from, { react: { text: '❌', key: message.key } });
    reply('An error occurred while processing your request.');
  }
});

// Command: Download YouTube audio (MP3)
cmd({
  pattern: 'ytmp3',
  react: '⬇',
  dontAddCommandList: true,
  filename: __filename
}, async (conn, message, match, { from, q: query, reply }) => {
  try {
    const messages = (await fetchJson('https://supun-md-data.pages.dev/Supun-data/textData.js')).replyMsg;
    if (!query) return reply(messages.url);
    if (!isYouTubeUrl(query)) return reply(messages.not_fo);

    await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
    const downloadUrl = await getDownloadUrl(query, 'mp3');
    await conn.sendMessage(from, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg'
    }, { quoted: message });
    await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
  } catch (error) {
    console.error(error);
    try {
      const downloadUrl = (await giftm(query)).dl_link;
      await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
      await conn.sendMessage(from, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg'
      }, { quoted: message });
      await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
    } catch (error) {
      console.error(error);
      try {
        const downloadUrl = (await ytmp3(query)).dl_link;
        await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
        await conn.sendMessage(from, {
          audio: { url: downloadUrl },
          mimetype: 'audio/mpeg'
        }, { quoted: message });
        await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
      } catch (error) {
        console.error(error);
      }
    }
  }
});

// Command: Download YouTube document
cmd({
  pattern: 'ytdoc',
  react: '⬇',
  dontAddCommandList: true,
  filename: __filename
}, async (conn, message, match, { from, q: query, reply }) => {
  try {
    const messages = (await fetchJson('https://supun-md-data.pages.dev/Supun-data/textData.js')).replyMsg;
    if (!query) return reply(messages.url);
    if (!isYouTubeUrl(query)) return reply(messages.not_fo);

    const searchResult = await yts(query);
    const video = searchResult.videos[0];
    const thumbnail = await getImage(video.image);
    await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
    const downloadUrl = await getDownloadUrl(query, 'mp3');
    await conn.sendMessage(from, {
      document: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      jpegThumbnail: thumbnail,
      fileName: `${video.title}.mp3`,
      caption: `${video.title}.mp3`
    }, { quoted: message });
    await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
  } catch (error) {
    console.error(error);
    try {
      const messages = (await fetchJson('https://supun-md-data.pages.dev/Supun-data/textData.js')).replyMsg;
      if (!query) return reply(messages.url);
      if (!isYouTubeUrl(query)) return reply(messages.not_fo);

      const searchResult = await yts(query);
      const video = searchResult.videos[0];
      const thumbnail = await getImage(video.image);
      await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
      const downloadUrl = (await giftm(query)).dl_link;
      await conn.sendMessage(from, {
        document: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        jpegThumbnail: thumbnail,
        fileName: `${video.title}.mp3`,
        caption: `${video.title}.mp3`
      }, { quoted: message });
      await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
    } catch (error) {
      console.error(error);
    }
  }
});

// Command: Download YouTube PTT (Push-to-Talk) audio
cmd({
  pattern: 'ytptt',
  react: '⬇',
  dontAddCommandList: true,
  filename: __filename
}, async (conn, message, match, { from, q: query, reply }) => {
  try {
    const messages = (await fetchJson('https://supun-md-data.pages.dev/Supun-data/textData.js')).replyMsg;
    if (!query) return reply(messages.url);
    if (!isYouTubeUrl(query)) return reply(messages.not_fo);

    await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
    const downloadUrl = await getDownloadUrl(query, 'mp3');
    await conn.sendMessage(from, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: message });
    await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
  } catch (error) {
    console.error(error);
    try {
      const downloadUrl = (await giftm(query)).dl_link;
      await conn.sendMessage(from, { react: { text: '⬆', key: message.key } });
      await conn.sendMessage(from, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: message });
      await conn.sendMessage(from, { react: { text: '✔', key: message.key } });
    } catch (error) {
      console.error(error);
    }
  }
});
