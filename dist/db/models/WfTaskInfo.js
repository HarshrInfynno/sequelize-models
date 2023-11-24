"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_info = void 0;
const sequelize_1 = require("sequelize");
class wf_task_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            workflow_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
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
            due_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            assigned_to: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
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
            status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            total_time_spent_in_seconds: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                defaultValue: 0
            },
            task_complete_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            task_open_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            total_options: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            completed_options: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            task_opened_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            task_completed_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            pv_email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            pv_template_letter: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            pv_include_totals_page: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            count: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            has_guidance: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            is_skipped: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
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
            tableName: 'wf_task_info',
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
                    name: "workflow_task_info_sys_task_definition_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_task_definition_id" },
                    ]
                },
                {
                    name: "workflow_task_info_assigned_to_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "assigned_to" },
                    ]
                },
                {
                    name: "workflow_task_info_workflow_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_info_id" },
                    ]
                },
                {
                    name: "workflow_task_info_order_index",
                    using: "BTREE",
                    fields: [
                        { name: "order" },
                    ]
                },
                {
                    name: "workflow_task_info_status_index",
                    using: "BTREE",
                    fields: [
                        { name: "status" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_info = wf_task_info;
