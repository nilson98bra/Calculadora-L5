import MariaDBSingleton from "../database/mariaDBSingleton.js"

MariaDBSingleton

export default class ClientCalculadora{

    MariaDBSingleton
    constructor(){
        this.MariaDBSingleton = MariaDBSingleton.getInstance().pool
    }

    insertConta = async(conta)=>{

        try {
           
            const result = await this.MariaDBSingleton.query("INSERT INTO tb_calculo value (?,?,?,?,?)",conta)
            if(result.affectedRows==0)
            throw new Error("Erro ao registar na base de dados!");
            
            
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao registar na base de dados!");
        }

        
    }

    
    getAllContas = async()=>{

        try {
           
            const result = await this.MariaDBSingleton.query("SELECT nm_usuario as 'user', dt_conta as 'data', ds_conta as 'conta', vl_resultado as 'resultado' FROM tb_calculo order by dt_conta DESC")
            return result         
            
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao consultar dados na base!");
        }

        
    }
}