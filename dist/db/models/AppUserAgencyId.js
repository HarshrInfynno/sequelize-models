"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_user_agency_id = void 0;
const sequelize_1 = require("sequelize");
class app_user_agency_id extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_user_agency_id', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            country_id: {
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false
            },
            app_user_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false
            },
            username: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            expire_on: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
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
            tableName: 'app_user_agency_ids',
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
exports.app_user_agency_id = app_user_agency_id;
