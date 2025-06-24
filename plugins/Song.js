const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
const yts = require('ytsearch-venom');
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const pakaya = "`"

cmd(
  {
    pattern: 'song',
    alias: ['ytsong'],
    use: '.song <query or url>',
    react: '🎧',
    desc: 'Download high-quality songs from YouTube',
    category: 'Download',
    filename: __filename,
  },
  async (
    client,
    conn,// WhatsApp socket/client instance
    message,
    m,// The message object
    store, 
    mek,// Store or context
    { from, prefix, query, reply } // Destructured parameters
  ) => {
    try {
      if (!query) {
        return await reply('🔎 *Please provide a song name or YouTube link!*');
      }
      const cleanedQuery = query.replace(/\?si=[^&]*/, ''); // Remove ?si parameter
      const searchResults = await yts(cleanedQuery);
      const video = searchResults.videos[0];
      const footerText = config.FOOTER;

      let responseText =
        '*SONG DOWNLOADER* 🎶\n\n' +
        '┌────────────────────┐\n' +
        '│ 🎵 *Title:* ' + video.title + '\n' +
        '│ 👁️ *Views:* ' + video.views + '\n' +
        '│ ⏱️ *Duration:* ' + video.duration + '\n' +
        '│ 🔗 *URL:* ' + video.url + '\n' +
        '└────────────────────┘\n';

      const buttons = [
        {
          buttonId: prefix + 'ytaa ' + video.url,
          buttonText: { displayText: '🎧 Audio Format' },
          type: 1,
        },
        {
          buttonId: prefix + 'ytad ' + video.url + '&' + video.thumbnail + '&' + video.title,
          buttonText: { displayText: '📂 Document Format' },
          type: 1,
        },
      ];

      /*const buttonMessage = {
        image: { url: video.thumbnail },
        caption: responseText,
        footer: footerText,
        buttons,
        headerType: 4,
      };

      if (config.MODE === 'button') {
        await client.sendMessage(
          from,
          {
            image: { url: video.thumbnail },
            caption: responseText,
            footer: config.FOOTER,
            buttons,
            headerType: 1,
            viewOnce: true,
          },
          { quoted: message }
        );
      } else if (config.MODE === 'nonbutton') {
        await client.buttonMessage(from, buttonMessage, message);
      }*/
      conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: responseText,
            image: { url: video.thumbnail },
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
    } catch (error) {
      console.error(error);
      await reply('❌ *Song not found or an error occurred.*');
    }
  }
);
