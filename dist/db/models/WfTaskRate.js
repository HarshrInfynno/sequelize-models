"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_rate = void 0;
const sequelize_1 = require("sequelize");
class wf_task_rate extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_rate', {
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
                allowNull: false
            },
            start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            major_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            major_rate: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            minor_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            minor_rate_1: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            minor_rate_2: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            override_rate: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            total_rate_override: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            total_rate: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            sdi_rate: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            information_saved: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            verification_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            approval_type: {
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
            tableName: 'wf_task_rates',
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
                    name: "wf_task_rates_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_rate = wf_task_rate;
