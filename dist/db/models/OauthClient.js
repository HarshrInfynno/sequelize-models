"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_client = void 0;
const sequelize_1 = require("sequelize");
class oauth_client extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('oauth_client', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            secret: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            redirect: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            personal_access_client: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            password_client: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            revoked: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            }
        }, {
            tableName: 'oauth_clients',
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
                    name: "oauth_clients_user_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.oauth_client = oauth_client;
