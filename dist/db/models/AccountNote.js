"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_note = void 0;
const sequelize_1 = require("sequelize");
class account_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_note', {
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
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'account_info',
                    key: 'id'
                }
            },
            note_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
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
            tableName: 'account_notes',
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
                    name: "account_notes_account_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
                {
                    name: "account_notes_created_by_index",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "account_notes_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_note = account_note;
