"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_rate = void 0;
const sequelize_1 = require("sequelize");
class agency_rate extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_rate', {
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            major_rate_description: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            major_rate_tax_code: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_1_description: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_1_tax_code: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_2_description: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_2_tax_code: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_3_description: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            minor_rate_3_tax_code: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            sdi_rate_description: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            sdi_rate_tax_code: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'agency_rates',
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_rate = agency_rate;
