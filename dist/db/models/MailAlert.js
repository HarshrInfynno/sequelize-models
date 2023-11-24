"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail_alert = void 0;
const sequelize_1 = require("sequelize");
class mail_alert extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('mail_alert', {
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
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            wf_task_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            alert_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            alert_time: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            tableName: 'mail_alert',
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
                    name: "ALERT_TIME_INDEX",
                    using: "BTREE",
                    fields: [
                        { name: "alert_time" },
                    ]
                },
            ]
        });
    }
}
exports.mail_alert = mail_alert;
