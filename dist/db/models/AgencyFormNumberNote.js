"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_number_note = void 0;
const sequelize_1 = require("sequelize");
class agency_form_number_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_form_number_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            content: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            agency_form_number_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_form_numbers',
                    key: 'id'
                }
            }
        }, {
            tableName: 'agency_form_number_note',
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
            ]
        });
    }
}
exports.agency_form_number_note = agency_form_number_note;
