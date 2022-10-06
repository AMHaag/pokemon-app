import { pokemonType } from "./TypeModifiers.mjs";
import parseTypeFromString  from "./TypeParser.mjs";

function caclulateTypeModifiers(primaryType,secondaryType){


}

function createDualType(primaryTypeObj,secondaryTypeObj){
    const primary = primaryTypeObj.defense
    const secondary = secondaryTypeObj.defense
    const dualType = new pokemonType()
    for (const property in dualType) {
        
    }
    console.log(dualType.defense)
}

let type1 = parseTypeFromString('fire')
let type2 = parseTypeFromString('flying')

createDualType(type1,type2)