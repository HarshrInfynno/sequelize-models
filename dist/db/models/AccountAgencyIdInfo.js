"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_agency_id_info = void 0;
const sequelize_1 = require("sequelize");
class account_agency_id_info extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_agency_id_info', {
            account_agency_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            agency_id_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            agency_id_types_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_id_types_slug: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            value: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: false
            },
            agency_deposit_frequency_list_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            deposit_method: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            end_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'account_agency_id_info',
            hasTrigger: true,
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "account_agency_id" },
                        { name: "agency_id_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.account_agency_id_info = account_agency_id_info;
