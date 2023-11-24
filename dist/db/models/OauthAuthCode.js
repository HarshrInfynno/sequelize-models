"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_auth_code = void 0;
const sequelize_1 = require("sequelize");
class oauth_auth_code extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('oauth_auth_code', {
            id: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            client_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            scopes: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            revoked: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            expires_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'oauth_auth_codes',
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
                {
                    name: "oauth_auth_codes_user_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.oauth_auth_code = oauth_auth_code;
