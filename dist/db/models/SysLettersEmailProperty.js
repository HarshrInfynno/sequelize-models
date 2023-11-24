"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_letters_email_property = void 0;
const sequelize_1 = require("sequelize");
class sys_letters_email_property extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_letters_email_property', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                comment: "Type = Workflow, sys_workflow_type.id"
            },
            subject_line: {
                type: sequelize_1.DataTypes.STRING(255),
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
            tableName: 'sys_letters_email_properties',
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
                    name: "sys_letters_email_properties_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "sys_letters_email_properties_sys_workflow_type_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "sys_workflow_type_id" },
                    ]
                },
            ]
        });
    }
}
exports.sys_letters_email_property = sys_letters_email_property;
