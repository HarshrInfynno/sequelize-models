"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mastertax_setting = void 0;
const sequelize_1 = require("sequelize");
class mastertax_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('mastertax_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            client_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            client_secret: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            certificate: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            key: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            access_token: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            access_token_expiry: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            last_synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'mastertax_settings',
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
                    name: "mastertax_Settings_co_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.mastertax_setting = mastertax_setting;
