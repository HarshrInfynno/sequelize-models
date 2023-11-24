"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_department_vendor = void 0;
const sequelize_1 = require("sequelize");
class agency_department_vendor extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_department_vendor', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            agency_department_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            identifier: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            tableName: 'agency_department_vendors',
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
exports.agency_department_vendor = agency_department_vendor;
