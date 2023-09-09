import FileSaver from 'file-saver';
import { SURPRISE_PROMPTS } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * SURPRISE_PROMPTS.length);
    const randomPrompt = SURPRISE_PROMPTS[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}