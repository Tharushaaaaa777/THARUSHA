const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const os = require('os');
var { get_set , input_set } = require('../lib/set_db') ;
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions');
const pakaya = "`";
const tharusha_md_img = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";
const tharusha_md_footer = "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ*";
const tharusha_md_channeljid = "120363411607943828@newsletter";
const tharusha_md_newslatter_name = "ᴛʜᴀʀᴜꜱʜᴀ 〽️ᴅ";
//const { cmd } = require('../lib/command'); // WhatsApp bot framework (e.g., Baileys)
const axios = require('axios');
const cheerio = require('cheerio');
const gis = require('g-i-s');
//const yts = require('youtube-search');
const { File } = require('megajs');
const fs = require('fs');
const path = require('path');


cmd({
    pattern: "pronhub",
    react: "🤤",
    desc: "18+ adult video content from www.pronhub.com",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix, query, pushname }) => {
    try {

if (!query) return reply('❌ please enter walid query.');

const searchUrl = `https://dark-yasiya-api.site/api/search/pornhub?query=${encodeURIComponent(query)}`;

const categoriesUrl = 'https://dark-yasiya-api.site/api/pornhub/categories';

    const results = await fetchJson(searchUrl);
    const categories = await fetchJson(categoriesUrl);

  if (!results?.data?.length) throw new Error('❌ No videos found.');

const sections = [{
      title: 'Search Results',
      rows: results.data.map((item, index) => ({
        title: `${index + 1}`,
        description: item.title,
        rowId: `.pakeprondl ${item.url}`
      }))
    }];

    const listMessage = {
      text: `🔞 *Results for ${query}*`,
      footer: await getFooter(),
      title: '',
      buttonText: 'Select a video',
      sections
    };

conn.sendMessage(m.chat, listMessage, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*වීඩියෝ හොයාගන්න බැරි උනා ඕයි* 😓😖`);
    }
});

cmd({
    pattern: "pakeprondl",
    react: "♻️",
    desc: "ආච්චිගෙ රෙද්ද select කරන්න",
    category: "pake",
    filename: __filename
}, async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

        if (!url || !isValidUrl(url)) return reply('❌ කරුණාකර වලංගු වීඩියෝ URL එකක් ලබා දෙන්න.');
        
//await conn.sendMessage(m.chat, { react: { text: '🔄', key: message.key } });

const apiUrl = `https://dark-yasiya-api.site/api/downloader/pornhub?url=${encodeURIComponent(url)}`;
    const { data } = await fetchJson(apiUrl);

    if (!data?.format?.length) throw new Error('No formats available.');

    const formats = data.format.map(item => item.url);
    const rows = formats.map((formatUrl, index) => ({
      title: `${index + 1}`,
      rowId: `.xbbb ${formatUrl}|${data.video_title}|${data.thumbnail}`,
      description: ['240p', '480p', '720p', '1080p'][index] || 'Unknown'
    })).reverse();

const caption = `
🔞 *THARUSHA-MD PRONHUB VIDEO INFO*

*╭──────────────●●►*
*│📜 ᴛɪᴛʟᴇ:* ${data.video_title || 'Video'}
*│🕑 ᴅᴜʀᴀᴛɪᴏɴ:* ${data.duration || 'N/A'}
*│📆 ᴜᴘʟᴏᴀᴅ ᴅᴀᴛᴇ:* ${data.video_upload_date || 'N/A'}
*│🧬 ʟɪɴᴋ:* ${url}
*╰──────────────●●►*

${tharusha_md_footer}`;

const listMessage = {
      caption,
      image: { url: data.thumbnail },
      footer: tharusha_md_footer,
      title: '',
      buttonText: 'Select video quality',
      sections: [{ title: '', rows }]
    };


        conn.sendMessage(m.chat, listMessage, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "xbbb",
    react: "😒",
    desc: "ඔන්න",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply ,query ,prefix, pushname }) => {
    try {

if (!query) return reply('❌ කරුණාකර වලංගු බාගත URL එකක් ලබා දෙන්න.');
        
      
const [formatUrl, title, thumbnail] = query.split('|');
    if (!isValidUrl(formatUrl)) throw new Error('Invalid download URL.');
    const thumbnailBuffer = thumbnail ? await getimage(thumbnail) : null;  

        conn.sendMessage(m.chat, {
document: { url: formatUrl },
      jpegThumbnail: thumbnailBuffer,
      mimetype: 'video/mp4',
      fileName: `${title || 'Video'}.mp4`,
      caption: `${title || 'Video'}\n${tharusha_md_footer}`
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
