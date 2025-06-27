const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const pakaya = "`"
//const prefix = config.PREFIX

cmd({
    pattern: "alive",
    react: "🚀",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix, pushname}) => {
    try {

        let teksnya = `👋 *🅷🅴🅻🅻🅾 ${pushname} 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 ${pakaya}ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ${pakaya} 😗*
        
*╭──────────⊶*
*│ 🌏 ${pakaya}ɪ'ᴍ ᴀʟɪᴠᴇ ɴᴏᴡ...${pakaya}*
*╰─────────────⊶*
*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 👾 ${pakaya}ʙᴏᴛ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ* 
*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*
*┗━━━━━━━━━━━━━━━━━━━┛*
`;

        let imageUrl = "https://i.ibb.co/Z1zJCY2z/Tharusha-Md.jpg";

        let vpsOptions = [
        
            { title: "ɢᴇᴛ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ 📜", description: "Get Bot Commands", id: `${prefix}menu` },
            { title: "ɢᴇᴛ ʙᴏᴛ ꜱᴘᴇᴇᴅ 🚀", description: "Get Bot Speed", id: `${prefix}ping` },
            { title: "ɢᴇᴛ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ 🧬", description: "Get Bot System", id: `${prefix}system` },
          ];

        let buttonSections = [
            {
                title: "THARUSHA-MD sections.",
                highlight_label: "THARUZZ",
                rows: vpsOptions
            }
        ];

         /*const buttons = [
        {
          buttonId: prefix + `${prefix}menu`,
          buttonText: { displayText: 'Bot Commands 📜' },
          type: 1,
        },
        {
          buttonId: prefix + `${prefix}ping`,
          buttonText: { displayText: 'Bot Speed 📍' },
          type: 1,
        },
      ];*/
        

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select" },
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
