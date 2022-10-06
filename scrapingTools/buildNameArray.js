const fs = require('fs');
// const axios = require('axios').default;
const jsonfile = require('../src/JSON/PokemonQuickData.json');



let PokeArray = []

async function saveFile(count) {
  let x = await buildNameArray(count);
  fs.writeFile('../src/JSON/nameList.JSON', x, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(x.length);
    }
  });
}

function buildNameArray(count){
  for(let i=0;i<count;i++){
    if(!jsonfile.table[i]){break}
    PokeArray.push(jsonfile.table[i].name);
    console.log(jsonfile.table[i].name);
  }
  return JSON.stringify(PokeArray)
}

saveFile(910)

