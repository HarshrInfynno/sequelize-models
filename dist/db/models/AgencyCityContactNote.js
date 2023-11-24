"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_city_contact_note = void 0;
const sequelize_1 = require("sequelize");
class agency_city_contact_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_city_contact_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            agency_city_contact_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_city_contact',
                    key: 'id'
                }
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
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
            tableName: 'agency_city_contact_note',
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
                    name: "agency_city_contact_note_created_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "created_by" },
                    ]
                },
                {
                    name: "agency_city_contact_note_updated_by_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "updated_by" },
                    ]
                },
                {
                    name: "city_contact_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_city_contact_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_city_contact_note = agency_city_contact_note;
