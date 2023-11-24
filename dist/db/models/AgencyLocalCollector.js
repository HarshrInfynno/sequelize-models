"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local_collector = void 0;
const sequelize_1 = require("sequelize");
class agency_local_collector extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local_collector', {
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
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false
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
            old_filling_type_id: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            old_agency_tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            }
        }, {
            tableName: 'agency_local_collector',
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
exports.agency_local_collector = agency_local_collector;
