import { SlashCommandBuilder } from 'discord.js';

const build = new SlashCommandBuilder()
    .setName('template')
    .setDescription('Template.')

const handler = async (interaction: any) => {
    console.log('Template')
}

module.exports = {
    handler,
    build
}