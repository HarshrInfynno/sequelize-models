"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_wf_assignment_rule_type = void 0;
const sequelize_1 = require("sequelize");
class sys_wf_assignment_rule_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_wf_assignment_rule_type', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            rule_input_type: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            slug: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'sys_wf_assignment_rule_type',
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
exports.sys_wf_assignment_rule_type = sys_wf_assignment_rule_type;
