const { cmd, commands } = require('../lib/command');
const { fetchJson } = require('../lib/functions');
const os = require('os');
const pakaya = "`";
const tharusha_md_footer = "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴛʜᴀʀᴜꜱʜᴀ ᴍᴅ*";
const apilink = 'https://www.dark-yasiya-api.site/'; 

cmd({
    pattern: "xvideo",
    alias: ["xvdl", "xnxx", "sex"],
    react:"🤤",
    desc: "download xvideo",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply, prefix }) => {
    try {
        
        if (!q) return await reply("*Please provide a search query!*");

        // XVideo search
        const xv_list = await fetchJson(`${apilink}/search/xvideo?text=${q}`);
        if (!xv_list.result || xv_list.result.length === 0) return await reply("*No results found!*");

        const videos = xv_list.result.slice(0, 30);

const sections = [{
      title: 'Search Results',
      rows: videos.forEach((video, index) => ({
        title: `${index + 1}`,
        description: video.title,
        rowId: `${prefix}xvideoinfo ${video.url}`
      }))
    }];

const listMessage = {
      text: `🔞 *Results for ${q}*`,
      footer: tharusha_md_footer,
      title: '',
      buttonText: 'Select a video',
      sections
    };

        conn.sendMessage(m.chat, listMessage, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});


cmd({
    pattern: "xvideoinfo",
    react: "♻️",
    desc: "ආච්චිගෙ රෙද්ද select කරන්න",
    category: "pake",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply, prefix }) => {
    try {
        
const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${selectedVideo.url}`);
                if (!xv_info.result || !xv_info.result.dl_link) {
                    await conn.sendMessage(from, { text: "*Failed to download! Try another video.*" }, { quoted: replyMek });
                    return;
                }


const xvideocap = `*🔞 ${pakaya}THARUSHA-MD XVIDEO INFO${pakaya}*

*╭──────────────●●►*
*│📜 ᴛɪᴛᴇʟ :* ${xv_info.result.title}
*│👀 ᴠɪᴇᴡꜱ :* ${xv_info.result.views || 'N/A'}
*│👍 ʟɪᴋᴇ :* ${xv_info.result.like || 'N/A'}
*╰──────────────●●►*

${tharusha_md_footer}`;

let vpsOptions = [
        
            { title: "ᴅᴏᴄᴜᴍᴇɴᴛ ᴛʏᴘᴇ 📁", description: "Xvideo document type download.", id: `${prefix}xdocumemttypehuththo` },
            { title: "ᴠɪᴅᴇᴏ ᴛʏᴘᴇ 🎥", description: "Xvideo video type download.", id: `${prefix}xvideotypehuththo` }
          ];

        let buttonSections = [
            {
                title: "Tharusha-md xvideo 🔞",
                highlight_label: "THARUZZ",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select type",
                        sections: buttonSections
                    })
                }
            }
        ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: xvideocap,
            image: { url: xv_info.result.image },
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "xdocumemttypehuththo",
    react: "♻️",
    desc: "ආච්චිගෙ රෙද්ද select කරන්න",
    category: "pake",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply, prefix }) => {
    try {
        
const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${selectedVideo.url}`);
                if (!xv_info.result || !xv_info.result.dl_link) {
                    await conn.sendMessage(from, { text: "*Failed to download! Try another video.*" }, { quoted: replyMek });
                    return;
                }



        conn.sendMessage(m.chat, {
            document: { url: xv_info.result.dl_link },
                                mimetype: "video/mp4",
                                fileName: `${xv_info.result.title}.mp4`,
                                caption: tharusha_md_footer
                  }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "xvideotypehuththo",
    react: "♻️",
    desc: "ආච්චිගෙ රෙද්ද select කරන්න",
    category: "pake",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply, prefix }) => {
    try {
        
const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${selectedVideo.url}`);
                if (!xv_info.result || !xv_info.result.dl_link) {
                    await conn.sendMessage(from, { text: "*Failed to download! Try another video.*" }, { quoted: replyMek });
                    return;
                }




        conn.sendMessage(m.chat, {
            video: { url: xv_info.result.dl_link },
                                mimetype: "video/mp4",
                                caption: tharusha_md_footer,
               }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
