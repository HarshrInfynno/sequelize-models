const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_user_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    security_role: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_system_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middle_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_group: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_picture_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_out_of_office: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_edit_dropdowns: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_add_departments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_assign_workflows: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_edit_completed_tasks: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_manage_all_tasks: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_verified_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_otp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    available_workflow_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    available_filling_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inactive_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    can_access_ocr: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    can_access_settings: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    show_delete_option: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    can_edit_knowledgebase: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_sys_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_billing_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_it_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    allow_login_without_sso: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    lead_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_csr_list_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    manager_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_vendor: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    can_access_co_registration: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    custom_user_color_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    custom_user_color: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "#f16630"
    }
  }, {
    tableName: 'app_user_info',
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
        name: "app_user_info_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "app_user_info_first_name_index",
        using: "BTREE",
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "app_user_info_middle_name_index",
        using: "BTREE",
        fields: [
          { name: "middle_name" },
        ]
      },
      {
        name: "app_user_info_last_name_index",
        using: "BTREE",
        fields: [
          { name: "last_name" },
        ]
      },
      {
        name: "app_user_info_email_index",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "app_user_info_phone_index",
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "app_user_info_position_index",
        using: "BTREE",
        fields: [
          { name: "position" },
        ]
      },
      {
        name: "app_user_info_designation_index",
        using: "BTREE",
        fields: [
          { name: "designation" },
        ]
      },
      {
        name: "app_user_info_extension_index",
        using: "BTREE",
        fields: [
          { name: "extension" },
        ]
      },
    ]
  });
};
