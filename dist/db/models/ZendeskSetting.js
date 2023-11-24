"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zendesk_setting = void 0;
const sequelize_1 = require("sequelize");
class zendesk_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('zendesk_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            domain: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            api_key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            sync_based_on: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sync_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_id_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            account_id_org_field_key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ticket_type_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agencies_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            departments_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            notice_types_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            locals_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            cities_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            tax_year_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            tax_period_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            issue_date_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            received_date_field_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            fields_synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            tickets_synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'zendesk_settings',
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
                    name: "zendesk_settings_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.zendesk_setting = zendesk_setting;
