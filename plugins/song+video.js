const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const tharusha_md_img = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg"
const tharusha_md_footer = "> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ"
const { ytsearch } = require('@dark-yasiya/yt-dl.js');
const pakaya = "`"


cmd({
    pattern: "song",
    react: "🎵",
    desc: "Download yt songs.",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
      try {
          if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("Failed to fetch the audio. Please try again later.");
            }

        let teksnya = `*╭───────────────⊶*
*│ 🎧 ${pakaya}𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*
*╰─────────────────⊶*
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃*🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${yts.title}
*┃*⏳ *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${yts.timestamp}
*┃*🔰 *${pakaya}ᴠɪᴇᴡꜱ:${pakaya}* ${yts.views}
*┃*👤 *${pakaya}ᴀᴜᴛʜᴏʀ:${pakaya}* ${yts.author.name}
*┃*🔗 *${pakaya}ᴜʀʟ:${pakaya}* ${yts.url}
*┗━━━━━━━━━━━━━━━━━━━━┛*`;

   let vpsOptions = [
        
            { title: "ᴀᴜᴅɪᴏ ᴛʏᴘᴇ 🎧", description: "Download audio type.", id: `${prefix}songdlaudio` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ 📁", description: "Download document type.", id: `${prefix}songdldocument` },
            { title: "ᴠᴏɪᴄᴇ ᴄᴜᴛ 🎤", description: "Download voice cut type.", id: `${prefix}songdlvoicecut` },
           ];

        let buttonSections = [
            {
                title: "Select download type 📥",
                highlight_label: "THARUZZ",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔢 ꜱᴇʟᴇᴄᴛ ᴄᴀᴛᴏɢᴏʀʏ" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select type",
                        sections: buttonSections
                    })
                }
            }
        ]; 

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: yts.thumbnail },
            contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411607943828@newsletter',
                    newsletterName: `ᴛʜᴀʀᴜꜱʜᴀ 〽️ᴅ`,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "songdlaudio",
    react: "📥",
    desc: "Download yt songs.",
    category: "pakaya",
    filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
      try {
          if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("Failed to fetch the audio. Please try again later.");
            }

       /* let teksnya = `*╭───────────────⊶*
*│ 🎧 ${pakaya}𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*
*╰─────────────────⊶*
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃*🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${yts.title}
*┃*⏳ *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${yts.timestamp}
*┃*🔰 *${pakaya}ᴠɪᴇᴡꜱ:${pakaya}* ${yts.views}
*┃*👤 *${pakaya}ᴀᴜᴛʜᴏʀ:${pakaya}* ${yts.author.name}
*┃*🔗 *${pakaya}ᴜʀʟ:${pakaya}* ${yts.url}
*┗━━━━━━━━━━━━━━━━━━━━┛*`;

   let vpsOptions = [
        
            { title: "ᴀᴜᴅɪᴏ ᴛʏᴘᴇ 🎧", description: "Download audio type.", id: `${prefix}songdlaudio` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ 📁", description: "Download document type.", id: `${prefix}songdldocument` },
            { title: "ᴠᴏɪᴄᴇ ᴄᴜᴛ 🎤", description: "Download voice cut type.", id: `${prefix}songdlvoicecut` },
           ];

        let buttonSections = [
            {
                title: "Select download type 📥",
                highlight_label: "THARUZZ",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔢 ꜱᴇʟᴇᴄᴛ ᴄᴀᴛᴏɢᴏʀʏ" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select type",
                        sections: buttonSections
                    })
                }
            }
        ]; */

        conn.sendMessage(m.chat, {
            audio: { url: data.result.downloadUrl },
            mimetype: "audio/mpeg",
            contextInfo: {
        externalAdReply: {
            title: yts.title,
            body: "Join our WhatsApp Channel",
            mediaType: 1,
            thumbnailUrl: yts.thumbnail,
            sourceUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            mediaUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
     }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
