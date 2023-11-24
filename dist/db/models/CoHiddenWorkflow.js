"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_hidden_workflow = void 0;
const sequelize_1 = require("sequelize");
class co_hidden_workflow extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_hidden_workflow', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            sys_workflow_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            redirect_sys_workflow_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'co_hidden_workflows',
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
exports.co_hidden_workflow = co_hidden_workflow;
