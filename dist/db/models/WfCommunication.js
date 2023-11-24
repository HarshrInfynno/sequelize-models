"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_communication = void 0;
const sequelize_1 = require("sequelize");
class wf_communication extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_communication', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            workflow_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            resource_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
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
            tableName: 'wf_communications',
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
exports.wf_communication = wf_communication;
