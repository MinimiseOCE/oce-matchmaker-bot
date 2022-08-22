// Require the necessary discord.js classes
import {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
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

  if (interaction.commandName === "ping") {
    let players = [];
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("join")
        .setLabel("Join Queue")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("leave")
        .setLabel("Leave Queue")
        .setStyle(ButtonStyle.Danger)
    );
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Valorant 10 Man")
      .setAuthor({
        name: "OCE MM BOT",
        iconURL:
          "https://pbs.twimg.com/profile_images/1234434416346198016/qiKPqdwP_400x400.jpg",
      })
      .setThumbnail(
        "https://pbs.twimg.com/profile_images/1234434416346198016/qiKPqdwP_400x400.jpg"
      )
      .addFields({ name: "Players", value: "Queue up noobs" })
      .addFields(
        players.map((player) => ({
          inline: true,
          name: `${player}`,
        }))
      )
      .setTimestamp()
      .setFooter({
        text: "Made by Minimise",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });

    client.on("interactionCreate", (interaction) => {
      if (!interaction.isButton()) return;
      console.log(interaction);
    });

    await interaction.reply({
      ephemeral: false,
      embeds: [exampleEmbed],
      components: [row],
    });

    const filter = (btnInt) => {
      return true;
    };

    const collector = channel.createMessageComponentCollector;
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
