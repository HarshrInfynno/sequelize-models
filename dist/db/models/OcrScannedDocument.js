"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocr_scanned_document = void 0;
const sequelize_1 = require("sequelize");
class ocr_scanned_document extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('ocr_scanned_document', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            wf_display_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            document_id: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            s3_path: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            s3_name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            file_text: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            csv_files_locations: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            form_fields: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            document_processed: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
                defaultValue: "PROCESSING"
            },
            total_pages: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                defaultValue: 0
            },
            tax_period: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            tax_year: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            tax_form: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            amount_due: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            agency_form_number: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            payment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            amount_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            credit_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            payment_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            tax_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            penalty_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            interest_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            fine_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            fee_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            tax_refund_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            penalty_refund_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            interest_refund_amount: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            major_rate_1: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            minor_rate_1: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            minor_rate_2: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            minor_rate_3: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            rate_start_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            sdi_rate: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            issue_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            received_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            agency_due_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            check_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            co_due_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            follow_up_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            due_date: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            inquiry_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_type: {
                type: sequelize_1.DataTypes.ENUM('department', 'local', 'city'),
                allowNull: true
            },
            agency_dept_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_department',
                    key: 'id'
                }
            },
            agency_local_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_local',
                    key: 'id'
                }
            },
            agency_city_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_city',
                    key: 'id'
                }
            },
            notice_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_workflow',
                    key: 'id'
                }
            },
            account_agency_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'account_agency',
                    key: 'id'
                }
            },
            agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_info',
                    key: 'id'
                }
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            agency_countries_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_countries',
                    key: 'id'
                }
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
            agency_form_number_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_form_numbers',
                    key: 'id'
                }
            },
            filing_type_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true
            },
            refund_due: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            sql_notice: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            priority: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notice_manager: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            seq_notice_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agency_id_to_use: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_id_to_use_value: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            verified: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            query_results: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            textract_process_count: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                defaultValue: 1
            },
            parent_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            actual_pages: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            }
        }, {
            tableName: 'ocr_scanned_documents',
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
                    name: "agency_dept_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_dept_id" },
                    ]
                },
                {
                    name: "agency_local_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local_id" },
                    ]
                },
                {
                    name: "agency_city_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_city_id" },
                    ]
                },
                {
                    name: "notice_type_id",
                    using: "BTREE",
                    fields: [
                        { name: "notice_type_id" },
                    ]
                },
                {
                    name: "account_agency_id",
                    using: "BTREE",
                    fields: [
                        { name: "account_agency_id" },
                    ]
                },
                {
                    name: "agency_tax_type_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_tax_type_id" },
                    ]
                },
                {
                    name: "agency_info_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
                {
                    name: "co_info_id",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "created_by",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_countries_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_countries_id" },
                    ]
                },
                {
                    name: "account_info_id",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
                {
                    name: "agency_form_number_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_form_number_id" },
                    ]
                },
                {
                    name: "filing_type_id",
                    using: "BTREE",
                    fields: [
                        { name: "filing_type_id" },
                    ]
                },
            ]
        });
    }
}
exports.ocr_scanned_document = ocr_scanned_document;
