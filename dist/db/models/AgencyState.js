"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_state = void 0;
const sequelize_1 = require("sequelize");
class agency_state extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_state', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_countries',
                    key: 'id'
                }
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            code: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            }
        }, {
            tableName: 'agency_states',
            timestamps: false,
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
                    name: "agency_states_country_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "country" },
                    ]
                },
            ]
        });
    }
}
exports.agency_state = agency_state;
