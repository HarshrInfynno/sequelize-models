"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_personal_access_client = void 0;
const sequelize_1 = require("sequelize");
class oauth_personal_access_client extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('oauth_personal_access_client', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            client_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            tableName: 'oauth_personal_access_clients',
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
exports.oauth_personal_access_client = oauth_personal_access_client;
