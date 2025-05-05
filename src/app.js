import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const PORT = 8080;

// Middleware para leer JSON en requests
app.use(express.json());

// Ruta raíz para probar si el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de productos y carritos 🚀');
});

// Rutas principales
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
