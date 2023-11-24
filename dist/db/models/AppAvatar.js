"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_avatar = void 0;
const sequelize_1 = require("sequelize");
class app_avatar extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_avatar', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            avatar_url: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            tableName: 'app_avatars',
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
exports.app_avatar = app_avatar;
