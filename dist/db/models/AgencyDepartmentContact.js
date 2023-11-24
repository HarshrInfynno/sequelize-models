"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_department_contact = void 0;
const sequelize_1 = require("sequelize");
class agency_department_contact extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_department_contact', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
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
            agency_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            used_for: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            agent_id: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            primary_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            ext: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(20),
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
            },
            address_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_department_address',
                    key: 'id'
                }
            }
        }, {
            tableName: 'agency_department_contact',
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
                    name: "agency_department_contact_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_department_contact_agency_department_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_department_id" },
                    ]
                },
                {
                    name: "agency_department_contact_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_department_contact_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "agency_department_contact_address_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "address_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_department_contact = agency_department_contact;
