"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_detail_reg = void 0;
const sequelize_1 = require("sequelize");
class wf_task_detail_reg extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_detail_reg', {
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
            what_caused_the_issue: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            what_corrective_actions_taken: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            submitted_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            submitted_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            tax_system_update_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            payroll_system_update_date: {
                type: sequelize_1.DataTypes.DATE,
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
            is_registration_completed: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            pin: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'wf_task_detail_reg',
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
                    name: "wf_info_wf_task_detail_reg_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "co_info_wf_task_detail_reg_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_detail_reg = wf_task_detail_reg;
