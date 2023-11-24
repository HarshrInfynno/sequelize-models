"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local_collector_contact = void 0;
const sequelize_1 = require("sequelize");
class agency_local_collector_contact extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local_collector_contact', {
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
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            address_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_local_collector_address',
                    key: 'id'
                }
            }
        }, {
            tableName: 'agency_local_collector_contact',
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
                    name: "agency_local_collector_id_contact_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local_collector_id" },
                    ]
                },
                {
                    name: "agency_local_collector_address_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "address_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_local_collector_contact = agency_local_collector_contact;
