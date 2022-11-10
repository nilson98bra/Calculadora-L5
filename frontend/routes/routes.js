import {Router} from "express";
const router = Router();
import * as controller from '../controllers/controller.js';

router.get('/',controller.screen);

export default router;