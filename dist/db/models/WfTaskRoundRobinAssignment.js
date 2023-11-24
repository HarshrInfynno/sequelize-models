"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_round_robin_assignment = void 0;
const sequelize_1 = require("sequelize");
class wf_task_round_robin_assignment extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_round_robin_assignment', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            index: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true,
                defaultValue: "system"
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            group_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            tableName: 'wf_task_round_robin_assignment',
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
exports.wf_task_round_robin_assignment = wf_task_round_robin_assignment;
