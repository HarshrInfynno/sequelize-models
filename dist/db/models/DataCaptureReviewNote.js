"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data_capture_review_note = void 0;
const sequelize_1 = require("sequelize");
class data_capture_review_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('data_capture_review_note', {
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
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            tableName: 'data_capture_review_notes',
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
exports.data_capture_review_note = data_capture_review_note;
