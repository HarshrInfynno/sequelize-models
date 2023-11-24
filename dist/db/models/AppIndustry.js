"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_industry = void 0;
const sequelize_1 = require("sequelize");
class app_industry extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_industry', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: false
            }
        }, {
            tableName: 'app_industries',
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
exports.app_industry = app_industry;
