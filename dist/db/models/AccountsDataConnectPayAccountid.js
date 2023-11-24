"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts_data_connectPay_accountid = void 0;
const sequelize_1 = require("sequelize");
class accounts_data_connectPay_accountid extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('accounts_data_connectPay_accountid', {
            accountid: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            tableName: 'accounts_data_connectPay_accountid',
            timestamps: false
        });
    }
}
exports.accounts_data_connectPay_accountid = accounts_data_connectPay_accountid;
