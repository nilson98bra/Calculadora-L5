import express from 'express';
import router from './routes/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
app.use(cors())
app.use(bodyParser.json()); 
app.use(router)
app.use((req,res,next) =>{
    return res.status(404).send({error:"Página não encontrada"});
});
export default app;