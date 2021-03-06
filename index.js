const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { loadEvents, loadCommands } = require("./Handlers");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
require("dotenv").config({});
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
client.login(process.env.BOT_TOKEN).then(() => {
  loadEvents(client);
  loadCommands(client);
});
