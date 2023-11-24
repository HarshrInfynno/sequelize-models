"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_usage_type = void 0;
const sequelize_1 = require("sequelize");
class account_usage_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_usage_type', {
            co_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            app_usage_type_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'app_usage_types',
                    key: 'id'
                }
            }
        }, {
            tableName: 'account_usage_types',
            timestamps: false,
            indexes: [
                {
                    name: "account_usage_types_co_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_id" },
                    ]
                },
                {
                    name: "account_usage_types_app_usage_type_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "app_usage_type_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_usage_type = account_usage_type;
