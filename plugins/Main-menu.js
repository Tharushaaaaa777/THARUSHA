const { cmd, commands } = require('../lib/command')
const config = require('../settings')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const pakaya = "`"
const tharusha_md_img = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg"
const tharusha_md_footer = "> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ"


cmd({
    pattern: "menu",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix, pushname }) => {
    try {

        let teksnya = `👋 *🅷🅴🅻🅻🅾 ${pushname} 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 ${pakaya}ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ${pakaya} ωнαтѕαρρ вσт.😗*

*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 👾 ${pakaya}ʙᴏᴛ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ* 
*┃ 👤 ${pakaya}ᴏᴡɴᴇʀ :${pakaya} ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ* 
*┃ 📁 ${pakaya}ᴍᴇᴍᴏʀʏ :${pakaya} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
*┃ 🕑 ${pakaya}ʀᴜɴᴛɪᴍᴇ :${pakaya} ${runtime(process.uptime())}*
*┃ 📍 ${pakaya}ᴠᴇʀᴛɪᴏɴ :${pakaya} 2.0.0 ʙᴇᴛᴀ*
*┗━━━━━━━━━━━━━━━━━━━┛*

📜 *тнαяυѕнα-м∂ ¢σммαη∂ ℓιѕт*`;

        let imageUrl = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg";

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
