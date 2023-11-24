"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_moved_payment_info = void 0;
const sequelize_1 = require("sequelize");
class wf_task_moved_payment_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_moved_payment_info', {
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
            is_payment_moved: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_moved: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            reason_for_moved_payment: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            moved_from: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            moved_to: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            date_moved: {
                type: sequelize_1.DataTypes.DATEONLY,
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
            tableName: 'wf_task_moved_payment_info',
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
                    name: "wf_task_moved_payment_info_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_moved_payment_info = wf_task_moved_payment_info;
