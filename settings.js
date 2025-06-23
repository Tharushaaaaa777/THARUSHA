const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'THARUSHA-MD=6hJBFAAR#XPuv1O0l5fQN__eRM3bAU_SKGUzxcqtRJ4ay7KKJ3p0',
OWNER_NUMBER: process.env.OWNER_NUMBER || "94740326138", // 👈 do not change this envairement
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'Sahas' ,     
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
FOOTER: '> BOT CREATED BY SHADOW MOVIE X KILAR',
DIRECTION: true,
IMAGE: process.env.IMAGE || `https://i.ibb.co/4rKv8p3/9046.jpg`,
LOGO: process.env.LOGO || `https://i.ibb.co/4rKv8p3/9046.jpg`     
};
