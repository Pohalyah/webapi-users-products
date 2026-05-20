import BaseController from './base.controller.js';
import characterService from '../services/character.service.js';

export default new BaseController(characterService);