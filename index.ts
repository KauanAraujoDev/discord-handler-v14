import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()

import { commands } from './commands'
import { events } from './events';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

client.login(process.env.DISCORD_BOT_TOKEN)
    .then(() => {
        commands(client)
        events(client)
        console.log(`System initialized: ${process.env.DISCORD_BOT_NAME}`)
    })