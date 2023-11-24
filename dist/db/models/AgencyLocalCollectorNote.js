"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_local_collector_note = void 0;
const sequelize_1 = require("sequelize");
class agency_local_collector_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_local_collector_note', {
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
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
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
            tableName: 'agency_local_collector_note',
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
                    name: "agency_local_collector_id_note_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_local_collector_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_local_collector_note = agency_local_collector_note;
