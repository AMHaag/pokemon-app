class pokemonType {
  constructor() {
    this.defense = {
      normal: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    };
    this.offense = {
      normal: 1,
      fire: 1,
      water: 2,
      grass: 1,
      electric: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    };
  }
  immunities() {
    let def = this.defense;
    let typeImmunities = [];
    for (const property in def) {
      if (def[property] === 0) {
        typeImmunities.push(property);
      }
    }
    return typeImmunities;
  }
  doubleResistances() {
    let def = this.defense;
    let typeDoubleResistances = [];
    for (const property in def) {
      if (def[property] === 0.25) {
        typeDoubleResistances.push(property);
      }
    }
    return typeDoubleResistances;
  }
  weaknesses() {
    let def = this.defense;
    let typeWeaknesses = [];
    for (const property in def) {
      if (def[property] === 2) {
        typeWeaknesses.push(property);
      }
    }
    return typeWeaknesses;
  }
  doubleWeaknesses() {
    let def = this.defense;
    let typeWeaknesses = [];
    for (const property in def) {
      if (def[property] === 4) {
        typeWeaknesses.push(property);
      }
    }
    return typeWeaknesses;
  }
  resistances() {
    let def = this.defense;
    let typeResistances = [];
    for (const property in def) {
      if (def[property] === 0.5) {
        typeResistances.push(property);
      }
    }
    return typeResistances;
  }
  noEffect() {
    let off = this.offense;
    let typeEffectless = [];
    for (const property in off) {
      if (off[property] === 0) {
        typeEffectless.push(property);
      }
    }
    return typeEffectless;
  }
  lessEffective() {
    let off = this.offense;
    let typeLessEffective = [];
    for (const property in off) {
      if (off[property] === 0.5) {
        typeLessEffective.push(property);
      }
    }
    return typeLessEffective;
  }
  superEffective() {
    let off = this.offense;
    let typeSuperEffective = [];
    for (const property in off) {
      if (off[property] === 2) {
        typeSuperEffective.push(property);
      }
    }
    return typeSuperEffective;
  }
}

let normal = new pokemonType();
normal.offense = { ...normal.offense, rock: 0.5, steel: 0.5 };
normal.defense = { ...normal.defense, ghost: 0, fighting: 2 };

let fire = new pokemonType();
fire.offense = {
  ...fire.offense,
  fire: 0.5,
  water: 0.5,
  grass: 2,
  ice: 2,
  bug: 2,
  rock: 0.5,
  dragon: 0.5,
  steel: 2,
};
fire.defense = {
  ...fire.defense,
  fire: 0.5,
  water: 2,
  grass: 0.5,
  ice: 0.5,
  ground: 2,
  bug: 0.5,
  rock: 2,
  steel: 0.5,
  fairy: 0.5,
};

let water = new pokemonType();
water.offense = {
  ...water.offense,
  fire: 2,
  water: 0.5,
  grass: 0.5,
  ground: 2,
  rock: 2,
  dragon: 0.5,
};
water.defense = {
  ...water.defense,
  fire: 0.5,
  water: 0.5,
  grass: 2,
  electric: 2,
  ice: 0.5,
  steel: 0.5,
};

let grass = new pokemonType();
grass.offense = {
  ...grass.offense,
  fire: 0.5,
  water: 2,
  grass: 0.5,
  poison: 0.5,
  ground: 2,
  flying: 0.5,
  bug: 0.5,
  rock: 2,
  dragon: 0.5,
  steel: 0.5,
};
grass.defense = {
  ...grass.defense,
  fire: 2,
  water: 0.5,
  grass: 0.5,
  electric: 0.5,
  ice: 2,
  poison: 2,
  ground: 0.5,
  flying: 2,
  bug: 2,
};

let electric = new pokemonType();
electric.offense = {
  ...electric.offense,
  water: 2,
  grass: 0.5,
  electric: 0.5,
  ground: 0,
  flying: 2,
  dragon: 0.5,
};
electric.defense = {
  ...electric.defense,
  electric: 0.5,
  ground: 2,
  flying: 0.5,
  steel: 0.5,
};

let ice = new pokemonType();
ice.offense = {
  ...ice.offense,
  fire: 0.5,
  water: 0.5,
  grass: 2,
  ice: 0.5,
  ground: 2,
  flying: 2,
  dragon: 2,
  steel: 0.5,
};
ice.defense = { ...ice.defense, fire: 2, ice: 0.5, rock: 2, steel: 2 };

let fighting = new pokemonType();
fighting.offense = {
  ...fighting.offense,
  normal: 2,
  ice: 2,
  poison: 0.5,
  psychic: 0.5,
  flying: 0.5,
  bug: 0.5,
  rock: 2,
  ghost: 0,
  dark: 2,
  steel: 2,
  fairy: 0.5,
};
fighting.defense = {
  ...fighting.defense,
  flying: 2,
  psychic: 2,
  bug: 0.5,
  rock: 0.5,
  dark: 0.5,
  fairy: 2,
};

let poison = new pokemonType();
poison.offense = {
  ...poison.offense,
  grass: 2,
  poison: 0.5,
  ground: 0.5,
  rock: 0.5,
  ghost: 0.5,
  steel: 0,
  fairy: 2,
};
poison.defense = {
  ...poison.defense,
  grass: 0.5,
  fighting: 0.5,
  poison: 0.5,
  ground: 2,
  psychic: 2,
  bug: 0.5,
  fairy: 0.5,
};

let ground = new pokemonType();
ground.offense = {
  ...ground.offense,
  fire: 2,
  electric: 2,
  poison: 2,
  rock: 2,
  steel: 2,
  grass: 0.5,
  bug: 0.5,
  flying: 0,
};
ground.defense = {
  ...ground.defense,
  water: 2,
  grass: 2,
  ice: 2,
  poison: 0.5,
  rock: 0.5,
  electric: 0,
};

let flying = new pokemonType();
flying.offense = {
  ...flying.offense,
  grass: 2,
  fighting: 2,
  bug: 2,
  electric: 0.5,
  rock: 0.5,
  steel: 0.5,
};
flying.defense = {
  ...flying.defense,
  electric: 2,
  ice: 2,
  rock: 2,
  grass: 0.5,
  fighting: 0.5,
  bug: 0.5,
  ground: 0,
};

let psychic = new pokemonType();
psychic.offense = {
  ...psychic.offense,
  fighting: 2,
  poison: 2,
  psychic: 0.5,
  steel: 0.5,
  dark: 0,
};
psychic.defense = {
  ...psychic.defense,
  fighting: 0.5,
  psychic: 0.5,
  bug: 2,
  ghost: 2,
  dark: 2,
};

let bug = new pokemonType();
bug.offense = {
  ...bug.offense,
  grass: 2,
  psychic: 2,
  dark: 2,
  fire: 0.5,
  fighting: 0.5,
  poison: 0.5,
  flying: 0.5,
  ghost: 0.5,
  steel: 0.5,
  fairy: 0.5,
};
bug.defense = {
  ...bug.defense,
  fire: 2,
  flying: 2,
  rock: 2,
  grass: 0.5,
  fighting: 0.5,
  ground: 0.5,
};

let rock = new pokemonType();
rock.offense = {
  ...rock.offense,
  fire: 2,
  ice: 2,
  flying: 2,
  bug: 2,
  fighting: 0.5,
  ground: 0.5,
  steel: 0.5,
};
rock.defense = {
  ...rock.defense,
  water: 2,
  grass: 2,
  fighting: 2,
  steel: 2,
  ground: 2,
  normal: 0.5,
  fire: 0.5,
  poison: 0.5,
  flying: 0.5,
};

let ghost = new pokemonType();
ghost.offense = {
  ...ghost.offense,
  psychic: 2,
  ghost: 2,
  dark: 0.5,
  normal: 0,
};
ghost.defense = {
  ...ghost.defense,
  normal: 0,
  fighting: 0,
  poison: 0.5,
  bug: 0.5,
  ghost: 2,
  dark: 2,
};

let dragon = new pokemonType();
dragon.offense = { ...dragon.offense, dragon: 2, steel: 0.5, fairy: 0 };
dragon.defense = {
  ...dragon.defense,
  fire: 0.5,
  grass: 0.5,
  water: 0.5,
  electric: 0.5,
  ice: 2,
  dragon: 2,
  fairy: 2,
};

let dark = new pokemonType();
dark.offense = {
  ...dark.offense,
  psychic: 2,
  ghost: 2,
  dark: 0.5,
  fairy: 0.5,
  fighting: 0.5,
};
dark.defense = {
  ...dark.defense,
  fighting: 2,
  fairy: 2,
  ghost: 0.5,
  dark: 0.5,
  psychic: 0,
};

let steel = new pokemonType();
steel.offense = {
  ...steel.offense,
  ice: 2,
  rock: 2,
  fairy: 2,
  fire: 0.5,
  water: 0.5,
  electric: 0.5,
  steel: 0.5,
};
steel.defense = {
  ...steel.defense,
  fire: 2,
  fighting: 2,
  ground: 2,
  normal: 0.5,
  grass: 0.5,
  ice: 0.5,
  flying: 0.5,
  psychic: 0.5,
  bug: 0.5,
  rock: 0.5,
  dragon: 0.5,
  steel: 0.5,
  fairy: 0.5,
  poison: 0,
};

let fairy = new pokemonType();
fairy.offense = {
  ...fairy.offense,
  dark: 2,
  dragon: 2,
  fighting: 2,
  fire: 0.5,
  poison: 0.5,
  steel: 0.5,
};
fairy.defense = {
  ...fairy.defense,
  bug: 0.5,
  dark: 0.5,
  fighting: 0.5,
  poison: 2,
  steel: 2,
  dragon: 0,
};

export {
  pokemonType,
  normal,
  fire,
  water,
  grass,
  electric,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy,
};
