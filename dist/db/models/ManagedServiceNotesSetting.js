"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managed_service_notes_setting = void 0;
const sequelize_1 = require("sequelize");
class managed_service_notes_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('managed_service_notes_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            use_default_settings: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            tax_period: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            payment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            filing_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            notes: {
                type: sequelize_1.DataTypes.TEXT,
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
            tableName: 'managed_service_notes_settings',
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
                    name: "co_info_id",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.managed_service_notes_setting = managed_service_notes_setting;
