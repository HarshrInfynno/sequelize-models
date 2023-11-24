"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_reg_contact = void 0;
const sequelize_1 = require("sequelize");
class sys_reg_contact extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('sys_reg_contact', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            owner_percent: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            email: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false
            },
            address: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ssn: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            ssn_last_four: {
                type: sequelize_1.DataTypes.STRING(4),
                allowNull: true
            },
            dob: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            agent_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            end_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
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
            tableName: 'sys_reg_contact',
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
exports.sys_reg_contact = sys_reg_contact;
