"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_communication = void 0;
const sequelize_1 = require("sequelize");
class account_communication extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_communication', {
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
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            resource_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
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
            tableName: 'account_communications',
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
                    name: "account_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                    ]
                },
                {
                    name: "resource_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "resource_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_communication = account_communication;
