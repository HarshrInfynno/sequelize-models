"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_link_type = void 0;
const sequelize_1 = require("sequelize");
class agency_link_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_link_type', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            tableName: 'agency_link_type',
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
exports.agency_link_type = agency_link_type;
