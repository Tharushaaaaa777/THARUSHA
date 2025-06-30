const config = require('../settings');
const { cmd, commands } = require('../lib/command');
const { get_set , input_set } = require('../lib/set_db');


cmd({
    pattern: "mode",
    react: "🗣️",
    desc: "To Set status Message",
    category: "main",
    use: '.mode button/nonbutton .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.MODE == q) return reply(`Succesfully Set Mode`)
  await input_set('MODE' , q)

if (q.includes("button")) {		
  return reply(`Successfully Changed to button Mode ✅`);
} if (q.includes("nonbutton")) {	
  return reply(`Successfully Changed to nonbutton Mode ✅`);
} else if (!q.includes("nonbutbb")) {
  return reply(`Spelling is wrong 🚫\n*correct spelling is:*\n\n*_To Activate Button Mode_*\n- .mode button\n*_To Activate NonButton Mode_*\n- .mode nonbutton`);
}

} catch (e) {
reply('*Error !!*')
l(e)
}
})
