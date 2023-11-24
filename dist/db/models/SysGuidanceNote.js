"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_guidance_note = void 0;
const sequelize_1 = require("sequelize");
class sys_guidance_note extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_guidance_note', {
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
            sys_guidance_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                comment: "Reference Table : sys_guidance_info"
            },
            note: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'sys_guidance_notes',
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
exports.sys_guidance_note = sys_guidance_note;
