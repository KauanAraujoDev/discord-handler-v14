import { InteractionCreate } from './interactionCreate';

export function events(client: any) {
    InteractionCreate(client);
}