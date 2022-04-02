//Import y export

import heroes, { owners } from "../data/heroes"

//import {heroes} from './data/heroes'
//import { heroes } from './data/heroes'


const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
// console.log(getHeroeById(1));

const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner=== owner )

// console.log(getHeroesByOwner("DC"))

export {
    getHeroeById,
    getHeroesByOwner
}