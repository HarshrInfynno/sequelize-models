"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_session = void 0;
const sequelize_1 = require("sequelize");
class app_user_session extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_session', {
            id: {
                type: sequelize_1.DataTypes.STRING(127),
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            shadow_app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            timestamp: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            ip: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            from_desktop_utility: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            tableName: 'app_user_sessions',
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
exports.app_user_session = app_user_session;
