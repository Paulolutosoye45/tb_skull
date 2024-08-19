const { Telegraf } = require("telegraf");
const TOKEN = "6941929880:AAFJJ9oF4Tc4J10BgcbcvrIBdr1WTWfquIw";
const bot = new Telegraf(TOKEN);

const web_link = "https://66c35d76d53c6010d0b10358--magenta-custard-b99eb4.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();