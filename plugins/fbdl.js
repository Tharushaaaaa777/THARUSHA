const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const os = require('os');
var { get_set , input_set } = require('../lib/set_db');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions');
const getFBInfo = require("@xaviabot/fb-downloader");
const pakaya = "`";
const huththa = "```";
const tharusha_md_img = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";
const tharusha_md_footer = "> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ";
const tharuzzprefix = config.PREFIX


cmd({
    pattern: "fb",
    react: "🧬",
    desc: "Download facebook video.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "🧬", key: mek.key } });

const result = await getFBInfo(q);

const captionHeader = `*╭─────────────⊶*
*│*🎥 *${pakaya}𝙵𝙱 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*
*╰─────────────────⊶*
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃ 🎥 ${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${result.title}
*┃ 🔗 ${pakaya}ᴜʀʟ:${pakaya}* ${q} 
*┗━━━━━━━━━━━━━━━━━━━━┛*
`;



   let vpsOptions = [
        
            { title: "ꜰʙ ᴠɪᴅᴇᴏ ʜᴅ 🎥", description: "Facebook video download hd quality.", id: `${tharuzzprefix}fbdlhdquality ${q}` },
            { title: "ꜰʙ ᴠɪᴅᴇᴏ ꜱᴅ 🎥", description: "Facebook video download sd quality.", id: `${tharuzzprefix}fbdlsdwuality ${q}` },
            { title: "ꜰʙ ᴠɪᴅᴇᴏ ᴀᴜᴅɪᴏ 🎵", description: "Facebook video audio file.", id: `${tharuzzprefix}fbdlaudio ${q}` },
            { title: "ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴄᴜᴍᴇɴᴛ 📄", description: "Facebook video audio doc file.", id: `${tharuzzprefix}fbdlaudiodoc ${q}` },
            { title: "ꜰʙ ᴠɪᴅᴇᴏ ᴠᴏɪᴄᴇ ᴄᴜᴛ 🎤", description: "Facbook video voice cut type.", id: `${tharuzzprefix}fbdlvoicecutptt ${q}` }
        ];

        let buttonSections = [
            {
                title: "Tharusha-md fb download. 📥",
                highlight_label: "𝚃𝙷𝙰𝚁𝚄𝚉𝚉-𝙼𝙳",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "🔢 ꜱᴇʟᴇᴄᴛ ᴠɪᴅᴇᴏ ᴛʏᴘᴇ" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select video type",
                        sections: buttonSections
                    })
                }
            }
        ]; 


        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: captionHeader,
            image: { url: result.thumbnail },
            contextInfo: {
      mentionedJid: ['94740326138@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363411607943828@newsletter',
          newsletterName: "ᴛʜᴀʀᴜꜱʜᴀ 〽️ᴅ",
          serverMessageId: 999
      },
      externalAdReply: {
          title: 'ᴛʜᴀʀᴜꜱʜᴀ 〽️ᴅ',
          body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ꜰᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
          mediaType: 1,
          sourceUrl: "https://github.com/Tharushaaaaa777",
          thumbnailUrl: tharusha_md_img, // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
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

cmd({
    pattern: "fbdlhdquality",
    react: "🧬",
    desc: "Download facebook video.",
    category: "උලමා",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });

const result = await getFBInfo(q);


let fbhdcap = `${huththa}YOUR HD QUALITY FACEBOOK VIDEO${huththa} 🎥

${tharusha_md_footer}`;

        conn.sendMessage(m.chat, {
video: { url: result.hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: fbhdcap,
     }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "fbdlsdwuality",
    react: "🧬",
    desc: "Download facebook video.",
    category: "උලමා",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });

const result = await getFBInfo(q);

let fbsdcap = `${huththa}YOUR SD QUALITY FACEBOOK VIDEO${huththa} 🎥

${tharusha_md_footer}`;


        conn.sendMessage(m.chat, {
video: { url: result.hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: fbsdcap,
     }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "fbdlaudio",
    react: "🧬",
    desc: "Download facebook video.",
    category: "උලමා",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });

const result = await getFBInfo(q);

        conn.sendMessage(m.chat, {
audio: { url: result.sd }, 
mimetype: "audio/mpeg"
     }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "fbdlaudiodoc",
    react: "🧬",
    desc: "Download facebook video.",
    category: "උලමා",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });

const result = await getFBInfo(q);

        conn.sendMessage(m.chat, {
              document: { url: result.sd },
              mimetype: "audio/mpeg",
              fileName: `THARUSHA ✘MD/FBDL.mp3`,
              caption: "*♯ `𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳`*"
     }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "fbdlvoicecutptt",
    react: "🧬",
    desc: "Download facebook video.",
    category: "උලමා",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

// async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "❌ Please provide a valid URL." }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "📥", key: mek.key } });

const result = await getFBInfo(q);

        conn.sendMessage(m.chat, {
         audio: { url: result.sd }, mimetype: 'audio/mp4', ptt: true
     }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
