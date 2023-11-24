"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_letter = void 0;
const sequelize_1 = require("sequelize");
class co_letter extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_letter', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            sys_letters_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                comment: "Type = Workflow, sys_workflow_type.id"
            },
            filling_type_id: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                comment: "Type = Workflow, app_usage_types.id"
            },
            show_in_list: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 1
            },
            recipient: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            html_content: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            is_service_provider: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            old_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            }
        }, {
            tableName: 'co_letters',
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
                    name: "co_letters_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "co_letters_sys_letters_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "sys_letters_id" },
                    ]
                },
            ]
        });
    }
}
exports.co_letter = co_letter;
