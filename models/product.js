const mysql = require('mysql2');

const pool = mysql.createPool({
    // Configura tu conexión a la base de datos aquí
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productosempresa'
});

module.exports = {
    getAllProducts: (callback) => {
        pool.query('SELECT * FROM products', (err, results) => {
            callback(err, results);
        });
    },
    getProductById: (id, callback) => {
        pool.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
            callback(err, results[0]);
        });
    }
};
