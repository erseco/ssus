const fs      = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const Q       = require('q');

const exclude = [
    'Carta de servicios', 
    'Consultar ingredientes', 
    'Comedor Fuentenueva', 
    'Periodos de cierre SCU'
];

module.exports = () => {
	let promise = Q.defer();
	request('http://scu.ugr.es/', (error, response, html) => {
		if (!error) {
			let $ = cheerio.load(html);

			let title, release, rating;

			let json = {
				lunes: [],
				martes: [],
				miercoles: [],
				jueves: [],
				viernes: [],
				sabado: [],
				def: [],
            };
            
			let lastKey = 'lunes';
            
            $('td').filter(function() {
				let data = $(this);
				let result = data
					.children()
					.first()
					.text()
					.split('\t');

				for (let r of result) {
					if (r.includes('LUNES')) lastKey = 'lunes';
					else if (r.includes('MARTES')) lastKey = 'martes';
					else if (r.includes('MIÉRCOLES')) lastKey = 'miercoles';
					else if (r.includes('JUEVES')) lastKey = 'jueves';
					else if (r.includes('VIERNES')) lastKey = 'viernes';
					else if (r.includes('SÁBADO')) lastKey = 'sabado';

					r = r.trim();
					if (r && !exclude.includes(r)) {
						json[lastKey].push(r);
					}
				}
			});
			promise.resolve(json);
		} else {
			promise.reject(error);
		}
	});
	return promise.promise;
};
