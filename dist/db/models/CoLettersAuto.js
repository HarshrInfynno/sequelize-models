"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_letters_auto = void 0;
const sequelize_1 = require("sequelize");
class co_letters_auto extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_letters_auto', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            sys_workflow_type_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            sys_workflow_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            letter_option: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            },
            letter_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'co_letters_auto',
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
exports.co_letters_auto = co_letters_auto;
