"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temp_account_info = void 0;
const sequelize_1 = require("sequelize");
class temp_account_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('temp_account_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            dba: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            address_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            address_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fed_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            end_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            csr: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_service_level: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_service_start_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_service_end_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_location: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            internal_id_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            internal_id_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'temp_account_info',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.temp_account_info = temp_account_info;
