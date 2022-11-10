import mariadb from 'mariadb';
import dotenv from "dotenv";
dotenv.config({ path: './.env'});

export default class MariaDBSingleton{
   static instance
   pool
   constructor(){
        this.pool = mariadb.createPool({
            host: process.env.DB_HOST, 
            user: process.env.DB_USER,
            database: process.env.DB_NAME, 
            password: process.env.DB_PASSWORD,
            connectionLimit: 5
        });
   }

    static getInstance() {
        if (!MariaDBSingleton.instance) {
            MariaDBSingleton.instance = new MariaDBSingleton();
        }
        return MariaDBSingleton.instance;
    }
}