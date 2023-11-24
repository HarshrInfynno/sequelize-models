"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_detail = void 0;
const sequelize_1 = require("sequelize");
class wf_task_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_detail', {
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
            workflow_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            issuing_country: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            issuing_agency: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vc_is_verification_completed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vc_verification_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ua_is_account_updated: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ua_what_update_made: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ua_date_account_updated: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ua_is_followup_needed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vi_updated_vendor: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vi_vendor_updated: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vi_updated_datetime: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            vf_account_change_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vf_date_verified: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            up_has_deposit_freuency_updated: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            up_date_deposit_freuency_updated: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            sr_type_of_information_submited: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sr_date_information_submited: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_returned_filed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_return_date_filed: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            ar_created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            fu_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fu_is_follow_up_done: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fu_is_more_follw_up_needed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fu_is_agency_follow_up_done: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fu_is_agency_more_follw_up_needed: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fu_needed_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            bi_is_workflow_billable: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            bi_total_time_spent_in_minutes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            bi_bill_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            bi_date_bill_sent: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            bi_created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            vd_updated_vendor: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vd_vendor_updated: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vd_vendor_updated_datetime: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            vd_updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
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
            type_of_information: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            date_information_requested: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            date_information_received: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            tableName: 'wf_task_detail',
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
            ]
        });
    }
}
exports.wf_task_detail = wf_task_detail;
