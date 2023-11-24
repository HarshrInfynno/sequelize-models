"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_closure = void 0;
const sequelize_1 = require("sequelize");
class wf_task_closure extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_closure', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            issuing_country: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            issuing_agency: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rs_is_completed_timely: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rs_call_agency_count: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            rs_call_account_contact_count: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            rs_is_related_to_vendor: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rs_difficulty_level: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 1
            },
            rs_resolution_rating: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rs_created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            cl_close_notification_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_agent_talked_to: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_agent_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_was_issue_avoidable: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_issue_avoidable_action: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_is_followup_needed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_type_of_followup: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cl_created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            workflow_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            afc_type_of_closure: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'wf_task_closure',
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
                    name: "wf_task_closure_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_task_closure_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_closure = wf_task_closure;
