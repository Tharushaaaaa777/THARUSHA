const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const pakaya = "`"


cmd({
    pattern: "menu3",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
    try {

        let teksnya = `👋 *🅷🅴🅻🅻🅾 𝘣𝘶𝘥𝘥𝘺 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 ${pakaya}ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ${pakaya} 😗*

*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 👾 ${pakaya}ʙᴏᴛ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ* 
*┃ 👤 ${pakaya}ᴏᴡɴᴇʀ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ* 
*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*
*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*
*┗━━━━━━━━━━━━━━━━━━━┛*

📜 *тнαяυѕнα-м∂ ¢σммαη∂ ℓιѕт*`;

        let imageUrl = "https://i.ibb.co/HpCN8RtR/7946.jpg";

        let vpsOptions = [
        
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥", description: "Get Bot Download Menu", id: `${prefix}downloadmenu` },
            { title: "ᴍᴏᴠɪᴇ ᴍᴇɴᴜ 🎬", description: "Get Bot Movie Menu", id: `${prefix}moviemenu` },
            { title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ♻️", description: "Get Bot Convert Menu", id: `${prefix}convertmenu` },
            { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ 👥", description: "Get Group Only Commands", id: `${prefix}groupmenu` },
            { title: "ᴀɪ ᴍᴇɴᴜ 🤖", description: "Get Bot AI Commands List", id: `${prefix}aimenu` },
            { title: "ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍", description: "Get Bot Search Menu", id: `${prefix}searchmenu` },
            { title: "ꜰᴜɴ ᴍᴇɴᴜ 😂", description: "Fun Joke Menu Bot", id: `${prefix}funmenu` },
            { title: "ʙᴜɢ ᴍᴇɴᴜ 💥", description: "Owner Only Bug Menu", id: `${prefix}bugmenu` },
            { title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ 🤤", description: "Other Commands Menu", id: `${prefix}othermenu` }
        ];

        let buttonSections = [
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
        ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: imageUrl },
            contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
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
