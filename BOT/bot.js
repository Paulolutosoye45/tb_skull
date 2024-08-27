import { Telegraf } from 'telegraf';

const TOKEN = "6941929880:AAFJJ9oF4Tc4J10BgcbcvrIBdr1WTWfquIw";
const bot = new Telegraf(TOKEN);

// const web_link =  "https://api.telegram.org/bot6941929880:AAFJJ9oF4Tc4J10BgcbcvrIBdr1WTWfquIw/setWebhook?url=https://bef0-102-89-34-66.ngrok-free.app/api/bot/webhook";
const web_link = "https://2e5a-102-89-33-239.ngrok-free.app/";


// bot.start((ctx) =>
//   ctx.reply("Welcome :)))))", {
//     reply_markup: {
//       keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
//     },
//   })
// );

bot.on('callback_query', (ctx) => {
    // Handle the callback query here
    console.log('from ctx:', ctx);

    // Uncomment and use this to retrieve user details
    const userId = ctx.from.id;
    const firstName = ctx.from.first_name;
    const username = ctx.from.username;

    ctx.reply(`Hello ${firstName}! Your ID is ${userId}`);
});

bot.command('start', (ctx) => {
    ctx.reply('Click the button below', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Click Me', callback_data: 'clicked' }]
            ],
        },
    });
});


bot.launch();


// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
