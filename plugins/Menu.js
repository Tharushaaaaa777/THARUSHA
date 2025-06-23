const { cmd, commands } = require('../lib/command');

const sadiya_md_img = 'https://i.ibb.co/N6Hg4QWN/Sadiya-Md.jpg';
const sadiya_md_footer = '> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀᴅɪʏᴀ ᴛᴇᴄʜ*';

// Main Menu Command
cmd({
  pattern: 'menu5',
  react: '📂',
  alias: ['panel', 'list'],
  desc: 'Get Command Panel.',
  category: 'main',
  filename: __filename
}, async (client, message, input, { from, prefix, quoted, pushname, reply }) => {
  try {
    const caption = `*👋 Hello ${pushname}*\n\n━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐒𝐀𝐃𝐈𝐘𝐀 𝐌𝐃 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━`;
    const sections = [{
      title: '',
      rows: [
        { title: '1', rowId: `${prefix}mainmenu`, description: 'MAIN MENU' },
        { title: '2', rowId: `${prefix}downmenu`, description: 'DOWNLOAD MENU' },
        { title: '3', rowId: `${prefix}aimenu`, description: 'AI MENU' },
        { title: '4', rowId: `${prefix}groupmenu`, description: 'GROUP MENU' },
        { title: '5', rowId: `${prefix}ownermenu`, description: 'OWNER MENU' },
        { title: '6', rowId: `${prefix}convertmenu`, description: 'CONVERT MENU' },
        { title: '7', rowId: `${prefix}searchmenu`, description: 'SEARCH MENU' },
        { title: '8', rowId: `${prefix}channelmenu`, description: 'CHANNEL MENU' }
      ]
    }];
    const buttonMessage = {
      image: { url: sadiya_md_img },
      caption,
      buttonText: '*🔢 Reply below number,*',
      footer: sadiya_md_footer,
      headerType: 4,
      sections
    };
    await client.replyBtn(from, buttonMessage, message);
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Download Menu Command
cmd({
  pattern: 'downmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { download: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.download}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Channel Menu Command
cmd({
  pattern: 'channelmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { channel: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.channel}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// AI Menu Command
cmd({
  pattern: 'aimenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { ai: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐀𝐈 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.ai}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Main Menu Command (Detailed)
cmd({
  pattern: 'mainmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { main: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.main}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Owner Menu Command
cmd({
  pattern: 'ownermenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { owner: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐴𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.owner}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Group Menu Command
cmd({
  pattern: 'groupmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { group: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.group}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Search Menu Command
cmd({
  pattern: 'searchmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { search: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.search}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});

// Convert Menu Command
cmd({
  pattern: 'convertmenu',
  dontAddCommandList: true,
  filename: __filename
}, async (client, message, input, { from, quoted, reply }) => {
  try {
    let commandList = { convert: '' };
    for (let i = 0; i < commands.length; i++) {
      if (commands[i].pattern && !commands[i].dontAddCommandList) {
        commandList[commands[i].category] += `*📙➢ Command :* .${commands[i].pattern}\n*💬➢ Desc :* ${commands[i].desc}\n\n`;
      }
    }
    const caption = `━━━━━━━━━━━━━━━━━━━━━━━\n●🧑‍💻 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🧑‍💻●\n━━━━━━━━━━━━━━━━━━━━━━━\n\n${commandList.convert}\n\n${sadiya_md_footer}`;
    await client.sendMessage(from, { image: { url: sadiya_md_img }, caption }, { quoted: message });
  } catch (error) {
    console.log(error);
    reply('❌ *I Couldn\'t find anything. Please try again later...*');
    await client.sendMessage(client.botNumber + '@s.whatsapp.net', { text: `❗ *Error Info:* ${error}` }, { quoted: message });
  }
});
