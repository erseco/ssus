const ssus = require('../index');
ssus().then((json) => console.log(json)).catch((err) => console.error(err));