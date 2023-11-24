"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_id_info = void 0;
const sequelize_1 = require("sequelize");
class agency_id_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_id_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_info',
                    key: 'id'
                }
            },
            agency_id_types_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            format: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            website: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            required: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            submittal_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'agency_id_info',
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
                    name: "agency_info_agency_id_foreign_key",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_id_info = agency_id_info;
