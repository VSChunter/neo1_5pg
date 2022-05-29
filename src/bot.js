import { Client, Intents } from "discord.js";

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

bot.on('ready', ()=> console.log('ready'));

bot.login('OTQ0ODMyOTI5NTg1MDQ1NTQ0.GktAur.1xyfIb6QFNfFvy1yPTOqN3E-at58IOux1Q-mE8');