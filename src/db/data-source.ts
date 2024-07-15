import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import * as fs from "fs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST || "localhost",
  port: 5432,
  username: process.env.USER_NAME || "admin",
  password: process.env.PASSWORD || "admin",
  database: process.env.DB || "database",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/../models/*.ts"],
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(__dirname + "/../sa-east-1-bundle.pem").toString(),
  },
});
