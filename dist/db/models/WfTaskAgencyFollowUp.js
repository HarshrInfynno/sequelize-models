"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_agency_follow_up = void 0;
const sequelize_1 = require("sequelize");
class wf_task_agency_follow_up extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_agency_follow_up', {
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
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            wf_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            fu_is_agency_follow_up_done: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            fu_is_agency_more_follow_up_needed: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'wf_task_agency_follow_up',
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
                    name: "wf_task_agency_follow_up_co_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "wf_task_agency_follow_up_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "wf_task_agency_follow_up_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "wf_task_agency_follow_up_wf_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_task_agency_follow_up_wf_task_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "wf_task_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_agency_follow_up = wf_task_agency_follow_up;
