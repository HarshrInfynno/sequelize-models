"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_tbl_account_agency_data_detail = void 0;
const sequelize_1 = require("sequelize");
class TEMP_tbl_account_agency_data_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('TEMP_tbl_account_agency_data_detail', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
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
            tableName: 'TEMP_tbl_account_agency_data_details',
            timestamps: false
        });
    }
}
exports.TEMP_tbl_account_agency_data_detail = TEMP_tbl_account_agency_data_detail;
