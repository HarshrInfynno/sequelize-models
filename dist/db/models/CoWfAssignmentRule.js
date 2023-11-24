"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_wf_assignment_rule = void 0;
const sequelize_1 = require("sequelize");
class co_wf_assignment_rule extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_wf_assignment_rule', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            workflow_type: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            rule_type_id_1: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            rule_type_option_value_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rule_type_id_2: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            rule_type_option_value_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rule_type_id_3: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: true
            },
            rule_type_option_value_3: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            assignment_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            assignment_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            active: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 1
            },
            priority: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 1
            }
        }, {
            tableName: 'co_wf_assignment_rule',
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
                    name: "rule_type_id_1_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "rule_type_id_1" },
                    ]
                },
                {
                    name: "rule_type_id_2_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "rule_type_id_2" },
                    ]
                },
                {
                    name: "rule_type_id_3_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "rule_type_id_3" },
                    ]
                },
            ]
        });
    }
}
exports.co_wf_assignment_rule = co_wf_assignment_rule;
