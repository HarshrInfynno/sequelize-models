"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_info = void 0;
const sequelize_1 = require("sequelize");
class account_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            ants_client_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            parent: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            dba: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_countries',
                    key: 'id'
                }
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            address_1: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            address_2: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            account_location_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'account_location_list',
                    key: 'id'
                }
            },
            location_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fed_id: {
                type: sequelize_1.DataTypes.STRING(999),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true,
                defaultValue: "1900-01-01"
            },
            end_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true,
                defaultValue: "2100-12-31"
            },
            sys_csr_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_csr_list',
                    key: 'id'
                }
            },
            tax_service_start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true,
                defaultValue: "1900-01-01"
            },
            tax_service_end_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true,
                defaultValue: "2100-12-31"
            },
            sys_tax_service_level_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_tax_service_level_list',
                    key: 'id'
                }
            },
            sys_priority_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_priority_list',
                    key: 'id'
                }
            },
            sys_user_group_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_user_group_list',
                    key: 'id'
                }
            },
            estimated_annual_revenue: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            website: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            company_set: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            account_expected_revenue: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
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
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            aos_date_1: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            aos_date_2: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            aos_date_3: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            aos_date_4: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
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
            account_logo: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            assignment_1: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            assignment_2: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            internal_id_1: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            internal_id_2: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
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
            }
        }, {
            tableName: 'account_info',
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
                    name: "account_info_country_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "country" },
                    ]
                },
                {
                    name: "account_info_state_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "state" },
                    ]
                },
                {
                    name: "account_info_account_location_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "account_location_list_id" },
                    ]
                },
                {
                    name: "account_info_sys_tax_service_level_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_tax_service_level_list_id" },
                    ]
                },
                {
                    name: "account_info_sys_priority_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_priority_list_id" },
                    ]
                },
                {
                    name: "account_info_sys_user_group_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_user_group_list_id" },
                    ]
                },
                {
                    name: "account_info_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "account_info_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "account_info_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "account_info_account_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "account_id" },
                    ]
                },
                {
                    name: "account_info_assignment_2_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "assignment_2" },
                    ]
                },
                {
                    name: "account_info_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "account_info_fed_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "fed_id", length: 768 },
                    ]
                },
                {
                    name: "account_info_assignment_1_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "assignment_1" },
                    ]
                },
                {
                    name: "account_info_sys_csr_list_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "sys_csr_list_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_info = account_info;
