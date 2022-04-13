import {writable} from 'svelte/store';

let subject = [
  {name : 'SF210', sec : 'Section 760001', prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
   day : 'Tue' ,time : '09.30-12.30 น.', credit : '3', cost : '5,400 BAHT'},
  
  {name : 'SF210', sec : 'Section 760002', prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
   day : 'Tue' ,time : '13.30-16.30 น.', credit : '3', cost : '5,400 BAHT'},           
  
  {name : 'SF220', sec : 'Section 760001', prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
   day : 'Mon', time : '09.30-12.30 น.', credit : '3', cost : '5,400 BAHT'},
 
  {name : 'SF230', sec : 'Section 760001', prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
   day : 'Wed', time : '13.30-16.30 น.', credit : '3', cost : '5,400 BAHT'},
  
  {name : 'TU107', sec : 'Section 760001', prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
   day : 'Thu', time : '13.30-16.30 น.', credit : '3', cost : '5,400 BAHT'},
  
  {name : 'TU109', sec : 'Section 760001', prof : 'T. Thanapath Cheeranawanith',
   day : 'Thu', time : '09.30-12.30', credit : '3', cost : '5,400 BAHT'}]
            
export const vicha = writable(subject);