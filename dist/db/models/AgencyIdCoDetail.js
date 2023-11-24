"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_id_co_detail = void 0;
const sequelize_1 = require("sequelize");
class agency_id_co_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_id_co_detail', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            agency_id_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_id_info',
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
            verification_exception: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            notes: {
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
            tableName: 'agency_id_co_details',
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
                    name: "co_info_agency_id_co_details_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_id_info_agency_id_co_details_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_id_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_id_co_detail = agency_id_co_detail;
