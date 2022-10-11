// import names from '../../JSON/nameList.json'
let names = require('../../JSON/nameList.json');

const nameList = {
    getNameArray(){
        let nameArray = []
        nameArray.push(...names.names)
        return nameArray
    },
    getIndexByName(name){
        return names.names.indexOf(name)+1
    }
}

export default nameList