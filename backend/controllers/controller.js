import ClientCalculadora from "../clients/clientCalculadora.js";
import ServiceCalculadora from "../service/serviceCalculadora.js";

export const insertConta = async (req,res)=>{
    const serviceCalculadora = new ServiceCalculadora(new ClientCalculadora);
    const {nome,conta}= req.body;
    try {
       const response = await serviceCalculadora.insertConta(nome,conta);
       return res.status(200).send({data:response});
    } catch (error) {
        res.status(500).send({data:error.message});
    }
}

export const getAllContas = async (req,res)=>{
    const serviceCalculadora = new ServiceCalculadora(new ClientCalculadora);
    const {nome,conta}= req.body;
    try {
       const response = await serviceCalculadora.getAllContas();
       return res.status(200).send({data:response});
    } catch (error) {
        res.status(500).send({data:error.message});
    }
}