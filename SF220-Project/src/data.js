import {writable} from 'svelte/store';

let data = {'6410742412' : {name : 'Narathip Jaroensuk', userid : '6410742412'  , password : '1102003448443'}}

export const accounts = writable(data);
export const islogin = writable(false); 
export const mode = writable('');
export const account = writable('');