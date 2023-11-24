"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_research = void 0;
const sequelize_1 = require("sequelize");
class wf_task_research extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_research', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            workflow_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            workflow_situation: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            who_caused_issue: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            what_department_caused_issue: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            expect_sequential_notice: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            what_caused_issue: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            what_corrective_actions_taken: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            what_department_responsible_for_corrective_actions: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            what_form_used_to_resolve_the_issue: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            inquiry_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
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
            tableName: 'wf_task_research',
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
                    name: "wf_task_research_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_research = wf_task_research;
