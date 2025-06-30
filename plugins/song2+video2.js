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
    pattern: "song2",
    alias: ["mp32"],
    react: "🎵",
    desc: "Download you tube song 📥",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid url or query !");
      }

      const response = await dy_scrap.ytsearch(q);
        if(!response?.status) return await reply("❌ Failed to download song.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

        let teksnya = `*╭───────────────────●●►*\n` +
           `*│ 🔗 ${pakaya}𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*\n` +
           `*╰───────────────────●●►*\n\n` +
           `*┏━━━━━━━━━━━━━━━━━━━━┓*\n` +
           `*┃*🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${title}\n` +
           `*┃*⏳ *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${timestamp}\n` +
           `*┃* 👀 *${pakaya}ᴠɪᴇᴡꜱ:${pakaya}* ${views}\n` +
           `*┃* 👤 *${pakaya}ᴀᴜᴛʜᴏʀ:${pakaya}* ${author}\n` +
           `*┃* 🫧 *${pakaya}ᴀɢᴏ:${pakaya}* ${ago}\n` +
           `*┗━━━━━━━━━━━━━━━━━━━━┛*\n\n` +
          `${tharuzz_footer}`;

       // let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

   let vpsOptions = [
        
            { title: "ꜱᴏɴɢ ᴛʏᴘᴇ 🎧", description: "Download yt song type.", id: `${prefix}mp3songtype222 ${url}` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ 📂", description: "Download yt song document type.", id: `${prefix}mpdocumenttype222 ${url}` },
            { title: "ᴠᴏɪᴄᴇ ᴄᴜᴛ (ᴘᴛᴛ) 🎤", description: "Download yt song voice cut type.", id: `${prefix}mp3songvoicecut222 ${url}` }
          ];

        let buttonSections = [
            {
                title: "Video download types. 📥",
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
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
    pattern: "mp3songtype222",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
     // let quality = 360;
      const response = await dy_scrap.ytmp3_v2(yt_Url);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, { audio: { url: result.download.url }, mimetype: "audio/mpeg", 
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
}
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// you tube song download document type
cmd({
    pattern: "mpdocumenttype222",
    react: "📂",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
     // let quality = 360;
      const response = await dy_scrap.ytmp3_v2(yt_Url);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, { document: { url: result.download.url }, mimetype: "audio/mpeg", fileName: `${title}.mp3`, caption: "*♯ `𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰 〽️𝙳`*", contextInfo: {
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
   }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// you tube song download voice cut ptt type
cmd({
    pattern: "mp3songvoicecut222",
    react: "🎤",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
     // let quality = 360;
      const response = await dy_scrap.ytmp3_v2(yt_Url);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, { audio: { url: result.download.url }, mimetype: "audio/mpeg",
        ptt: true,
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
}
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "video2",
    alias: ["mp42"],
    react: "🎥",
    desc: "Download you tube video 📥",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid URL!");
      }

      const response = await dy_scrap.ytsearch(q);
        if(!response?.status) return await reply("❌ Failed to download video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

        let teksnya = `*╭───────────────────●●►*\n` +
           `*│ 🔗 ${pakaya}𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁${pakaya}*\n` +
           `*╰───────────────────●●►*\n\n` +
           `*┏━━━━━━━━━━━━━━━━━━━━┓*\n` +
           `*┃*🎵 *${pakaya}ᴛɪᴛʟᴇ:${pakaya}* ${title}\n` +
           `*┃*⏳ *${pakaya}ᴅᴜʀᴀᴛɪᴏɴ:${pakaya}* ${timestamp}\n` +
           `*┃* 👀 *${pakaya}ᴠɪᴇᴡꜱ:${pakaya}* ${views}\n` +
           `*┃* 👤 *${pakaya}ᴀᴜᴛʜᴏʀ:${pakaya}* ${author}\n` +
           `*┃* 🫧 *${pakaya}ᴀɢᴏ:${pakaya}* ${ago}\n` +
           `*┗━━━━━━━━━━━━━━━━━━━━┛*\n\n` +
          `${tharuzz_footer}`;

       // let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

   let vpsOptions = [
        
            { title: "ᴠɪᴅᴇᴏ ᴛʏᴘᴇ (360p) 🎥", description: "Download video 360p quality.", id: `${prefix}mp4videotype360q ${url}` },
            { title: "ᴠɪᴅᴇᴏ ᴛʏᴘᴇ (720p) 🎥", description: "Download video 720p quality.", id: `${prefix}mp4videotype720q ${url}` },
            { title: "ᴠɪᴅᴇᴏ ᴛʏᴘᴇ (1080p) 🎥", description: "Download video 1080p quality", id: `${prefix}mp4videotype1080q ${url}` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ (360p) 📁", description: "Download document type", id: `${prefix}mp4doctype360q ${url}` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ (720p) 📁", description: "Download document type", id: `${prefix}mp4doctype720q ${url}` },
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ (1080p) 📁", description: "Download document type", id: `${prefix}mp4doctype1080q ${url}` },
          ];

        let buttonSections = [
            {
                title: "Video download types. 📥",
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
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

// you tube video download 360p quality.l
cmd({
    pattern: "mp4videotype360q",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
      let quality = 360;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
            video: { url: result.download.url },
            caption: `🎥 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (360p) Qᴜᴀʟɪᴛʏ !${pakaya}*\n\n> ${title}`,
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
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

// you tube video download 720p quality
cmd({
    pattern: "mp4videotype720q",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
      let quality = 720;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download  video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
            video: { url: result.download.url },
            caption: `🎥 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (720p) Qᴜᴀʟɪᴛʏ !${pakaya}*\n\n> ${title}`,
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
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

// you tube video download 1080p quality
cmd({
    pattern: "mp4videotype1080q",
    react: "📥",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valiᴅ URL!");
      }
      let yt_Url = q;
      let quality = 1080;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
            video: { url: result.download.url },
            caption: `🎥 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (1080p) Qᴜᴀʟɪᴛʏ !${pakaya}*\n\n> ${title}`,
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
                      body: 'ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
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

// you tube video document type 360p quality.
cmd({
    pattern: "mp4doctype360q",
    react: "📂",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid  URL!");
      }
      let yt_Url = q;
      let quality = 360;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
        document: { url: result.download.url },
                            mimetype: "video/mp4",
                            fileName: `${title}.mp4`,
                            caption: `📂 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (360p) Qᴜᴀʟɪᴛʏ ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ !${pakaya}*\n\n> ${title}`,
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
    }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// you tube video document type 720p quality.
cmd({
    pattern: "mp4doctype720q",
    react: "📂",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid URL!");
      }
      let yt_Url = q;
      let quality = 720;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
        document: { url: result.download.url },
                            mimetype: "video/mp4",
                            fileName: `${title}.mp4`,
                            caption: `📂 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (720p) Qᴜᴀʟɪᴛʏ ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ !${pakaya}*\n\n> ${title}`,
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
    }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

// you tube video document type 360p quality.
cmd({
    pattern: "mp4doctype1080q",
    react: "📂",
    desc: "download tik tok.",
    category: "hithtje",
    filename: __filename
}, async (conn, mek, m, { from, q, reply, prefix, pushname }) => {
    try {

      if (!q || !isUrl(q)) {
            return await reply("❌ Please provide a valid URL!");
      }
      let yt_Url = q;
      let quality = 1080;
      const response = await dy_scrap.ytmp4_v2(yt_Url, quality);
        if(!response?.status) return await reply("❌ Failed to download video.");
        const { type, videoId, url, title, description, image, thumbnail, seconds, timestamp, duration, ago, views, author } = response?.results;

  

        conn.sendMessage(m.chat, {
        document: { url: result.download.url },
                            mimetype: "video/mp4",
                            fileName: `${title}.mp4`,
                            caption: `📂 *${pakaya}ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ʏᴏᴜ-ᴛᴜʙᴇ ᴠɪᴅᴇᴏ (1080p) Qᴜᴀʟɪᴛʏ ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ !${pakaya}*\n\n> ${title}`,
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
    }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
