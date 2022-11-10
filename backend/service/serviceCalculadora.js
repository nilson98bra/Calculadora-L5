import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment.js';
export default class ServiceCalculadora{

    clientCalculadora
    format = "YYYY-MM-DD HH:mm:ss"
    constructor(clientCalculadora){
        this.clientCalculadora = clientCalculadora
    }

    insertConta = async (nome,operacao)=>{
        
        const dataAtual = moment().format(this.format);
        try {
            const result = eval(this.formatarOperacao(operacao));
            if(result=='Infinity') throw new Error('O divisor não pode ser zero.');
            const conta = [uuidv4(),nome,dataAtual,operacao,result];
            await this.clientCalculadora.insertConta(conta);
            return result;
        } catch (error) {
            throw new Error("Erro na formatação da conta.");
        }
    }

    getAllContas = async ()=>{
        try {
            const allContas = await this.clientCalculadora.getAllContas();
            return allContas;
        } catch (error) {
            throw new Error(error)
        }
    }

    formatarOperacao = (operacao)=>{
        let operacaoEditada = operacao.replace(/x/g,'*');
        operacaoEditada = operacaoEditada.replace(/,/g,'.');
        operacaoEditada = operacaoEditada.replace(/÷/g,'/');
        return operacaoEditada;
    }  
        
}