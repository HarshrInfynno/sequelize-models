"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_contact_group_linking = void 0;
const sequelize_1 = require("sequelize");
class account_contact_group_linking extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_contact_group_linking', {
            account_contact_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'account_contact_info',
                    key: 'id'
                }
            },
            workflow_list_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'workflow_lists',
                    key: 'id'
                }
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'account_contact_group_linking',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "account_contact_info_id" },
                        { name: "workflow_list_id" },
                    ]
                },
                {
                    name: "account_contact_linking_workflow_list_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "workflow_list_id" },
                    ]
                },
                {
                    name: "account_contact_info_id_workflow_list_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "account_contact_info_id" },
                        { name: "workflow_list_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_contact_group_linking = account_contact_group_linking;
