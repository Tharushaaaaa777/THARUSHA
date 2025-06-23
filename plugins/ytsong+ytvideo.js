const { cmd, commands } = require('../lib/command');
const { fetchJson } = require('../lib/functions');
const yts = require('yt-search');
const sadiya_apikey = 'sadiya-key-666';
const sadiya_md_footer = '>\ *© powered by sadiya tech*';

// Command: YouTube Song Download
cmd({
  pattern: 'ytsong',
  react: '🎵',
  alias: ['ytmp3', 'ytdoc'],
  desc: 'Download Youtube Songs.',
  category: 'download',
  filename: __filename
}, async (client, message, _, { from, prefix, quoted, q, reply }) => {
  try {
    if (!q) return reply('*❌ Give Me title or Url*');
    
    const searchResults = await yts(q);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    let responseText = '🎶 𝗦𝗔𝗗𝗜𝗬𝗔 𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n';
    responseText += `- 🎵 *TITLE :* ${video.title}\n`;
    responseText += `- 🤵 *DESCRIPTION :* ${video.description}\n`;
    responseText += `- ⏱ *TIME :* ${video.timestamp}\n`;
    responseText += `- 👀 *VIEWS :* ${video.views}\n`;
    responseText += `- 🖇️ *AGO :* ${video.ago}\n`;

    const sections = [{
      title: '',
      rows: [
        { title: '1', rowId: `${prefix}ytmp3 ${videoUrl}`, description: '🎧 Audio File' },
        { title: '2', rowId: `${prefix}ytdoc ${videoUrl}`, description: '📙 Document File' }
      ]
    }];

    const messageOptions = {
      image: { url: video.thumbnail || '' },
      caption: responseText,
      buttonText: '*🔢 Reply below number,*',
      footer: sadiya_md_footer,
      headerType: 4,
      sections
    };

    await client.sendMessage(from, messageOptions, quoted);
  } catch (error) {
    console.log(error);
    reply('❗ *Error Info:*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Audio (MP3)
cmd({
  pattern: 'ytmp3',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=mp3`);
    const audioUrl = response.result.download;

    await client.sendMessage(from, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg'
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❗ *Error Info:*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Audio Document (MP3)
cmd({
  pattern: 'ytdoc',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=mp3`);
    const audioUrl = response.result.download;

    await client.sendMessage(from, {
      document: { url: audioUrl },
      mimetype: 'audio/mpeg',
      fileName: response.result.title + '.mp3',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❗ *Error Info:*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: YouTube Video Download
cmd({
  pattern: 'ytmp4',
  react: '📽️',
  alias: ['ytmp4-240', 'ytvideo'],
  desc: 'Download Youtube Videos.',
  category: 'download',
  filename: __filename
}, async (client, message, _, { from, prefix, quoted, q, reply }) => {
  try {
    if (!q) return reply('*❌ Give Me title or Url*');
    
    const searchResults = await yts(q);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    let responseText = '🎶 𝗦𝗔𝗗𝗜𝗬𝗔 𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n';
    responseText += `- 🎵 *TITLE :* ${video.title}\n`;
    responseText += `- 🤵 *DESCRIPTION :* ${video.description}\n`;
    responseText += `- ⏱ *TIME :* ${video.timestamp}\n`;
    responseText += `- 👀 *VIEWS :* ${video.views}\n`;
    responseText += `- 🖇️ *AGO :* ${video.ago}\n`;

    const sections = [
      {
        title: 'Video File 🎥',
        rows: [
          { title: '1.1', rowId: `${prefix}ytmp4-240 ${videoUrl}`, description: '240 File 🎥' },
          { title: '1.2', rowId: `${prefix}ytmp4-360 ${videoUrl}`, description: '360 File 🎥' },
          { title: '1.3', rowId: `${prefix}ytmp4-720 ${videoUrl}`, description: '720 File 🎥' },
          { title: '1.4', rowId: `${prefix}ytmp4-1080 ${videoUrl}`, description: '1080 File 🎥' }
        ]
      },
      {
        title: 'Document File 📁',
        rows: [
          { title: '2.1', rowId: `${prefix}ytmp4doc-240 ${videoUrl}`, description: '240 File 📁' },
          { title: '2.2', rowId: `${prefix}ytmp4doc-360 ${videoUrl}`, description: '360 File 📁' },
          { title: '2.3', rowId: `${prefix}ytmp4doc-720 ${videoUrl}`, description: '720 File 📁' },
          { title: '2.4', rowId: `${prefix}ytmp4doc-1080 ${videoUrl}`, description: '1080 File 📁' }
        ]
      }
    ];

    const messageOptions = {
      image: { url: video.thumbnail || '' },
      caption: responseText,
      buttonText: '*🔢 Reply below number,*',
      footer: sadiya_md_footer,
      headerType: 4,
      sections
    };

    await client.sendMessage(from, messageOptions, quoted);
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video (240p)
cmd({
  pattern: 'ytmp4-240',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=240`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video (360p)
cmd({
  pattern: 'ytmp4-360',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=360`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video (720p)
cmd({
  pattern: 'ytmp4-720',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=720`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video (1080p)
cmd({
  pattern: 'ytmp4-1080',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=1080`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video Document (240p)
cmd({
  pattern: 'ytmp4doc-240',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=240`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      document: { url: videoUrl },
      mimetype: 'video/mp4',
      fileName: response.result.title + '.mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video Document (360p)
cmd({
  pattern: 'ytmp4doc-360',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=360`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      document: { url: videoUrl },
      mimetype: 'video/mp4',
      fileName: response.result.title + '.mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video Document (720p)
cmd({
  pattern: 'ytmp4doc-720',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=720`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      document: { url: videoUrl },
      mimetype: 'video/mp4',
      fileName: response.result.title + '.mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});

// Command: Download YouTube Video Document (1080p)
cmd({
  pattern: 'ytmp4doc-1080',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, _, { from, quoted, q, reply }) => {
  try {
    const response = await fetchJson(`https://sadiya-tech-apis.vercel.app/download/ytdl?url=${q}&apikey=${sadiya_apikey}&format=1080`);
    const videoUrl = response.result.download;

    await client.sendMessage(from, {
      document: { url: videoUrl },
      mimetype: 'video/mp4',
      fileName: response.result.title + '.mp4',
      caption: sadiya_md_footer
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(botNumber + '@s.whatsapp.net', { text: '❗ *Error Info:*\n' + error }, { quoted: message });
  }
});
