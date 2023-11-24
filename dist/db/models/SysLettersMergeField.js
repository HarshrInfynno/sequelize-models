"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_letters_merge_field = void 0;
const sequelize_1 = require("sequelize");
class sys_letters_merge_field extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_letters_merge_field', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            value: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            table_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            field_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'sys_letters_merge_fields',
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
exports.sys_letters_merge_field = sys_letters_merge_field;
