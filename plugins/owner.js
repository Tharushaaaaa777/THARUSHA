const { cmd } = require('../lib/command');
//const config = require('../config');
//const pakaya = "`"

cmd({
    pattern: "owner",
    react: "👤", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = "94740326138"; // Fetch owner number from config
        const ownerName = "ᴍʀ.ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ 👤";     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
