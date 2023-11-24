"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_tax_forms_co_setting = void 0;
const sequelize_1 = require("sequelize");
class agency_tax_forms_co_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_tax_forms_co_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            agency_tax_forms_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            assignee_contact_person: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_contact_phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_contact_fax: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_co_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_co_fein: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_co_address_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_co_address_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_city: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_state: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_zip: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            assignee_email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignee_title: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            title_date_appointed: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'agency_tax_forms_co_settings',
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
            ]
        });
    }
}
exports.agency_tax_forms_co_setting = agency_tax_forms_co_setting;
