"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_priority_list = void 0;
const sequelize_1 = require("sequelize");
class sys_priority_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_priority_list', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
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
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            }
        }, {
            tableName: 'sys_priority_list',
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
                    name: "sys_priority_list_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.sys_priority_list = sys_priority_list;
