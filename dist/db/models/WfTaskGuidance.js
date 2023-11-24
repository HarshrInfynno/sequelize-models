"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_guidance = void 0;
const sequelize_1 = require("sequelize");
class wf_task_guidance extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_guidance', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            workflow_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_task_info',
                    key: 'id'
                }
            },
            workflow_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            wf_notes_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_notes',
                    key: 'id'
                }
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'wf_task_guidance',
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
                    name: "wf_task_guidance_workflow_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_info_id" },
                    ]
                },
                {
                    name: "wf_task_guidance_workflow_task_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_task_info_id" },
                    ]
                },
                {
                    name: "wf_task_guidance_wf+notes_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "wf_notes_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_guidance = wf_task_guidance;
