"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_workflow_type = void 0;
const sequelize_1 = require("sequelize");
class sys_workflow_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_workflow_type', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            slug: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                unique: "sys_workflow_type_slug_unique"
            }
        }, {
            tableName: 'sys_workflow_type',
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
                    name: "sys_workflow_type_slug_unique",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "slug" },
                    ]
                },
            ]
        });
    }
}
exports.sys_workflow_type = sys_workflow_type;
