import express from 'express';
import characterController from '../controllers/character.controller.js';

const router = express.Router();

router.get('/', characterController.list);
router.get('/:id', characterController.read);
router.post('/', characterController.create);
router.put('/:id', characterController.update);
router.delete('/:id', characterController.remove);

export default router;