"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_info = void 0;
const sequelize_1 = require("sequelize");
class app_user_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            security_role: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            is_system_admin: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            middle_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            designation: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            mobile_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            extension: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            position: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            user_group: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            timezone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            profile_picture_link: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            is_out_of_office: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            can_edit_dropdowns: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            can_add_departments: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            can_assign_workflows: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            can_edit_completed_tasks: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            can_manage_all_tasks: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_verified_at: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            remember_token: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            user_otp: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            last_login: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            last_login_ip: {
                type: sequelize_1.DataTypes.STRING(45),
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
            available_workflow_types: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            available_filling_types: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            inactive_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            can_access_ocr: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            can_access_settings: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            show_delete_option: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            can_edit_knowledgebase: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            is_sys_admin: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            is_billing_lead: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            is_it_lead: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            allow_login_without_sso: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            manager_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            lead_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            sys_csr_list_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            manager_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            is_vendor: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            can_access_co_registration: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            custom_user_color_enabled: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true
            },
            custom_user_color: {
                type: sequelize_1.DataTypes.STRING(7),
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
    }
}
exports.app_user_info = app_user_info;
