# ssus

[![https://travis-ci.org/jesusgn90/ssus.svg?branch=master](https://travis-ci.org/jesusgn90/ssus.svg?branch=master)](https://travis-ci.org/jesusgn90/ssus.svg?branch=master)
[![https://img.shields.io/npm/v/ssus.svg](https://img.shields.io/npm/v/ssus.svg)](https://www.npmjs.com/package/ssus)
[![https://img.shields.io/npm/dm/ssus.svg](https://img.shields.io/npm/dm/ssus.svg)](https://www.npmjs.com/package/ssus)


Simple SCU UGR Scrapper 

## How to use?

Install it from NPM as follow:

```
    $ npm i ssus
```

Use it as follow:

```js
    const ssus = require('ssus');
    ssus()
        .then((json) => console.log(json))
        .catch((err) => console.error(err));
```

## JSON response

Here is an example of response. The json element resolved in the promise is as follow:

```js
{ lunes: 
   [ 'LUNES,  30  DE  OCTUBRE  DE  2017',
     'Alérgenos',
     'Caldereta de judias con sepia y gambas',
     'Crustáceos  Moluscos  Pescado',
     'Remojón granadino',
     'Huevos',
     'Lomo relleno',
     'Apio  Lácteos  Sulfitos',
     'Fritura de verduras mixta',
     'Gluten',
     'Melón',
     'Vino tinto',
     'Sulfitos',
     'Estofado de judías',
     'Tempe a la parrilla (VG)',
     'Gluten*  Soja',
     'Fritura de verduras mixta',
     'Gluten',
     'Melón',
     'Vino tinto',
     'Sulfitos' ],
  martes: 
   [ 'MARTES,  31  DE  OCTUBRE  DE  2017',
     'Alérgenos',
     'Macarrones a la boloñesa',
     'Gluten  Lácteos  Sulfitos',
     'Cazón a la bizantina',
     'Frutos secos (piñones)  Gluten*  Pescado  Sulfitos',
     'Menestra',
     'Apio',
     'Mandarinas',
     'Vino tinto',
     'Sulfitos',
     'Macarrones con guacamole y salsa arrabiata (OV)',
     'Gluten  Huevos  Lácteos',
     'Tortilla Florentina (OV)',
     'Huevos',
     'Menestra',
     'Apio',
     'Mandarinas',
     'Vino tinto',
     'Sulfitos' ],
  miercoles: [ 'MIÉRCOLES,  1  DE  NOVIEMBRE  DE  2017', 'CERRADO' ],
  jueves: 
   [ 'JUEVES,  2  DE  NOVIEMBRE  DE  2017',
     'Alérgenos',
     'Pizza',
     'Gluten  Lácteos  Soja  Sulfitos',
     'Plato alpujarreño',
     'Gluten*  Huevos',
     'Plátano',
     'Vino tinto',
     'Sulfitos' ],
  viernes: 
   [ 'VIERNES,  3  DE  NOVIEMBRE  DE  2017',
     'Alérgenos',
     'Salmorejo',
     'Gluten  Sulfitos',
     'Arroz mar y montaña',
     'Apio  Moluscos  Sulfitos',
     'Pechuga de pollo mozárabe',
     'Apio  Frutos secos (piñones, almendras)  Sulfitos',
     'Pimientos fritos (VG)',
     'Gluten*',
     'Piña',
     'Vino tinto',
     'Sulfitos' ],
  sabado: 
   [ 'SÁBADO,  4  DE  NOVIEMBRE  DE  2017',
     'Alérgenos',
     'Sopa de mi pueblo',
     'Apio  Gluten',
     'Pecho de ternera relleno',
     'Apio  Gluten  Huevos  Sulfitos',
     'Pastel de queso (OV)',
     'Frutos secos (almendras)  Gluten  Lácteos',
     'Trifle estilo chef',
     'Gluten  Huevos  Lácteos  Pescado  Sulfitos',
     'Vino tinto',
     'Sulfitos' ],
  def: [] }
```

## How to use the json?

```js
    for(let day in json){
        if(json[day][1] === 'CERRADO'){
            // IS CLOSED
        } else {
            for(let element of json[day]){
                // DO SOMETHING
            }
        }
    }
```