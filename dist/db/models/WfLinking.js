"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_linking = void 0;
const sequelize_1 = require("sequelize");
class wf_linking extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_linking', {
            parent_wf_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            parent_wf_display_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            parent_workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            child_wf_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            child_wf_display_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            child_workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'wf_linking',
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "parent_wf_id" },
                        { name: "child_wf_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_linking = wf_linking;
