const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// This will handle the messages responses
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("Hello")) {
    return message.reply("Hii This is nodejs Bot");
  }
  if (message.content.startsWith("Create")) {
    return message.reply(
      `Generating the short id for url ${message.content.split(" ")[1]}...`
    );
  }
});

// This will handle the command intreactions

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName.startsWith("ping")) {
    return interaction.reply("Pong");
  }
});

client.login(process.env.ClientID);
