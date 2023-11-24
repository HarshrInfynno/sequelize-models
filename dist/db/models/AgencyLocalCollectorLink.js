"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local_collector_link = void 0;
const sequelize_1 = require("sequelize");
class agency_local_collector_link extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local_collector_link', {
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
            agency_local_collector_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_local_collector',
                    key: 'id'
                }
            },
            description: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            agency_link_type_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true
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
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'agency_local_collector_link',
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
                    name: "agency_local_collector_id_link_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local_collector_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_local_collector_link = agency_local_collector_link;
