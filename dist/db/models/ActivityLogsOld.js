"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activity_logs_old = void 0;
const sequelize_1 = require("sequelize");
class activity_logs_old extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('activity_logs_old', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            activity_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            activity_module: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            activity_model: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            activity_model_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            activity_parent_module: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            activity_parent_model: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            activity_parent_model_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            old: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            new: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            activity_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'activity_logs_old',
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
exports.activity_logs_old = activity_logs_old;
