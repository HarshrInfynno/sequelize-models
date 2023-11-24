"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activity_log = void 0;
const sequelize_1 = require("sequelize");
class activity_log extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('activity_log', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            activity_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            activity_modal: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            activity_modal_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            activity_screen: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            activity_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            item: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            old: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            new: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ip: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'activity_logs',
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
exports.activity_log = activity_log;
