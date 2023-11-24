"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local = void 0;
const sequelize_1 = require("sequelize");
class agency_local extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
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
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            filling_type_id: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                comment: "app_usage_types.id"
            },
            agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
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
            },
            tax_collector_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'agency_local_collector',
                    key: 'id'
                }
            },
            old_filling_type_id: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            old_agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            }
        }, {
            tableName: 'agency_local',
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
                    name: "agency_local_agency_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
                {
                    name: "agency_local_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_local_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "agency_local_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_local_tax_colletor_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "tax_collector_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_local = agency_local;
