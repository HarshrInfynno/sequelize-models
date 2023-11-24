"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.security_role = void 0;
const sequelize_1 = require("sequelize");
class security_role extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('security_role', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            slug: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            }
        }, {
            tableName: 'security_roles',
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
exports.security_role = security_role;
