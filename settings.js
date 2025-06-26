const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'THARUSHA-MD=bogTBZ4L#J7foWnodGXBxn_jkZZ7ogSZ6QufespUvwdv4mCj6wzc',
OWNER_NUMBER: process.env.OWNER_NUMBER || "94740326138", // 👈 do not change this envairement
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'Tharuzz' ,     
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
FOOTER: '> BOT CREATED BY THARUZZ OFC',
DIRECTION: true,
IMAGE: process.env.IMAGE || `https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg`,
LOGO: process.env.LOGO || `https://i.ibb.co/M5cQsgwj/Tharusha-Md.jpg`,
// MODE: process.env.MODE || `button`
};
