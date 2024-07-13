import { DataSource } from "typeorm";
import "reflect-metadata";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", 
    port: 5432,
    username: "admin", 
    password: "admin", 
    database: "database", 
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../models/*.ts'],
  });