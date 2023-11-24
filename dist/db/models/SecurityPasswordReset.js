"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.security_password_reset = void 0;
const sequelize_1 = require("sequelize");
class security_password_reset extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('security_password_reset', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            token: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            }
        }, {
            tableName: 'security_password_resets',
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
                    name: "security_password_resets_token_index",
                    using: "BTREE",
                    fields: [
                        { name: "token" },
                    ]
                },
            ]
        });
    }
}
exports.security_password_reset = security_password_reset;
