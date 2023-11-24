const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    industry: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_industries',
        key: 'id'
      }
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email_server_host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_port: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_encryption: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_display_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    letter_cc_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    letter_bcc_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    international: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    countries: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aos_option_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wf_options: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filing_options: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    enabled_ask_expert: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_assignment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    auto_letters: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    is_2fa_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    docusign_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    docusign_token: {
      type: DataTypes.JSON,
      allowNull: true
    },
    caf_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    digisigner_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    override_sequential_assignment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    email_service_provider: {
      type: DataTypes.STRING(144),
      allowNull: true,
      defaultValue: "Outlook"
    },
    use_custom_mailing_provider: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salesforce_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sso_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sso_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ocr_id_format: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    sequential_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mail_alert_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    alert_time: {
      type: DataTypes.JSON,
      allowNull: true
    },
    account_options_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    digisigner_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    docusign_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    filing_type_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    workflow_options_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salesforce_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    zendesk_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ocr_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sequential_preference: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "account-agency-tax_period"
    },
    registration_information_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    company_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stock_traded: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    recently_acquired: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    incorporated_state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    formerly_known_as: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    naics_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(355),
      allowNull: true
    },
    cc_the_csr: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    sequential_use_current_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    account_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    master_tax_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    yardi_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    cc1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cost_center_mapping_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    managed_service_notes_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    co_branding_logo_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    custom_user_color_enabled: {
      type: DataTypes.TINYINT,
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
};
