"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
exports.connection = new sequelize_1.Sequelize(config_1.default.DB_NAME, config_1.default.DB_USERNAME, config_1.default.DB_PASSWORD, {
    host: config_1.default.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
