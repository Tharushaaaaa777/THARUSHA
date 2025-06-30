const axios = require('axios');
const config = require('../settings');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions');
const DY_SCRAP = require('@dark-yasiya/scrap');
const dy_scrap = new DY_SCRAP();
const pakaya = "`";
const tharuzz_images = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";
const tharuzz_footer = "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ*";
const { cmd, commands } = require('../lib/command');
const os = require('os');


cmd({
    pattern: "facebook2",
    alias: ["fb2","fbdl2"],
    react: "🩵",
    desc: "Download facebook video 📥",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid url or query !");
      }

      const response = await dy_scrap.ytsearch(q);
        if(!response?.status) return await reply("❌ Failed to download song.");
        const { desc, image, title, duration, sd, hd } = response?.results;

        let teksnya = `*╭───────────────────●●►*\n` +
           `*│ 🔗 ${pakaya}𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*\n` +
           `*╰───────────────────●●►*\n\n` +
           `*┏━━━━━━━━━━━━━━━━━━━━┓*\n` +
           `*┃* 🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${title}\n` +
           `*┃* ✍️ *${pakaya}ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ:${pakaya}* ${desc}\n` +
           `*┃* 🕑 *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${duration}\n` +
           `*┃* 🧬 *${pakaya}ᴜʀʟ:${pakaya}* ${q}\n` +
           `*┗━━━━━━━━━━━━━━━━━━━━┛*\n\n` +
          `${tharuzz_footer}`;

       // let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

   let vpsOptions = [
        
            { title: "ʜᴅ ᴠɪᴅᴇᴏ 🎥", description: "Download  facebook video hd quality.", id: `${prefix}fbhddl222 ${q}` },
            { title: "ꜱᴅ ᴠɪᴅᴇᴏ 🎥", description: "Download facebook video sd quality.", id: `${prefix}fbsddl222 ${q}` }
          ];

        let buttonSections = [
            {
                title: "facebook video download types. 📥",
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
                        title: "Selec video quality",
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
            image: { url: thumbnail },
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ꜰᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
                      mediaType: 1,
                      sourceUrl: "https://github.com/Tharushaaaaa777",
                      thumbnailUrl: tharuzz_images, // This should match the image URL provided above
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

// you tube song download song type
cmd({
    pattern: "fbhddl222",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let fb_Url = q;
     // let quality = 360;
      const response = await dy_scrap.facebook(fb_Url);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { desc, image, title, duration, sd, hd } = response?.results;

  

        conn.sendMessage(m.chat, { video: { url: hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "```THIS IS YOUR HD QUALITY FACEBOOK VIDEO``` 🎥\n\n*♯ `𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳`*"
        
        /*audio: { url: result.download.url }, mimetype: "audio/mpeg", 
        contextInfo: {
         externalAdReply: {
            title: title,
            body: "Join our WhatsApp Channel",
            mediaType: 1,
            thumbnailUrl: thumbnail,
            sourceUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            mediaUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
}*/
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "fbsddl222",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let fb_Url = q;
     // let quality = 360;
      const response = await dy_scrap.facebook(fb_Url);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { desc, image, title, duration, sd, hd } = response?.results;

  

        conn.sendMessage(m.chat, { video: { url: sd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "```THIS IS YOUR SD QUALITY FACEBOOK VIDEO``` 🎥\n\n*♯ `𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳`*"
        
        /*audio: { url: result.download.url }, mimetype: "audio/mpeg", 
        contextInfo: {
         externalAdReply: {
            title: title,
            body: "Join our WhatsApp Channel",
            mediaType: 1,
            thumbnailUrl: thumbnail,
            sourceUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            mediaUrl: 'https://whatsapp.com/channel/0029Vb4eZqo3bbV0lTGjFn2S',
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
}*/
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
