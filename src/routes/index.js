import express from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './product.routes.js';

// Création du router principal
const router = express.Router();

// Déclaration des routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);

// Export du router
export default router;