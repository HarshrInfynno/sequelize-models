"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_task_definition = void 0;
const sequelize_1 = require("sequelize");
class sys_task_definition extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_task_definition', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            slug: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                unique: "sys_task_definition_slug_unique"
            },
            days_open: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            default: {
                type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            total_options: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'sys_task_definition',
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
                    name: "sys_task_definition_slug_unique",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "slug" },
                    ]
                },
            ]
        });
    }
}
exports.sys_task_definition = sys_task_definition;
