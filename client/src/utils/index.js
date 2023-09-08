import { SURPRISE_PROMPTS } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * SURPRISE_PROMPTS.length);
    const randomPrompt = SURPRISE_PROMPTS[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}