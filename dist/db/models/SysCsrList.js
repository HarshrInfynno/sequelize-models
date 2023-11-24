"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_csr_list = void 0;
const sequelize_1 = require("sequelize");
class sys_csr_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_csr_list', {
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
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            tableName: 'sys_csr_list',
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
                    name: "unique_name_for_co_info_id",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                        { name: "name" },
                    ]
                },
            ]
        });
    }
}
exports.sys_csr_list = sys_csr_list;
