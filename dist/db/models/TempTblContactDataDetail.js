"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_tbl_contact_data_detail = void 0;
const sequelize_1 = require("sequelize");
class TEMP_tbl_contact_data_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('TEMP_tbl_contact_data_detail', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            contact_type: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            primary_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fax_number: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
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
            tableName: 'TEMP_tbl_contact_data_details',
            timestamps: false
        });
    }
}
exports.TEMP_tbl_contact_data_detail = TEMP_tbl_contact_data_detail;
