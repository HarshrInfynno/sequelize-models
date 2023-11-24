"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_difficulty_level = void 0;
const sequelize_1 = require("sequelize");
class sys_difficulty_level extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_difficulty_level', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'sys_difficulty_level',
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
exports.sys_difficulty_level = sys_difficulty_level;
