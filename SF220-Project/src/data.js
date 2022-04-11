import {writable} from 'svelte/store';

let data = {'6410742412' : {name : 'นราธิป เจริญสุข', userid : '6410742412'  , password : '1234'},
            '6410742230' : {name : 'ชัยบัญชา แรงกลาง', userid : '6410742230', password : '1234'},
            '6410742453' : {name : 'พัทธ์ธีรา คาร', userid : '6410742453', password : '1234'},
            '6410742693' : {name : 'ยงยุทธ พรพงศ์สวัสดิ์', userid : '6410742693', password : '1234'},
            '6410742735' : {name : 'วสวัตติ์ ชีพสมุทร์', userid : '6410742735', password : '1234'},}
let s = ['SF220', 'SF230', 'SF210', 'TU109', 'TU107'].sort()

export const accounts = writable(data);
export const n = writable(s);
export const islogin = writable(false); 
export const mode = writable('');
export const account = writable('');
// , 'TU107', 'SF230', 'TU109', 'SF210'