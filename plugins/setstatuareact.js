const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const os = require('os');
var { get_set , input_set } = require('../lib/set_db') ;
let statusEmoji = "😊"; // ✅ Emoji stored in-memory (default)


cmd({
  pattern: "setstatus",
  desc: "Set emoji for auto reacting to status messages",
  react: "🌟",
  filename: __filename
}, async (client, m, { q, reply, isMe }) => {
  if (!isMe) return reply("❌ Only the bot owner (you) can use this command.");
  if (!q || q.length > 2) return reply("❗ Send a single emoji.\n\nUsage: .setstatus 😎");

  statusEmoji = q.trim();
  reply(`✅ Status reaction emoji set to: ${statusEmoji}`);
});

// Auto react to status
cmd({
  on: "body"
}, async (client, message, chat, { from }) => {
  const isStatus = message?.key?.participant === "status@broadcast";
  if (!isStatus) return;

  await client.sendMessage(from, {
    react: {
      text: statusEmoji,
      key: message.key
    }
  });
});
