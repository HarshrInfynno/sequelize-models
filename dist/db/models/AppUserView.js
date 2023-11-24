"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_view = void 0;
const sequelize_1 = require("sequelize");
class app_user_view extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_view', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            user_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            column_order: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            hidden_columns: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            filters: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            page_size: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            search: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sort: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            search_field: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'app_user_views',
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
                    name: "app_user_views_user_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
            ]
        });
    }
}
exports.app_user_view = app_user_view;
