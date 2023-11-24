"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_report = void 0;
const sequelize_1 = require("sequelize");
class app_report extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_report', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            grouped_by: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            date_range: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            report_structure_json: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            last_run: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            synopsis_url: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            is_system_level: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            tableName: 'app_reports',
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
exports.app_report = app_report;
