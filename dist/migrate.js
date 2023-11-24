"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_auto_1 = require("sequelize-auto");
const config_1 = __importDefault(require("./config"));
const sequelize = new sequelize_1.Sequelize({
    database: config_1.default.DB_NAME,
    host: config_1.default.DB_HOST,
    username: config_1.default.DB_USERNAME,
    password: config_1.default.DB_PASSWORD,
    dialect: 'mysql',
});
const options = {
    directory: './src/db/models',
    caseFile: 'p',
    singularize: true,
    useDefine: true,
    lang: 'ts',
};
const auto = new sequelize_auto_1.SequelizeAuto(sequelize, '', '', options);
auto.run();
