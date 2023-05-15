const Pool = require('pg').Pool;


const pool = new Pool({
    user : 'admin',
    host : 'localhost',
    database : 'book',
    port : 5432,

});
module.exports = pool;