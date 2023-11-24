"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_call_account_contact_info = void 0;
const sequelize_1 = require("sequelize");
class account_call_account_contact_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_call_account_contact_info', {
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
            account_contact_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            call_start: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            call_end: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            duration_seconds: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            call_note_ids: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'account_call_account_contact_info',
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
                    name: "account_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_call_account_contact_info = account_call_account_contact_info;
