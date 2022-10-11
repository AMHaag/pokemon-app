const variants = require('./variantArray');
const fs = require('fs');
const axios = require('axios').default;

let PokeArray = { table: [] };

async function saveFile(count) {
  let x = await cycle(count);
  fs.writeFile('../src/JSON/PokemonQuickData.json', x, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(x.length);
    }
  });
}

async function loadData(currentIndex, variants) {
  let model = {};

  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${currentIndex}`)
    .then((response) => {
      let data = response.data;
      model.name = data.name;
      model.index = data.order;
      // model.species = data.species;
      model.id = data.id;
      if (variants) {
        model.hasvariant = true;
      }
      model.primaryType = data.types[0].type.name;
      if (response.data.types.length > 1) {
        model.secondaryType = data.types[1].type.name;
      } else {
        model.secondaryType = null;
      }
      model.stats = {
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        spA: data.stats[3].base_stat,
        spDf: data.stats[4].base_stat,
        spd: data.stats[5].base_stat,
      };

      model.abilities = data.abilities;
      // model.sprites = {
      //   home_normal: data.sprites.other.home.front_default,
      //   home_shiny: data.sprites.other.home.front_default,
      //   home_normal_female: data.sprites.other.home.front_female,
      //   home_shiny_female: data.sprites.other.home.front_shiny_female,
      //   small_normal: data.sprites.front_default,
      //   small_female: data.sprites.front_female,
      //   small_shiny: data.sprites.front_shiny,
      //   small_shiny_female: data.sprites.front_shiny_female,
      // };
      PokeArray.table.push(model);
    })
    .catch((err) => console.error(err));
}
async function cycle(count) {
  for (let i = 1; i < count; i++) {
    await loadData(i);
    console.log(i)
  }
  for (let i = 0; i < variants.length; i++) {
    let x = variants[i];
    await loadData(x, true);
    console.log(i+' variant')
  }

  let json = JSON.stringify(PokeArray);
  return Promise.resolve(json);
}

saveFile(906);
