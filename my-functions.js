'use strict';

/**
 * Funcion que muestra en nombre y el poder de un heroe
 * @param {Hero} hero 
 */
const showHero = (hero) => {
    console.log(`Heroe ${JSON.stringify(hero, null, 2)}`);
}

/**
 * Funcion que muestra en nombre y el poder de un heroe
 * si este fue encontrado en la busqueda
 * @param {String} err 
 * @param {Hero} hero 
 */
const showHeroeIfExist = (err, hero) => {
    if (err) return console.error(err);

    console.log(`Heroe ${JSON.stringify(hero, null, 2)}`);
}

module.exports = {
    showHero,
    showHeroeIfExist
}














