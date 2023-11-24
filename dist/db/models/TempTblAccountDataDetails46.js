"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_tbl_account_data_details_46 = void 0;
const sequelize_1 = require("sequelize");
class TEMP_tbl_account_data_details_46 extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('TEMP_tbl_account_data_details_46', {
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
            ants_client_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.TEXT,
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
            tableName: 'TEMP_tbl_account_data_details_46',
            timestamps: false
        });
    }
}
exports.TEMP_tbl_account_data_details_46 = TEMP_tbl_account_data_details_46;