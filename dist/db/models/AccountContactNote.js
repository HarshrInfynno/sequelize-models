"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_contact_note = void 0;
const sequelize_1 = require("sequelize");
class account_contact_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_contact_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            account_contact_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'account_contact_info',
                    key: 'id'
                }
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
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
            }
        }, {
            tableName: 'account_contact_notes',
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
                    name: "account_contact_notes_account_contact_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "account_contact_info_id" },
                    ]
                },
                {
                    name: "account_contact_notes_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "account_contact_notes_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
            ]
        });
    }
}
exports.account_contact_note = account_contact_note;
