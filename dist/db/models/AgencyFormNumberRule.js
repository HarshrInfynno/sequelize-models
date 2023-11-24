"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_number_rule = void 0;
const sequelize_1 = require("sequelize");
class agency_form_number_rule extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_form_number_rule', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            agency_form_number_attribute_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'agency_form_number_attribute',
                    key: 'id'
                }
            },
            name: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: false
            },
            option_1: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            option_2: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            }
        }, {
            tableName: 'agency_form_number_rules',
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
                    name: "agency_form_number_attribute_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_form_number_attribute_id" },
                    ]
                },
                {
                    name: "co_info_id",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_form_number_rule = agency_form_number_rule;
