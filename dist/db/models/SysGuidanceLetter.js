"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_guidance_letter = void 0;
const sequelize_1 = require("sequelize");
class sys_guidance_letter extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_guidance_letter', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            sys_guidance_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                comment: "Reference : sys_guidance_info"
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : co_info"
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            recipient: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            used_for: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            letter_name: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            letter_id: {
                type: sequelize_1.DataTypes.BIGINT,
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
            tableName: 'sys_guidance_letters',
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
exports.sys_guidance_letter = sys_guidance_letter;
