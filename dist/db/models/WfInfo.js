"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_info = void 0;
const sequelize_1 = require("sequelize");
class wf_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            ants_notice_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            ocr_scanned_document_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                unique: "wf_info_ocr_scanned_document_index"
            },
            display_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'account_info',
                    key: 'id'
                }
            },
            wf_description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_form_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_type: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_workflow',
                    key: 'id'
                }
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            issuing_agency: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'account_agency',
                    key: 'id'
                }
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            agency_dept: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_department',
                    key: 'id'
                }
            },
            agency_local: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_local',
                    key: 'id'
                }
            },
            agency_city: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_city',
                    key: 'id'
                }
            },
            tax_year: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_period: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            filling_type: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true
            },
            notice_form: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            category: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_form: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_manager: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            received_form: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            priority: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            issue_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            received_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            agency_due_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            check_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            co_due_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            follow_up_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            due_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            date_completed: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            attachment: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            inquiry_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            total_time_spent_in_seconds: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                defaultValue: 0
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            opened_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            opened_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            closed_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            closed_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            entry_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            afc_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            afc_check_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            afc_expiration_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            poa_request_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            poa_form: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Linked to agency_tax_forms",
                references: {
                    model: 'agency_tax_forms',
                    key: 'id'
                }
            },
            poa_recipient: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Likend to account_contact_info",
                references: {
                    model: 'account_contact_info',
                    key: 'id'
                }
            },
            poa_signature_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            poa_expiration_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            poa_envelope_id: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true
            },
            poa_info: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            poa_submit_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            poa_submit_type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            poa_submit_template_letter_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            seq_notice_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            workflow_class: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            is_sequential_notice: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            seq_notice_number: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            salesforce_case_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            zendesk_ticket_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sub_type_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_manager_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_manager_pic: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            updated_by_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            created_by_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            csr_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            location_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            last_note_entered: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            ar_reason_for_request: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_responsible_party: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ar_affected_agencies: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            ar_affected_locals: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            ar_total_returns: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            ar_total_employees: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            ar_total_w2c: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            ar_multiple_years: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            ar_country: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            manager_2: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            ar_affected_agencies_count: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            ar_affected_locals_count: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            is_bulk: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            agency_id_to_use: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_id_to_use_value: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            poa_agency_confirmation_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            poa_confirm_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            ar_number_of_states: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            ar_number_of_years: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            reg_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            selected_reg_agency_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            selected_reg_agency_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            reg_form: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            reg_taxable_wages: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true
            },
            reg_undeposited_funds: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true
            },
            reg_pending_deposits: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true
            },
            reg_1st_date_service_performed: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            reg_1st_date_wages_paid: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            reg_1st_q_number_ees: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            reg_1st_q_state_wages: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            reg_1st_q_ui_wages: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true
            },
            ar_total_w2: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            ar_number_of_quarters: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            amount_due_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            refund_due_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            reg_submittal_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            reg_agency_process_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            reg_submitted_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            agency_department_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_local_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_city_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            issuing_agency_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            workflow_type_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            workflow_type_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            filling_type_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            completed_tasks: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            total_tasks: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            current_task: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_type_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            old_tax_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            old_filling_type: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            workflow_multiple_tax_periods: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            pv_payment_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            pv_link_to_ap: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc3: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc4: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cc5: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_funded: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            wf_approved: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            payment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            major_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_1: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_2: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_3: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            ui_total_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            ui_start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            approved_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            rejected_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            uid: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            reg_closed_acct: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            reg_close_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            tableName: 'wf_info',
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
                    name: "wf_info_ocr_scanned_document_index",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "ocr_scanned_document_id" },
                    ]
                },
                {
                    name: "wf_info_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "wf_info_notice_type_index",
                    using: "BTREE",
                    fields: [
                        { name: "notice_type" },
                    ]
                },
                {
                    name: "wf_info_issuing_agency_index",
                    using: "BTREE",
                    fields: [
                        { name: "issuing_agency" },
                    ]
                },
                {
                    name: "wf_info_notice_manager_index",
                    using: "BTREE",
                    fields: [
                        { name: "notice_manager" },
                    ]
                },
                {
                    name: "wf_info_agency_due_date_index",
                    using: "BTREE",
                    fields: [
                        { name: "agency_due_date" },
                    ]
                },
                {
                    name: "wf_info_priority_index",
                    using: "BTREE",
                    fields: [
                        { name: "priority" },
                    ]
                },
                {
                    name: "wf_info_status_index",
                    using: "BTREE",
                    fields: [
                        { name: "status" },
                    ]
                },
                {
                    name: "wf_info_account_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
                {
                    name: "wf_info_agency_dept_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_dept" },
                    ]
                },
                {
                    name: "wf_info_agency_local_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local" },
                    ]
                },
                {
                    name: "wf_info_agency_city_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_city" },
                    ]
                },
                {
                    name: "wf_info_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "wf_info_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "wf_info_poa_form_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "poa_form" },
                    ]
                },
                {
                    name: "wf_info_poa_recipient_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "poa_recipient" },
                    ]
                },
            ]
        });
    }
}
exports.wf_info = wf_info;
