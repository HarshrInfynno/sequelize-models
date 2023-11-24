"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_detail_ar = void 0;
const sequelize_1 = require("sequelize");
class wf_task_detail_ar extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_detail_ar', {
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
            wf_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            ar_who_completed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_date_completed: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_billed_account: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_date_billed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            ar_liability_due_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_no_return_needed: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_returns_created: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_liability_collected: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_liability_amount: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true
            },
            ar_filed_return: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_deposit_paid: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_date_filed: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_refund_due: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ar_refund_amount: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true
            },
            ar_letter_sent_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_letter_received_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_who_entered_adjustment: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_adjustment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_adjustment_date_entered: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_review_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_review_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            }
        }, {
            tableName: 'wf_task_detail_ar',
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
                    name: "wf_task_detail_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_task_detail_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "wf_task_detail_ar_review_by",
                    using: "BTREE",
                    fields: [
                        { name: "ar_review_by" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_detail_ar = wf_task_detail_ar;
