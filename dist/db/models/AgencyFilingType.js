"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_filing_type = void 0;
const sequelize_1 = require("sequelize");
class agency_filing_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_filing_type', {
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
            agency_tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'agency_filing_types',
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
exports.agency_filing_type = agency_filing_type;
