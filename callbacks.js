'use strict';

const heroes = require('./heroes');

/**
 * Fucion que recibe un id para buscar en el json
 * y una funcion para invocar luego de hacer la busqueda
 * @param {String} id 
 * @param {Function} cb 
 */
const simpleFindHero = (id, cb) => {
    let hero = heroes[id];
    cb(hero);
}

/**
 * Fucion que recibe un id para buscar en el json
 * y una funcion para invocar luego de hacer la busqueda
 * en caso de no existir el heroe en la buscar, se invoca al callback
 * con un mensaje de error
 * @param {String} id 
 * @param {Function} callback 
 */
const findHero = (id, callback) => {
    let hero = heroes[id];

    if (hero)
        callback(null, hero);
    else
        callback(`Hero not found: ${id}`);

    // heroe ?
    //     callback(null, heroe) :
    //     callback(`Hero not found: ${id}`);
}

module.exports = {
    simpleFindHero,
    findHero
}