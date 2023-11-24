"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_info = void 0;
const sequelize_1 = require("sequelize");
class agency_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
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
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            abbreviation: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            iso_3166_2_code: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            expiration_date: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'agency_info',
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
                    name: "agency_info_country_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "country" },
                    ]
                },
            ]
        });
    }
}
exports.agency_info = agency_info;
