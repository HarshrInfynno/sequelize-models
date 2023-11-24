"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_access_token = void 0;
const sequelize_1 = require("sequelize");
class oauth_access_token extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('oauth_access_token', {
            id: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            client_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
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
            tableName: 'oauth_access_tokens',
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
                    name: "oauth_access_tokens_user_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.oauth_access_token = oauth_access_token;
