//const config = require('../config')
const {cmd , commands} = require('../lib/command')
const os = require("os")
const {runtime} = require('../lib/functions')
const tharuzz_md_logo = "https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg"
const pakaya = "`"
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*┏━━━━━━━━━━━━━━━━━━━┓*
*┃ 🚀 ${pakaya}ᴜᴘᴛɪᴍᴇ:${pakaya}*  ${runtime(process.uptime())}
*┃ 🧬 ${pakaya}ʀᴀᴍ ᴜꜱᴀɢᴇ:${pakaya}* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*┃ 🌀 ${pakaya}ʜᴏꜱᴛɴᴀɴᴇ:${pakaya}* ${os.hostname()}
*┃ 👤 ${pakaya}ᴏᴡɴᴇʀ:${pakaya}* *ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ*
*┗━━━━━━━━━━━━━━━━━━━┛*
`
await conn.sendMessage(from,{image:{url:tharuzz_md_logo},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
