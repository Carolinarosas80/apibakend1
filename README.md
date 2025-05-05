# 🛒 E-commerce API REST

Este proyecto es una API REST desarrollada con Node.js y Express para gestionar productos y carritos de compra. La persistencia se realiza mediante archivos JSON locales.

## 🚀 Características

- Gestión de productos (crear, leer, actualizar, eliminar)
- Gestión de carritos de compra
- Persistencia en archivos `products.json` y `carts.json`
- API estructurada con `express.Router`

## 📁 Estructura del proyecto

```
/src
│
├── app.js
├── data/
│   ├── products.json
│   └── carts.json
├── managers/
│   ├── ProductManager.js
│   └── CartManager.js
└── routes/
    ├── products.router.js
    └── carts.router.js

El servidor estará disponible en: [http://localhost:8080](http://localhost:8080)

## 📬 Endpoints

### Productos `/api/products`

- `GET /`: Lista todos los productos.
- `GET /:pid`: Muestra un producto por ID.
- `POST /`: Agrega un nuevo producto.
- `PUT /:pid`: Actualiza un producto existente.
- `DELETE /:pid`: Elimina un producto.

### Carritos `/api/carts`

- `POST /`: Crea un nuevo carrito.
- `GET /:cid`: Muestra los productos del carrito.
- `POST /:cid/product/:pid`: Agrega un producto al carrito.


- Desarrollado por Carolina Rosas
