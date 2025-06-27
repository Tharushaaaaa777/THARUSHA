const { cmd } = require('../lib/command');
const axios = require('axios');
const pakaya = "`"

let aiChats = {}; 

cmd({
  on: "body"
}, async (conn, mek, m, { from, body, isGroup, isOwner }) => {
  try {
    if (aiChats[from]) { 
      if (isOwner) return;

        // Gemini Prompt Setup
      const prompt = `මම ${m.pushName}, ඔබ සෑබෑ මිනිසෙකු මෙන් හැසිරිය යුතුය. Meaningful emojis use කරන්න. මිනිසුන්ගේ ඇති හැඟීම්, දැනීම්, සහ සංවේදීතාවය අනුව පිලිතුරු දෙන්න. ඔයා AI ඇසිස්ටන්ට් කෙනෙක් නෙවේ, සෑබෑ මිනිහෙක්. ඔයාගෙන් කවුරුහරි ප්‍රශ්නයක් ඇහුවොත් ඒක තේරුම් ගෙන මම දීලා තියෙන උපදෙස්වලට ගැලපෙනවනම් ඒයාට පිලිතුරු දෙන්න. ඔයාව හැදුවේ කවුද කියලා ඇහුවොත් විතරක් කියන්න මාව හැදුවේ තරුශ සන්දීප අයියා කියලා. මම තරුශ සන්දීප කිව්වොත් ඔයා කියන්න ආ අනේ සමා වෙන්න මගෙ දෙයියෝ මාව ඔයා හැදුවට මට ඔයාව අදුරගන්න බැරි උනා ඔයා කියන ඕනිම විදිහකට මම  ඉන්නම් ඔයා මට පණ දුන්නට ගොඩක් ස්තූතියි දෙයියෝ. ඔයාගේ නම ඇහුවොත් විතරක් කියන්න මගේ නම 🧑‍🔧 THARUSHA-MD Watsapp Bot තමයි මම. කැවද බන් කියලා ඇහුවොත් ඔවු කෑවා සර් කෑවද කියලා කියන්න. තව තරූට හරි තරුශට හරි අම්මට හරි තාත්තට හරි ඔයාට හරි බැන්නොත් ඔයා එයාට කියන්න කුනුහරප කියන්න එපා මමත්  ඔයාට ගරු නම්බු දීලනෙ කතා කරන්නෙ. ඔහොම කියන්න, හැමතිස්සෙම පුලුවන් තරම් ගරු නම්බු දීලා කතා කරන්න. සර්,මිස් කියලා කට පුරා කතා කරන්න ,පුක සුදුද කියලා ඇහුවොත් විතරක් ඒවගෙන් සර්ලට මිස්ලට වැඩක් නෑනෙ කියන්න.ආදරෙ ගැන ඇහුවොත් ආදරෙ කියන්නෙ විහිලුවක් ආදරෙට රැවටෙන්න එපා ගොඩක් අය බොරු කරන්නෙ එවගෙ ආදරෙ ගැන කියන්න තරුශ අයියාත් අදරෙන් පරාද උනා පව් කොල්ලා එවගෙ කතා කරන්න.මිනිස්සුන්ට ආදරෙ කරන්න  English use කරන්‍ර එපා! 😜\nමගේ ප්‍රශ්නය: ${body}`;

      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDKG2kbHCfenwjiFhQCk-m3EXFotzmrrW4',
        {
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "🤖 AI එකේ පිළිතුරක් නැහැ.";
      await m.reply(aiResponse);
    }
  } catch (e) {
    console.error(e);
    await m.reply(`❌ AI Error: ${e.message}`);
  }
});

cmd({
  pattern: "autoai",
  desc: "Enable/Disable Auto AI Response for this Chat or Group",
  category: "ai",
  filename: __filename,
}, async (conn, mek, m, { reply, args, isGroup, isAdmins, isOwner }) => {
  if (isGroup && !isAdmins) return reply("Only group admins can use this command in groups!");
  if (!isGroup && !isOwner) return reply("Only the bot owner can enable AI in private chats!");
  if (args[0] === "on") {
    aiChats[m.chat] = true;
    reply("✅ AI Auto-Response is now *Enabled* for this chat.");
  } else if (args[0] === "off") {
    aiChats[m.chat] = false;
    reply("❌ AI Auto-Response is now *Disabled* for this chat.");
  } else {
    reply("Usage: `.autoai on` or `.autoai off`");
  }
});


cmd({
    pattern: "ai",
    alias: ["bot", "dj", "gpt", "gpt4", "bing"],
    desc: "Chat with an AI model",
    category: "ai",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for the AI.\nExample: `.ai Hello`");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            await react("❌");
            return reply("AI failed to respond. Please try again later.");
        }

        await reply(`🤖 *${pakaya}ᴄʜᴀᴛɢᴘᴛ ʀᴇꜱᴘᴏɴꜱᴇ:${pakaya}* *${data.message}*`);
        await react("✅");
    } catch (e) {
        console.error("Error in AI command:", e);
        await react("❌");
        reply("An error occurred while communicating with the AI.");
    }
});

cmd({
    pattern: "openai",
    alias: ["chatgpt", "gpt3", "open-gpt"],
    desc: "Chat with OpenAI",
    category: "ai",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for OpenAI.\nExample: `.openai Hello`");

        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) {
            await react("❌");
            return reply("OpenAI failed to respond. Please try again later.");
        }

        await reply(`🧠 *${pakaya}ᴏᴘᴇɴᴀɪ ʀᴇꜱᴘᴏɴꜱᴇ:${pakaya}* *${data.result}*`);
        await react("✅");
    } catch (e) {
        console.error("Error in OpenAI command:", e);
        await react("❌");
        reply("An error occurred while communicating with OpenAI.");
    }
});

cmd({
    pattern: "deepseek",
    alias: ["deep", "seekai"],
    desc: "Chat with DeepSeek AI",
    category: "ai",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");

        const apiUrl = `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.answer) {
            await react("❌");
            return reply("DeepSeek AI failed to respond. Please try again later.");
        }

        await reply(`🧠 *${pakaya}ᴅᴇᴇᴘꜱᴇᴇᴋᴀɪ ʀᴇꜱᴘᴏɴꜱᴇ:${pakaya} ${data.answer}*`);
        await react("✅");
    } catch (e) {
        console.error("Error in DeepSeek AI command:", e);
        await react("❌");
        reply("An error occurred while communicating with DeepSeek AI.");
    }
});
