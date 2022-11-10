import express from 'express';
import router from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname,"public"))) 
app.use(router)
app.use((req,res,next) =>{
    return res.status(404).send({error:"Página não encontrada"});
});
export default app;