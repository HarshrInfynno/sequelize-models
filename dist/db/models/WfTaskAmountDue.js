"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_amount_due = void 0;
const sequelize_1 = require("sequelize");
class wf_task_amount_due extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_amount_due', {
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
            amount_due_credit_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_payment_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            amount_due_tax_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_penalty_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_interest_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_fine_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            amount_due_fee_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            amount_due_original_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            is_amount_due: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_reason: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_allow_actual: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            amount_due_actual_credit_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_actual_payment_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            amount_due_actual_tax_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_actual_penalty_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_actual_interest_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_actual_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_total_variance: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            amount_due_total_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_tax_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_penalty_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_interest_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_fine_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_fee_paid_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_paid_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            amount_due_total_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_tax_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_penalty_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_interest_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_fine_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_fee_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_pi_amount: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_payment_made: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_payment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_due_tax_approver: {
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
            },
            is_use_actuals: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            pv_invoice_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'wf_task_amount_due',
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
                    name: "wf_task_amount_due_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_task_amount_due_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_amount_due = wf_task_amount_due;
