"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_agency_tax_type = void 0;
const sequelize_1 = require("sequelize");
class co_agency_tax_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_agency_tax_type', {
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
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'co_agency_tax_type',
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
exports.co_agency_tax_type = co_agency_tax_type;
