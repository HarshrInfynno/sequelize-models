"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const sequelize_1 = require("sequelize");
class token extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('token', {
            id: {
                type: sequelize_1.DataTypes.STRING(127),
                allowNull: false,
                primaryKey: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            data: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: false
            }
        }, {
            tableName: 'tokens',
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
exports.token = token;
