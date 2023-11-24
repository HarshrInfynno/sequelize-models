"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_contact_info = void 0;
const sequelize_1 = require("sequelize");
class account_contact_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_contact_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'account_info',
                    key: 'id'
                }
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            contact_type: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            primary_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            alert: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            secondary_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fax_number: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            is_primary_contact: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            profile_picture_link: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            location: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            address_1: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            address_2: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            end_date: {
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
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            internal_id_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            internal_id_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            auto_inactivate: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            poa_signer: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            tableName: 'account_contact_info',
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
                    name: "account_contact_info_account_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
                {
                    name: "account_contact_info_state_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "state" },
                    ]
                },
                {
                    name: "account_contact_info_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "account_contact_info_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "data_import_index",
                    using: "BTREE",
                    fields: [
                        { name: "first_name" },
                        { name: "last_name" },
                        { name: "co_info_id" },
                        { name: "account_id" },
                    ]
                },
                {
                    name: "data_import_index_internal_1",
                    using: "BTREE",
                    fields: [
                        { name: "first_name" },
                        { name: "last_name" },
                        { name: "co_info_id" },
                        { name: "internal_id_1" },
                    ]
                },
                {
                    name: "data_import_index_internal_2",
                    using: "BTREE",
                    fields: [
                        { name: "first_name" },
                        { name: "last_name" },
                        { name: "co_info_id" },
                        { name: "internal_id_2" },
                    ]
                },
            ]
        });
    }
}
exports.account_contact_info = account_contact_info;
