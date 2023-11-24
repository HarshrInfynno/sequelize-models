"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_deposit_refund = void 0;
const sequelize_1 = require("sequelize");
class wf_task_deposit_refund extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_deposit_refund', {
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
            wf_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            afc_expired_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            afc_release_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            afc_deposit_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            released_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            deposited_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'wf_task_deposit_refund',
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
                    name: "wf_task_deposit_refund_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_deposit_refund = wf_task_deposit_refund;
