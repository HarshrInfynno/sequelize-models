"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_id_type = void 0;
const sequelize_1 = require("sequelize");
class agency_id_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_id_type', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            slug: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'agency_id_types',
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
exports.agency_id_type = agency_id_type;
