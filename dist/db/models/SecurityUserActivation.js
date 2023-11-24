"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.security_user_activation = void 0;
const sequelize_1 = require("sequelize");
class security_user_activation extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('security_user_activation', {
            user_id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            token: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            }
        }, {
            tableName: 'security_user_activations',
            timestamps: true,
            indexes: [
                {
                    name: "security_user_activations_token_index",
                    using: "BTREE",
                    fields: [
                        { name: "token" },
                    ]
                },
            ]
        });
    }
}
exports.security_user_activation = security_user_activation;
