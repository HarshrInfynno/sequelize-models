"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ants_date = void 0;
const sequelize_1 = require("sequelize");
class ants_date extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('ants_date', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            notice_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            donedatetime: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            tableName: 'ants_date',
            timestamps: false,
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
exports.ants_date = ants_date;
