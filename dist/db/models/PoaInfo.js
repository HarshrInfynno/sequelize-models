"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poa_info = void 0;
const sequelize_1 = require("sequelize");
class poa_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('poa_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            has_fax: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            has_email: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            has_upload: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            has_mail: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            upload_website: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            help_website: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            required_to_file: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            required_to_contact: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            address_description: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            address: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            zipcode: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            used_for: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            issuing_agency: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'poa_info',
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "id_UNIQUE",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "state_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "state" },
                    ]
                },
            ]
        });
    }
}
exports.poa_info = poa_info;
