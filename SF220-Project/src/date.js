import {writable} from 'svelte/store';

let today = new Date();
let final = new Date();
final.setFullYear(2022, 4, 30);
final.setHours(23);
final.setMinutes(0);
final.setSeconds(0);

export const Today = writable(today);
export const Final = writable(final);