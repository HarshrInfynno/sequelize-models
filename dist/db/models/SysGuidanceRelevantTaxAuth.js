"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_guidance_relevant_tax_auth = void 0;
const sequelize_1 = require("sequelize");
class sys_guidance_relevant_tax_auth extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_guidance_relevant_tax_auth', {
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
            instructions: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            link_to_agency_website: {
                type: sequelize_1.DataTypes.STRING(255),
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
            tableName: 'sys_guidance_relevant_tax_auth',
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
exports.sys_guidance_relevant_tax_auth = sys_guidance_relevant_tax_auth;
