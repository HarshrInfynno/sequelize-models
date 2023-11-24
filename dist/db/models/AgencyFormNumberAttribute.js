"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_number_attribute = void 0;
const sequelize_1 = require("sequelize");
class agency_form_number_attribute extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_form_number_attribute', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            agency_form_number_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_form_numbers',
                    key: 'id'
                }
            },
            agency_form_keyword_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'agency_form_keyword_type',
                    key: 'id'
                }
            },
            attribute: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: false
            },
            starts_after: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            word_count: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'agency_form_number_attribute',
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
                    name: "agency_form_number_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_form_number_id" },
                    ]
                },
                {
                    name: "agency_form_keyword_type_id",
                    using: "BTREE",
                    fields: [
                        { name: "agency_form_keyword_type_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_form_number_attribute = agency_form_number_attribute;
