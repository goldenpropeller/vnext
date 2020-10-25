import {db,bc} from './db'
localStorage.setItem("db",JSON.stringify(db))
localStorage.setItem("bc",JSON.stringify(bc))
const boats = db.filter(x=>x.media)//.filter(x=>x.boatName);
//recently viewed, recommended for you, repeat sections for each type, they should order themselves based on past viewing habits
//random values from an array
const rv = (arr,n) => arr.sort(() => .5 - Math.random()).slice(0,n)

const RandomDatasets = [
    {t:"Sponsored",d:rv(boats,15)},
    {t:"Your Recent",d:rv(boats,15)},
    {t:"Recommended",d:rv(boats,15)},
]

//unique boat categories/class in our current db
const uqbc=db.map(x=>x.class).filter((v, i, a) => a.indexOf(v) === i)

//cats with more results
const m1 = (v) => ({"cat":v,"cnt":db.filter(x=>x.class === v).length})
const ubcc = uqbc.map(m1)
const mbcc = ubcc.filter(x=>x.cnt > 9)
const gi = (cat) => {
    let tval = bc.filter(x=>x.value === cat).map(x=>x.name)[0]
    let dval = rv(db.filter(x=>x.class === cat),10)
    return {t:tval,d:dval}
}

const ClassDatasets = mbcc.map(x=>gi(x.cat))

export const SliderDatasets =RandomDatasets.concat(ClassDatasets);