"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_info = void 0;
const sequelize_1 = require("sequelize");
class co_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            industry: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'app_industries',
                    key: 'id'
                }
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_countries',
                    key: 'id'
                }
            },
            address: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            city: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false
            },
            email_server_host: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_server_username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_server_password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_server_port: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_server_encryption: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_display_name: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            letter_cc_email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            letter_bcc_email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            international: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            countries: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            aos_option_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_option_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_option_3: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_option_4: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_date_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_date_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_date_3: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            aos_date_4: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            wf_options: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            filing_options: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            enabled_ask_expert: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            workflow_assignment: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1
            },
            auto_letters: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            is_2fa_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            docusign_settings: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            docusign_token: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            caf_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            digisigner_key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            override_sequential_assignment: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1
            },
            email_service_provider: {
                type: sequelize_1.DataTypes.STRING(144),
                allowNull: true,
                defaultValue: "Outlook"
            },
            use_custom_mailing_provider: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            salesforce_settings: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            sso_settings: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            sso_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            ocr_id_format: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            sequential_enabled: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            logo: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            mail_alert_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            alert_time: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            account_options_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            digisigner_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            docusign_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            filing_type_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            workflow_options_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            salesforce_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            zendesk_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            ocr_settings_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            sequential_preference: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true,
                defaultValue: "account-agency-tax_period"
            },
            registration_information_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            company_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            stock_traded: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            recently_acquired: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            incorporated_state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            incorporation_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            formerly_known_as: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            naics_code: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            business_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            business_description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            website: {
                type: sequelize_1.DataTypes.STRING(355),
                allowNull: true
            },
            cc_the_csr: {
                type: sequelize_1.DataTypes.TINYINT.UNSIGNED,
                allowNull: true
            },
            sequential_use_current_id: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            account_end_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            master_tax_settings_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            yardi_settings_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
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
            cost_center_mapping_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            managed_service_notes_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            co_branding_logo_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            custom_user_color_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            }
        }, {
            tableName: 'co_info',
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
                    name: "co_info_industry_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "industry" },
                    ]
                },
                {
                    name: "co_info_country_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "country" },
                    ]
                },
                {
                    name: "co_info_state_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "state" },
                    ]
                },
            ]
        });
    }
}
exports.co_info = co_info;
