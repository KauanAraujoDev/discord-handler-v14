import * as fs from 'fs';
import path from 'path';

export async function commands(client: any) {
    const dirContent = fs.readdirSync(__dirname);

    for (const fileName of dirContent) {
        if (!fileName.match(/\./g)) {
            const { build, handler } = require(__dirname + '/' + fileName); 

            client.application.commands.create(build)
                .then((command: any) => {
                    console.log(`Command "/${build.name}" was created`);

                    client.on('interactionCreate', (interaction: any) => {
                        if (interaction.isCommand() && interaction.commandId === command.id) {
                            handler(interaction);
                        }
                    });
                });
        }   
    }
}