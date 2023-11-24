"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.temp_account_agency = void 0;
const sequelize_1 = require("sequelize");
class temp_account_agency extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('temp_account_agency', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            account_info: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            agency_info: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            ein: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            deposit_frequency: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            deposit_method: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            account_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            withholding_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            taxpayer_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            unemployment_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            end_date: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            internal_id_1: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            internal_id_2: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'temp_account_agency',
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
exports.temp_account_agency = temp_account_agency;
