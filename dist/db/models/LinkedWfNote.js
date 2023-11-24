"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linked_wf_note = void 0;
const sequelize_1 = require("sequelize");
class linked_wf_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('linked_wf_note', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            wf_display_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            wf_notes_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            tableName: 'linked_wf_notes',
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
exports.linked_wf_note = linked_wf_note;
