"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_refresh_token = void 0;
const sequelize_1 = require("sequelize");
class oauth_refresh_token extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('oauth_refresh_token', {
            id: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            access_token_id: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
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
            tableName: 'oauth_refresh_tokens',
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
exports.oauth_refresh_token = oauth_refresh_token;
