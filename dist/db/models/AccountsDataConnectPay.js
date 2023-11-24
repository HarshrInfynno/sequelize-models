"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts_data_connectPay = void 0;
const sequelize_1 = require("sequelize");
class accounts_data_connectPay extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('accounts_data_connectPay', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            zero_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            non_zero_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            maxid: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            qty: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'accounts_data_connectPay',
            timestamps: false
        });
    }
}
exports.accounts_data_connectPay = accounts_data_connectPay;
