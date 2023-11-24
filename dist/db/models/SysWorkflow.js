"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_workflow = void 0;
const sequelize_1 = require("sequelize");
class sys_workflow extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_workflow', {
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
            tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'sys_workflow_type',
                    key: 'id'
                }
            },
            assignment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "workflow-manager"
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sys_difficulty_level_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_difficulty_level',
                    key: 'id'
                }
            },
            sys_priority_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_priority_list',
                    key: 'id'
                }
            },
            company_followup_enabled: {
                type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            company_followup_days: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            company_due_date_enabled: {
                type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            company_due_date_days: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            agency_due_date_enabled: {
                type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            agency_due_date_days: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0
            },
            parent: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            auto_letters_option: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            cause_of_workflow_option: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            corrective_action_option: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            account_agency_letter_option: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'sys_workflow',
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
                    name: "sys_workflow_sys_workflow_type_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_workflow_type_id" },
                    ]
                },
                {
                    name: "sys_workflow_sys_difficulty_level_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_difficulty_level_id" },
                    ]
                },
                {
                    name: "sys_workflow_sys_priority_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_priority_list_id" },
                    ]
                },
                {
                    name: "sys_workflow_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.sys_workflow = sys_workflow;
