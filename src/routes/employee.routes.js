import express from 'express';
import employeeController from '../controllers/employee.controller.js';

const router = express.Router();

// Définition des routes pour le endpoint "employees"
router.get('/', employeeController.list);
router.get('/:id', employeeController.read);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.remove);

export default router;