const fs = require('fs');
const axios = require('axios').default;


let PokeArray = []

async function saveFile(count) {
  let x = await cycle(count);
  fs.writeFile('./src/JSON/variantNameList.txt', x, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(x.length);
    }
  });
}

async function loadData(currentIndex) {
  let model = {};

  await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${currentIndex}`)
    .then((response) => {
      let data = response.data.varieties;
    //   PokeArray.table.push(model);
    for(let i=0;i<data.length;i++){
        if(!data[i].is_default){
            PokeArray.push(data[i].pokemon.name)
        }
    }

    console.log(PokeArray)
    })
    .catch((err) => console.error(err));
}
async function cycle(count) {
  for (let i = 1; i < count; i++) {
    await loadData(i);
    console.log(i);
  }
//   let array = JSON.stringify(PokeArray);
  return Promise.resolve(PokeArray.join('","'));
}


saveFile(905)