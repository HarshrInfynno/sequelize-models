"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_failed_login_attempt = void 0;
const sequelize_1 = require("sequelize");
class app_user_failed_login_attempt extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_failed_login_attempt', {
            id: {
                type: sequelize_1.DataTypes.STRING(127),
                allowNull: false,
                primaryKey: true
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
            }
        }, {
            tableName: 'app_user_failed_login_attempts',
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
exports.app_user_failed_login_attempt = app_user_failed_login_attempt;
