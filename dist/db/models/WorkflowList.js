"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflow_list = void 0;
const sequelize_1 = require("sequelize");
class workflow_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('workflow_list', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            hide_from_list: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            tableName: 'workflow_lists',
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
                    name: "workflow_lists_co_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.workflow_list = workflow_list;
