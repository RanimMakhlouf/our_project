"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../models/user");
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const host = process.env.HOST;
exports.sequelize = new sequelize_typescript_1.Sequelize(dbName, dbUsername, dbPassword, {
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
    models: [user_1.user]
});
