import {writable} from 'svelte/store';

let data = {'6410742412' : {name : 'นราธิป เจริญสุข', userid : '6410742412'  , password : '1234'},
            '6410742230' : {name : 'ชัยบัญชา แรงกลาง', userid : '6410742230', password : '1234'},
            '6410742453' : {name : 'พัทธ์ธีรา คาร', userid : '6410742453', password : '1234'},
            '6410742693' : {name : 'ยงยุทธ พรพงศ์สวัสดิ์', userid : '6410742693', password : '1234'},
            '6410742735' : {name : 'วสวัตติ์ ชีพสมุทร์', userid : '6410742735', password : '1234'},}

let Narathip_Jaroensuk  = []
let clickN = "no";
let Wasawat_Cheepsamut  = []
let clickW = "no";
let Phatthira_Karn = []
let clickP = "no";
let Yongyut_pornpongsawadi = []
let clickY = "no";
let chaibancha_rangklang = []
let clickC = "no";



export const accounts = writable(data);
export const islogin = writable(false); 
export const mode = writable('');
export const account = writable('');

export const narathip = writable(Narathip_Jaroensuk);
export const wasawat = writable(Wasawat_Cheepsamut);
export const phatthira = writable(Phatthira_Karn);
export const yongyut = writable(Yongyut_pornpongsawadi);
export const chaibancha = writable(chaibancha_rangklang);
export const click_N = writable(clickN);
export const click_W = writable(clickW);
export const click_P = writable(clickP);
export const click_Y = writable(clickY);
export const click_C = writable(clickC);