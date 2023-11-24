"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_refund_due = void 0;
const sequelize_1 = require("sequelize");
class wf_task_refund_due extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_refund_due', {
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
            rd_is_refund_due: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_refund_due_reason: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_expected_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rd_recieved_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rd_refund_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_refund_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            rd_refund_paid_to: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_refund_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_paid_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rd_refund_expected_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rd_refund_request_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            rd_refund_request_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rd_refund_due_tax_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            rd_refund_due_penalty_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            rd_refund_due_interest_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            rd_refund_due_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            rd_credit_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            rd_total_refund: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            }
        }, {
            tableName: 'wf_task_refund_due',
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
                    name: "wf_task_refund_due_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_task_refund_due_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_refund_due = wf_task_refund_due;
