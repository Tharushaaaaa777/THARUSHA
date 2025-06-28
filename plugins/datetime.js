/*const moment = require("moment");
const { cmd } = require('../lib/command');

cmd{
  pattern: "datetime",
  alias: ['date', 'calendar', 'cal', 'time'],
  description: 'Show current date, time and calendar',
  category: 'tools',
  use: '.datetime',
  async execute(m) {
    try {
      // Timezone for Sri Lanka
      const now = moment().utcOffset(5.5);
      
      // Date
      const dateStr = now.format('dddd, MMMM Do YYYY'); // e.g. Friday, June 27th 2025
      const timeStr = now.format('hh:mm A'); // 07:30 PM
      
      // Calendar
      const month = now.format('MMMM YYYY');
      const daysInMonth = now.daysInMonth();
      const startDay = now.startOf('month').day(); // 0 = Sunday

      let calendar = `📅 *${month}*\nSun Mon Tue Wed Thu Fri Sat\n`;
      let line = '    '.repeat(startDay);

      for (let d = 1; d <= daysInMonth; d++) {
        line += (d < 10 ? `  ${d}` : ` ${d}`);
        if ((startDay + d) % 7 === 0 || d === daysInMonth) {
          calendar += line + '\n';
          line = '';
        } else {
          line += ' ';
        }
      }

      // Final Message
      const message = `*📆 Date:* ${dateStr}\n*🕒 Time:* ${timeStr}\n\n${calendar.trim()}`;
      m.reply(message);

    } catch (e) {
      console.error(e);
      m.reply("⚠️ Error fetching date/time.");
    }
  }
};
*/
