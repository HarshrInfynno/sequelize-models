"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yardi_setting = void 0;
const sequelize_1 = require("sequelize");
class yardi_setting extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('yardi_setting', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            host: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            private_key: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            file_path: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            last_synced_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            tableName: 'yardi_settings',
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
exports.yardi_setting = yardi_setting;
