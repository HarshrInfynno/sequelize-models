"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_country = void 0;
const sequelize_1 = require("sequelize");
class agency_country extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_country', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            country_code: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false
            },
            iso_code: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false
            },
            alpha2_code: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            numeric_code: {
                type: sequelize_1.DataTypes.STRING(3),
                allowNull: true
            },
            calling_code: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false
            }
        }, {
            tableName: 'agency_countries',
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
            ]
        });
    }
}
exports.agency_country = agency_country;
