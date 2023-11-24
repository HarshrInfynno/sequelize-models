"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_alert_note = void 0;
const sequelize_1 = require("sequelize");
class account_alert_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_alert_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            account_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            active: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            notes: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'account_alert_notes',
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
exports.account_alert_note = account_alert_note;
