"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_round_robin_assignment = void 0;
const sequelize_1 = require("sequelize");
class wf_round_robin_assignment extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_round_robin_assignment', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            rule_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'wf_round_robin_assignment',
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
exports.wf_round_robin_assignment = wf_round_robin_assignment;
