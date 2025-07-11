const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');   


const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/products', productController.getAllProducts);
app.get('/products/:id', productController.getProductById);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
