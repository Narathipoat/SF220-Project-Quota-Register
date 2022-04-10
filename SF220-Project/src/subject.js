import {writable} from 'svelte/store';

let subject = {'SF210' : {name : 'SF210', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT'},
               'SF220' : {name : 'SF220', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT'},
               'SF230' : {name : 'SF230', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT'},
               'TU107' : {name : 'TU107', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT'},
               'TU109' : {name : 'TU109', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT'}}
            
export const sub = writable(subject);