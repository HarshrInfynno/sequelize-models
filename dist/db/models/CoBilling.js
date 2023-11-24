"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_billing = void 0;
const sequelize_1 = require("sequelize");
class co_billing extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_billing', {
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
            notice_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            notice_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            poa_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            poa_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            ar_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            ar_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            user_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            user_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            afc_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            afc_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            ocr_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            ocr_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            reg_v: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                defaultValue: 0
            },
            reg_p: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0
            },
            setup_fee: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            platform_fee: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            mrg_service: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            }
        }, {
            tableName: 'co_billing',
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
                    name: "co_billing_co_info",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.co_billing = co_billing;
