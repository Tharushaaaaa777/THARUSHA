//const config = require('../config');
//const { cmd, commands } = require('../command');

const config = require('../settings')
const { cmd, commands } = require('../lib/command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "📍",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
   try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to Cyber Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '◍○○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍◍' , edit : ping.key })
return await conn.sendMessage(from, { text : '📍️ *Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
