import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import {user} from "../models/user";
dotenv.config();
const dbName = process.env.DB_NAME as string;
const dbUsername = process.env.DB_USERNAME  as string;
const dbPassword = process.env.DB_PASSWORD  as string;
const host = process.env.HOST  as string;
export const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  dialect: "mysql",
  host: host,
  port: 3306,
  pool: {
    max: 1000000,
    min: 0,
    idle: 20000,
    acquire: 100000,
  },
  logging: false,
  models :[user]
});
