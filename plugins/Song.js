const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
const yts = require('ytsearch-venom');
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const pakaya = "`"


cmd({
    pattern: "menu",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply, prefix, query}) => {
    try {
      if (!query) {
        return await reply('🔎 *Please provide a song name or YouTube link!*');
      }
      const cleanedQuery = query.replace(/\?si=[^&]*/, ''); // Remove ?si parameter
      const searchResults = await yts(cleanedQuery);
      const video = searchResults.videos[0];
      const tharuwa_footer = "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ*";

        let teksnya = `*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 🍀 ${pakaya}ᴛɪᴛʟᴇ :${pakaya} ${video.title}* 
*┃ 👀 ${pakaya}ᴠɪᴇᴡꜱ :${pakaya} ${video.views}* 
*┃ 🕑 ${pakaya}ᴅᴜʀᴀᴛɪᴏɴ :${pakaya} ${video.duration}
*┃ 🔗 ${pakaya}ᴜʀʟ :${pakaya} ${video.url}*
*┗━━━━━━━━━━━━━━━━━━━┛*

> ${tharuwa_footer}`;

        //let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

       /* let vpsOptions = [
        
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥", description: "Get Bot Download Menu", id: `${prefix}downloadmenu` },
            { title: "ᴍᴏᴠɪᴇ ᴍᴇɴᴜ 🎬", description: "Get Bot Movie Menu", id: `${prefix}moviemenu` },
            { title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ♻️", description: "Get Bot Convert Menu", id: `${prefix}convertmenu` },
            { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ 👥", description: "Get Group Only Commands", id: `${prefix}groupmenu` },
            { title: "ᴀɪ ᴍᴇɴᴜ 🤖", description: "Get Bot AI Commands List", id: `${prefix}aimenu` },
            { title: "ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍", description: "Get Bot Search Menu", id: `${prefix}searchmenu` },
            { title: "ꜰᴜɴ ᴍᴇɴᴜ 😂", description: "Fun Joke Menu Bot", id: `${prefix}funmenu` },
            { title: "ʙᴜɢ ᴍᴇɴᴜ 💥", description: "Owner Only Bug Menu", id: `${prefix}bugmenu` },
            { title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ 🤤", description: "Other Commands Menu", id: `${prefix}othermenu` }
        ];*/

      /*  let buttonSections = [
            {
                title: "THARUSHA-MD Command list.",
                highlight_label: "THARUZZ",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select Menu" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select Your Choosen",
                        sections: buttonSections
                    })
                }
            }
        ];*/

      const buttons = [
        {
          buttonId: prefix + `${prefix}ytaa ` + video.url,
          buttonText: { displayText: '🎧 Audio Type' },
          type: 1,
        },
        {
          buttonId: prefix + `${prefix}ytad ` + video.url + '&' + video.thumbnail + '&' + video.title,
          buttonText: { displayText: '📂 Document Type' },
          type: 1,
        },
      ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: video.thumbnail },
            /*contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411607943828@newsletter',
                    newsletterName: `ᴛʜᴀʀᴜꜱʜᴀ 〽️ᴅ`,
                    serverMessageId: 143
                }
            }*/
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// Command to download MP3 from YouTube URL
cmd(
  {
    pattern: 'ytaa',
    react: '📥',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (conn, message, mek, m, match, { from, q, reply }) => {
    if (!q) {
      return await reply('*Need a youtube url!*');
    }
    try {
      const data = await fetchJson(`https://yt-five-tau.vercel.app/download?q=${q}&format=mp3`);
      await conn.sendMessage(from, { react: { text: '⬆️', key: m.key } });
      await conn.sendMessage(from, { audio: { url: data.result.download }, mimetype: 'audio/mpeg' }, { quoted: mek });
      await conn.sendMessage(from, { react: { text: '✔️', key: m.key } });
    } 
catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
  }
);
// Command to download MP3 and send as a document with thumbnail
cmd(
  {
    pattern: 'ytad',
    react: '⬇️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (conn, message, match, { from, q, reply }) => {
    try {
      if (!q) {
        return await reply('*Need a youtube url!*');
      }
      const url = q.split('&')[0];
      const thumbnailUrl = q.split('&')[1];
      const fileName = q.split('&')[2];
      const thumbnailResponse = await fetch(thumbnailUrl);
      const thumbnailBuffer = await thumbnailResponse.buffer();
      const resizedThumbnail = await resizeImage(thumbnailBuffer, 200, 200);
      const data = await fetchJson(`https://yt-five-tau.vercel.app/download?q=${url}&format=mp3`);
      await conn.sendMessage(from, {
        react: { text: '⬆️', key: m.key },
      });
      await conn.sendMessage(
        from,
        {
          document: { url: data.result.download },
          jpegThumbnail: resizedThumbnail,
          caption: config.FOOTER,
          mimetype: 'audio/mpeg',
          fileName: fileName,
        },
        { quoted: mek }
      );
      await client.sendMessage(from, {
        react: { text: '✔️', key: m.key },
      });
    } 
    catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
  }
  }
);
