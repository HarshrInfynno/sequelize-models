"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_guidance_info = void 0;
const sequelize_1 = require("sequelize");
class sys_guidance_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_guidance_info', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : co_info"
            },
            country_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : agency_countries"
            },
            agency_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : agency_info"
            },
            agency_department_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : agency_department"
            },
            agency_local_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : agency_local"
            },
            agency_city_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : agency_city"
            },
            sys_workflow_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                comment: "Reference : sys_workflow"
            },
            agency_form_number: {
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
            tableName: 'sys_guidance_info',
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
exports.sys_guidance_info = sys_guidance_info;
