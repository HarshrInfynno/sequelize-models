"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_account_info_detail = void 0;
const sequelize_1 = require("sequelize");
class TEMP_account_info_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('TEMP_account_info_detail', {
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
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            maxid: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            minid: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            qty: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'TEMP_account_info_details',
            timestamps: false
        });
    }
}
exports.TEMP_account_info_detail = TEMP_account_info_detail;
