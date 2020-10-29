import {db,bc} from './db'
localStorage.setItem("db",JSON.stringify(db))
localStorage.setItem("bc",JSON.stringify(bc))
const boats = db.filter(x=>x.media)//.filter(x=>x.boatName);
//recently viewed, recommended for you, repeat sections for each type, they should order themselves based on past viewing habits
//random values from an array
const rv = (arr,n) => arr.sort(() => .5 - Math.random()).slice(0,n)

let recentPrefix = 'boat-'
const RecentBoats = Object.keys(localStorage)
    .filter(x=>x.startsWith(recentPrefix))
    .map(x=>({"id":x.replace(recentPrefix,''),"date":new Date(localStorage.getItem(x))}))
    .sort((a, b) => b.date - a.date)
const RandomDatasets = []
RandomDatasets.push({t:"Sponsored",d:rv(boats,7)})
//if we have at least three, we'll show recents
if(RecentBoats.length > 3){
    //if we have more than 10 delete the oldest ones
    // oldest will be last because we sorted them above already
    if(RecentBoats.length > 10){
        //mutate array and remove items from localStorage
        RecentBoats.splice(10).forEach(x=>localStorage.removeItem(recentPrefix + x.id))
    }
    let RecentBoatIds = RecentBoats.map(x=>x.id)
    let RecentBoatsResults = boats.filter(x=>RecentBoatIds.includes(x.id.toString()))
    RandomDatasets.push({t:"Your Recent",d:RecentBoatsResults})
}
RandomDatasets.push({t:"Recommended",d:rv(boats,7)})

//unique boat categories/class in our current db
const uqbc=db.map(x=>x.class).filter((v, i, a) => a.indexOf(v) === i)

//cats with more results
const m1 = (v) => ({"cat":v,"cnt":db.filter(x=>x.class === v).length})
const ubcc = uqbc.map(m1)
const mbcc = ubcc.filter(x=>x.cnt > 9)
const gi = (cat) => {
    let tval = bc.filter(x=>x.value === cat).map(x=>x.name)[0]
    // let dval = rv(db.filter(x=>x.class === cat),7)
    let dval = db.filter(x=>x.class === cat).slice(0,7)
    return {t:tval,d:dval}
}

const ClassDatasets = mbcc
    .map(x=>gi(x.cat))
    .map(x=>({...x,date:new Date(localStorage.getItem('boats-' + bc.filter(({name})=>name===x.t)[0].value))}))
    .sort((a, b) => b.date - a.date)
    .map(({t,d})=>({t,d}))
//ClassDatasets.map(x=>x.d[0].class).map(x=>({id:x,date:localStorage.getItem('boats-' + x)}))
console.log(ClassDatasets)

export const SliderDatasets =RandomDatasets.concat(ClassDatasets);