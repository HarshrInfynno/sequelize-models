"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_department_link = void 0;
const sequelize_1 = require("sequelize");
class agency_department_link extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_department_link', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agency_department_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_department',
                    key: 'id'
                }
            },
            description: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            agency_link_type_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_link_type',
                    key: 'id'
                }
            },
            used_for: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            url: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            username: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            expire_on: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
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
            tableName: 'agency_department_link',
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
                    name: "agency_department_link_agency_department_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_department_id" },
                    ]
                },
                {
                    name: "agency_department_link_agency_link_type_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_link_type_id" },
                    ]
                },
                {
                    name: "agency_department_link_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_department_link_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
            ]
        });
    }
}
exports.agency_department_link = agency_department_link;
