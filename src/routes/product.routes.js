import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', productController.list);
router.get('/:id', productController.read);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove);

export default router;