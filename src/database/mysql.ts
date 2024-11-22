import mysql2, { Pool } from "mysql2";
import { config } from "dotenv";

config();

class Database {
   private pool: Pool;

   constructor() {
      this.pool = mysql2.createPool({
         host: process.env.MYSQL_HOST || "localhost",
         user: process.env.MYSQL_USER || "root",
         password: process.env.MYSQL_PASSWORD || "",
         database: process.env.MYSQL_DATABASE || "my_database",
         waitForConnections: true,
         connectionLimit: 10,
         queueLimit: 0,
      });
   }

   public getPool() {
      return this.pool.promise();
   }

   public async testConnection() {
      try {
         const [rows] = await this.getPool().query("SELECT 1 + 1 AS solution");
         console.log("Database connection successful:", rows);
      } catch (err) {
         console.error("Error connecting to the database:", err);
      }
   }

   // Consultas sql
   public async query(sql: string, params: any[] = []) {
      try {
         const [rows] = await this.getPool().query(sql, params);
         return rows;
      } catch (err) {
         console.error("Error executing query:", err);
         throw err;
      }
   }
}

export default new Database();
