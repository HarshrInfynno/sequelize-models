"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_alert = void 0;
const sequelize_1 = require("sequelize");
class co_alert extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_alert', {
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
            alert_type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            is_active: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1
            },
            condition: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            option: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            parent: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            action: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            notes: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'co_alert',
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
exports.co_alert = co_alert;
