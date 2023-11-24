"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microsoft_setting = void 0;
const sequelize_1 = require("sequelize");
class microsoft_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('microsoft_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            provider: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            display_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            access_token: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            refresh_token: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            expires_on: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            user: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            connection_level: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            last_synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'microsoft_settings',
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
exports.microsoft_setting = microsoft_setting;
