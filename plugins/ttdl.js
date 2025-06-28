const axios = require('axios');
const config = require('../config');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions');
const DY_SCRAP = require('@dark-yasiya/scrap');
const dy_scrap = new DY_SCRAP();
const pakaya = "`";
const tharuzz_footer = "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ*";
const { cmd, commands } = require('../lib/command');
const os = require('os');


cmd({
    pattern: "tiktok",
    alias: ["tt", "ttdl"],
    react: "🫧",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid TikTok URL!");
      }

      const response = await dy_scrap.tiktok(q);
        if(!response?.status) return await reply("❌ Failed to download TikTok video.");
        const { id, region, title, cover, duration, play, sd, hd, music, play_count, digg_count, comment_count, share_count, download_count, collect_count } = response?.result;

        let teksnya = `*╭───────────────────●●►*\n` +
           `*│ 🔗 ${pakaya}𝚃𝙸𝙺 𝚃𝙾𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*\n` +
           `*╰───────────────────●●►*\n\n` +
           `*┏━━━━━━━━━━━━━━━━━━━━┓*\n` +
           `*┃*🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${title}\n` +
           `*┃*⏳ *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${duration}\n` +
           `*┃*👀 *${pakaya}ᴠɪᴇᴡꜱ:${pakaya}* ${play_count}\n` +
           `*┃*❤️ *${pakaya}ʟɪᴋᴇꜱ:${pakaya}* ${digg_count}\n` +
           `*┗━━━━━━━━━━━━━━━━━━━━┛*\n\n` +
          `${tharuzz_footer}`;

       // let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

   let vpsOptions = [
        
            { title: "ᴡɪᴛʜ ᴡᴀᴛᴇʀᴍᴀʀᴋ 🎫", description: "Get Bot Download Menu", id: `${prefix}downmenu` },
            { title: "ᴡɪᴛʜᴏᴜᴛ ᴡᴀᴛᴇʀᴍᴀʀᴋ 🎟️", description: "Get Bot Movie Menu", id: `${prefix}moviemenu` },
          ];

        let buttonSections = [
            {
                title: "Tik tok download types. 📥",
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
                        title: "Select Type",
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
            image: { url: randomTharuzzImg },
            contextInfo: {
                  mentionedJid: ['94740326138@s.whatsapp.net'], // specify mentioned JID(s) if any
                  groupMentions: [],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '@newsletter',
                      newsletterName: "𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔 〽️𝗗",
                      serverMessageId: 999
                  },
                  externalAdReply: {
                      title: '𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔 〽️𝗗',
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴄᴏᴍᴍᴀɴᴅꜱ',
                      mediaType: 1,
                      sourceUrl: "https://github.com/Tharushaaaaa777",
                      thumbnailUrl: randomTharuzzImg, // This should match the image URL provided above
                      renderLargerThumbnail: false,
                      showAdAttribution: true
                  }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});








