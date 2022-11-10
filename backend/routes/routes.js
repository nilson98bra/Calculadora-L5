import {Router} from "express";
const router = Router();
import * as controller from '../controllers/controller.js';

router.post('/conta',controller.insertConta);
router.get('/contas',controller.getAllContas)

export default router;