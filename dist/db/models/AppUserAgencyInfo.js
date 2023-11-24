"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_agency_info = void 0;
const sequelize_1 = require("sequelize");
class app_user_agency_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_agency_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_info',
                    key: 'id'
                }
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            expires_on: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'app_user_info',
                    key: 'id'
                }
            }
        }, {
            tableName: 'app_user_agency_info',
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
                    name: "app_user_agency_info_app_user_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "app_user_info_id" },
                    ]
                },
                {
                    name: "app_user_agency_info_co_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "app_user_agency_info_agency_info_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
                {
                    name: "app_user_agency_info_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "app_user_agency_info_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
            ]
        });
    }
}
exports.app_user_agency_info = app_user_agency_info;
