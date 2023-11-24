"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts_data_connectPay_name = void 0;
const sequelize_1 = require("sequelize");
class accounts_data_connectPay_name extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('accounts_data_connectPay_name', {
            name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            tableName: 'accounts_data_connectPay_name',
            timestamps: false
        });
    }
}
exports.accounts_data_connectPay_name = accounts_data_connectPay_name;
