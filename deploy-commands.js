import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import dotenv from "dotenv";
dotenv.config();

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.token);

rest
  .put(
    Routes.applicationGuildCommands(process.env.clientid, process.env.guildid),
    { body: commands }
  )
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
