"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration = void 0;
const sequelize_1 = require("sequelize");
class migration extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('migration', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            migration: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            batch: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            tableName: 'migrations',
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
exports.migration = migration;
