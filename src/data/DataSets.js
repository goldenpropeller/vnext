import {boats as db} from './data.js';
const boats = db.filter(x=>x.media).filter(x=>x.boatName).filter(x=>x.media);
//recently viewed, recommended for you, repeat sections for each type, they should order themselves based on past viewing habits
//random values from an array
const rv = (arr,n) => arr.sort(() => .5 - Math.random()).slice(0,n)

export const SliderDatasets = [
{t:"Recently viewed",d:rv(boats,5)},
{t:"Recommended for you",d:rv(boats,5)},
{t:"Custom Sportfish",d:rv(boats,5)},
{t:"Flats and Bay Boats",d:rv(boats,5)},
{t:"Center Consoles",d:rv(boats,5)},
]