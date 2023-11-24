"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local_collector_address = void 0;
const sequelize_1 = require("sequelize");
class agency_local_collector_address extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local_collector_address', {
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
            agency_local_collector_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_local_collector',
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
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
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
            tableName: 'agency_local_collector_address',
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
                    name: "agency_local_collector_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local_collector_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_local_collector_address = agency_local_collector_address;
