const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with pong",
  },
];

const rest = new REST().setToken(process.env.ClientID);

// IIFE This will inint the commands

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.ServerId,
        process.env.GuildID
      ),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();
