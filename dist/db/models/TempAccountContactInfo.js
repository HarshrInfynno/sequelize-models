"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temp_account_contact_info = void 0;
const sequelize_1 = require("sequelize");
class temp_account_contact_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('temp_account_contact_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            account_info: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            contact_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            primary_phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            secondary_phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fax_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            is_primary_contact: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            location: {
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
            tableName: 'temp_account_contact_info',
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
exports.temp_account_contact_info = temp_account_contact_info;
