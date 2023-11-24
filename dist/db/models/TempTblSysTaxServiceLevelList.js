"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_tbl_sys_tax_service_level_list = void 0;
const sequelize_1 = require("sequelize");
class TEMP_tbl_sys_tax_service_level_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('TEMP_tbl_sys_tax_service_level_list', {
            id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            maxid: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            qty: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'TEMP_tbl_sys_tax_service_level_list',
            timestamps: false
        });
    }
}
exports.TEMP_tbl_sys_tax_service_level_list = TEMP_tbl_sys_tax_service_level_list;
