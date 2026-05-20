import express from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './product.routes.js';
import characterRoutes from './characters.routes.js';
import employeeRoutes from './employee.routes.js';

// Création du router principal
const router = express.Router();

// Déclaration des routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/characters', characterRoutes);
router.use('/employees', employeeRoutes);

// Export du router
export default router;