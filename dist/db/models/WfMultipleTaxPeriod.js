"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_multiple_tax_period = void 0;
const sequelize_1 = require("sequelize");
class wf_multiple_tax_period extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_multiple_tax_period', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            workflow_notice_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            year: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            qtr1: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            qtr2: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            qtr3: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            qtr4: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            jan: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            feb: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            mar: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            apr: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            may: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            jun: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            jul: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            aug: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            sep: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            oct: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            nov: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            dec: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
            },
            annual: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0
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
            tableName: 'wf_multiple_tax_periods',
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
                    name: "workflow_notice_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_notice_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_multiple_tax_period = wf_multiple_tax_period;
