const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const os = require('os');
var { get_set , input_set } = require('../lib/set_db') ;
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions');
const pakaya = "`";
//const tharusha_md_img = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg"
const tharusha_md_footer = "> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ";
const menuimg = 'https://i.ibb.co/HLLxrDvv/Tharusha-Md.jpg';
const menuimg1 = 'https://i.ibb.co/ksPNZMkj/Tharusha-Md.jpg';
const menuimg2 = 'https://i.ibb.co/pjh8V1FH/Tharusha-Md.jpg';
const menuimg3 = 'https://i.ibb.co/DHLqTQXg/Tharusha-Md.jpg';
const menuimg4 = 'https://i.ibb.co/r2dzHCTz/Tharusha-Md.jpg';
const menuimg5 = 'https://i.ibb.co/234RzpD1/Tharusha-Md.jpg';
const menuimg6 = 'https://i.ibb.co/hFwCWPND/Tharusha-Md.jpg';
const menuimg7 = 'https://i.ibb.co/dJmvFXRz/Tharusha-Md.jpg';
const menuimg8 = 'https://i.ibb.co/dJcYNj45/Tharusha-Md.jpg';
const menuimg9 = 'https://i.ibb.co/WNsH5yNF/Tharusha-Md.jpg';
const menuimg10 = 'https://i.ibb.co/C3z4xZyW/Tharusha-Md.jpg';

const tharuzzmenuimages = [menuimg, menuimg1, menuimg2, menuimg3, menuimg4, menuimg5, menuimg6, menuimg7, menuimg8, menuimg9, menuimg10];
const randomTharuzzImg = tharuzzmenuimages[Math.floor(Math.random() * supunImages.length)];

const pushwish;
if (time2 < '06:00:00') pushwish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌞';
else if (time2 < '12:00:00') pushwish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌞';
else if (time2 < '15:00:00') pushwish = 'ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ ☀️';
else if (time2 < '18:00:00') pushwish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌄';
else pushwish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌌';



cmd({
    pattern: "menu",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

        let teksnya = `*${pakaya}${pushwish}${pakaya} ${pushname}*,

*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 👾 ${pakaya}ʙᴏᴛ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ* 
*┃ 👤 ${pakaya}ᴏᴡɴᴇʀ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ* 
*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*
*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*
*┗━━━━━━━━━━━━━━━━━━━┛*

📜 *${pakaya}тнαяυѕнα-м∂ ¢σммαη∂ ℓιѕт${pakaya}*`;

       // let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

   let vpsOptions = [
        
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥", description: "Get Bot Download Menu", id: `${prefix}downmenu` },
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
                buttonText: { displayText: "🔢 ꜱᴇʟᴇᴄᴛ ᴄᴀᴛᴏɢᴏʀʏ" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "📜 Select Your Choosen",
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
// Download commands
cmd({
  pattern: 'downmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { download: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 📥\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'moviemenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { movie: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🎬\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'convertmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { convert: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ♻️\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'groupmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { group: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 👥\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'aimenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { ai: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🤖\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'searchmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { search: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🔍\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'funmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { fun: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 😂\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'bugmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { bug: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗕𝗨𝗚 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 💥\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

cmd({
  pattern: 'othermenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { other: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*╭──────────●●►*\n*│ 🌀 ᴄᴏᴍᴍᴀɴᴅ : .${commands[i].pattern}*\n*│ 💬 ᴅᴇꜱᴄʀʏᴘᴛɪᴏɴ :* ${commands[i].desc}\n*╰─────────────────────●●►*\n\n`;
      }
    }
    const caption = `𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔-𝗠𝗗 𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 🤤\n\n*┏━━━━━━━━━━━━━━━━━━━┓*\n*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*\n*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*\n*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*\n*┗━━━━━━━━━━━━━━━━━━━┛*\n\n${commandList.download}\n\n${tharusha_md_footer}`;
    await client.sendMessage(from, { image: { url: tharusha_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

//===========menu========
cmd({
    pattern: "listmenu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${pakaya}✘${pakaya} *${commands[i].pattern}*\n`;
 }
}

let madeMenu = `
👋 𝐇𝐄𝐋𝐋𝐎 ${pushname},

✨ 𝗧𝗛𝗔𝗥𝗨𝗦𝗛𝗔 𝗠𝗗 𝗩2 𝗨𝗟𝗧𝗜𝗠𝗔𝗧𝗘 ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ *яυηтιмє*- ${runtime(process.uptime())}
│◈ *σωηєя ηαмє*- ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ / ʟᴀᴋꜱʜᴀɴ ᴅᴀᴍᴀʏᴀɴᴛʜᴀ
│◈ *σωηєя ηυмвєя*- +94740326138 
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►

> *© ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ*`

conn.sendMessage(m.chat, {
            caption:madeMenu,
            contextInfo: {
      mentionedJid: ['94740326138@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '@newsletter',
          newsletterName: "𝒯𝐻𝒜𝑅𝒰𝒵𝒵 𝒪𝐹𝒞",
          serverMessageId: 999
      },
      externalAdReply: {
          title: '𝒯𝐻𝒜𝑅𝒰𝒵𝒵 𝒪𝐹𝒞',
          body: 'ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ',
          mediaType: 1,
          sourceUrl: "https://github.com/Tharushaaaaa777",
          thumbnailUrl: tharusha_md_img, // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
        }, { quoted: mek });

/*return await conn.sendMessage(from,
                              {
                                  caption:madeMenu,
                                  contextInfo: {
      mentionedJid: ['94740326138@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '@newsletter',
          newsletterName: "𝒯𝐻𝒜𝑅𝒰𝒵𝒵 𝒪𝐹𝒞",
          serverMessageId: 999
      },
      externalAdReply: {
          title: '𝒯𝐻𝒜𝑅𝒰𝒵𝒵 𝒪𝐹𝒞',
          body: 'ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ',
          mediaType: 1,
          sourceUrl: "https://github.com/Tharushaaaaa777",
          thumbnailUrl: tharusha_md_img, // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
                              }
                              ,{quoted: mek});*/
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
