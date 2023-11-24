"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_guidance_agency_insight = void 0;
const sequelize_1 = require("sequelize");
class sys_guidance_agency_insight extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_guidance_agency_insight', {
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
            agency_insight_content: {
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
            tableName: 'sys_guidance_agency_insight',
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
exports.sys_guidance_agency_insight = sys_guidance_agency_insight;
