"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_city_address = void 0;
const sequelize_1 = require("sequelize");
class agency_city_address extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_city_address', {
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
            agency_city_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_city',
                    key: 'id'
                }
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            used_for: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            address_1: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            address_2: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            is_filing_address: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            },
            agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
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
            website: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            old_agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            }
        }, {
            tableName: 'agency_city_address',
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
                    name: "agency_city_address_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_city_address_agency_city_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_city_id" },
                    ]
                },
                {
                    name: "agency_city_address_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_city_address_state_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "state" },
                    ]
                },
                {
                    name: "agency_city_address_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
            ]
        });
    }
}
exports.agency_city_address = agency_city_address;
