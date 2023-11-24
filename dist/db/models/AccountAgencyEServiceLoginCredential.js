"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_agency_e_service_login_credential = void 0;
const sequelize_1 = require("sequelize");
class account_agency_e_service_login_credential extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_agency_e_service_login_credential', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            agency_dept_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            agency_city_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            agency_local_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            parent: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            website: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            pin: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notes: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            expiration_date: {
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
            tableName: 'account_agency_e_service_login_credentials',
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
exports.account_agency_e_service_login_credential = account_agency_e_service_login_credential;
