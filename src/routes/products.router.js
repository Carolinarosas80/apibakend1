import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router();
const manager = new ProductManager();

router.get('/', async (req, res) => {
  const products = await manager.getProducts();
  res.json(products);
});

router.get('/:pid', async (req, res) => {
  const product = await manager.getProductById(req.params.pid);
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(product);
});

router.post('/', async (req, res) => {
  const { title, description, code, price, status, stock, category, thumbnails } = req.body;
  const newProduct = await manager.addProduct({ title, description, code, price, status, stock, category, thumbnails });
  res.status(201).json(newProduct);
});

router.put('/:pid', async (req, res) => {
  const updated = await manager.updateProduct(req.params.pid, req.body);
  if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(updated);
});

router.delete('/:pid', async (req, res) => {
  await manager.deleteProduct(req.params.pid);
  res.status(204).send();
});

export default router;