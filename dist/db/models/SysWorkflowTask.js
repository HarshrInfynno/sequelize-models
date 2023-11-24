"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_workflow_task = void 0;
const sequelize_1 = require("sequelize");
class sys_workflow_task extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_workflow_task', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            sys_workflow_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'sys_workflow',
                    key: 'id'
                }
            },
            sys_task_definition_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'sys_task_definition',
                    key: 'id'
                }
            },
            order: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 1
            },
            days_open: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            assigned_to: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            skip: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            enabled_skip: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            assignment: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            template_letter: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            include_totals_page: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            count: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            rule_type_id_1: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            rule_type_option_value_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignment_type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            rule_assignment_type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            assignment_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'sys_workflow_tasks',
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
                    name: "sys_workflow_tasks_sys_workflow_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_workflow_id" },
                    ]
                },
                {
                    name: "sys_workflow_tasks_sys_task_definition_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_task_definition_id" },
                    ]
                },
            ]
        });
    }
}
exports.sys_workflow_task = sys_workflow_task;
