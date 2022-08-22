// Require the necessary discord.js classes
import {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  }
});

// Login to Discord with your client's token
client.login(process.env.token);
