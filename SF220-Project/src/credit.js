import { writable } from "svelte/store";

let n = 0;
let w = 0;
let p = 0;
let y = 0;
let c = 0;

export const current_credit_N = writable(n);
export const current_credit_W = writable(w);
export const current_credit_P = writable(p);
export const current_credit_Y = writable(y);
export const current_credit_C = writable(c);
