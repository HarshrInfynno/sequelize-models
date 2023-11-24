"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_note = void 0;
const sequelize_1 = require("sequelize");
class wf_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            workflow_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            workflow_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            note_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            visible_account_contact: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            notify_account_contact: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            contacts: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            salesforce_notes_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            zendesk_notes_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc_manager: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            tableName: 'wf_notes',
            hasTrigger: true,
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
                    name: "workflow_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_info_id" },
                    ]
                },
                {
                    name: "workflow_task_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_task_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_note = wf_note;
