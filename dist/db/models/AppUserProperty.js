"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_property = void 0;
const sequelize_1 = require("sequelize");
class app_user_property extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_property', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            value: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            tableName: 'app_user_properties',
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
exports.app_user_property = app_user_property;
