import BaseController from './base.controller.js';
import productService from '../services/product.service.js';

export default new BaseController(productService);