"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_bulk_notice = void 0;
const sequelize_1 = require("sequelize");
class wf_bulk_notice extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_bulk_notice', {
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'account_info',
                    key: 'id'
                }
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'wf_bulk_notice',
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "account_info_id" },
                        { name: "wf_info_id" },
                    ]
                },
                {
                    name: "wf_info_account_info_uniqye",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                        { name: "account_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_bulk_notice = wf_bulk_notice;
