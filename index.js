'use strict';

const { simpleFindHero, findHero } = require('./callbacks');
const { showHero, showHeroeIfExist } = require('./my-functions');

// los callbacks basicamente son funciones que reciben como parametro una funcion 
// normalmente es el ultimo de los parametros.
// la finalida de esto es que se ejecute esa funcion en un momento determinado dentro del codigo


console.log('\n');

simpleFindHero('iron', (hero) => {
    console.log(`Heroe: ${JSON.stringify(hero, null, 2)}`);
    // console.log(hero);
});

console.log('\n');

simpleFindHero('thor', showHero);

console.log('\n');

const spiderId = 'spider';
simpleFindHero(spiderId, showHero);

console.log('\n');

const capiId = 'capi';
simpleFindHero(capiId, showHero);

console.log('\n');

// ###########################################################

// Argumentos estándar de los callbacks
// Este standar define que al menos debe reciber 2 argumentos la funcion cb que se va a
// suministrar como paramero. El 1ro es de tipo error (err) y el 2do la informacion
// que necesita la funcion para ejecutar su rutina.

findHero(capiId, showHeroeIfExist);

console.log('\n');

findHero(spiderId, showHeroeIfExist);

console.log('\n');

// ###########################################################

// callback hell, esto se estila hacer solo con funciones anonimas

findHero('thor', (err, hero1) => {
    if (err) return console.error(err);

    findHero('spider', (err, hero2) => {
        if (err) return console.error(err);

        findHero('iron', (err, hero3) => {
            if (err) return console.error(err);
            
            console.log(`Enviando a ${hero1.name}, ${hero2.name} y ${hero3.name} a la mision`);
        });
    });
});

console.log('\n');