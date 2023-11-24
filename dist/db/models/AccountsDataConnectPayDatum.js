"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accounts_data_connectPay_datum = void 0;
const sequelize_1 = require("sequelize");
class accounts_data_connectPay_datum extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('accounts_data_connectPay_datum', {
            account_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            non_zero_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            zero_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'accounts_data_connectPay_data',
            timestamps: false
        });
    }
}
exports.accounts_data_connectPay_datum = accounts_data_connectPay_datum;
