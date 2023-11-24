"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_alert = void 0;
const sequelize_1 = require("sequelize");
class wf_alert extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_alert', {
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            notice_manager: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            alert_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            tableName: 'wf_alerts',
            timestamps: true,
            indexes: [
                {
                    name: "unique_alert",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                        { name: "co_info_id" },
                        { name: "alert_type" },
                    ]
                },
            ]
        });
    }
}
exports.wf_alert = wf_alert;
