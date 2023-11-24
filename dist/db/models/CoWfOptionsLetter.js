"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_wf_options_letter = void 0;
const sequelize_1 = require("sequelize");
class co_wf_options_letter extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_wf_options_letter', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            sys_workflow_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            letter_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            created_by: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            tableName: 'co_wf_options_letters',
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
                    name: "id_UNIQUE",
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
exports.co_wf_options_letter = co_wf_options_letter;
