"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMPId = void 0;
const sequelize_1 = require("sequelize");
class CMPId extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('CMPId', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true
            }
        }, {
            tableName: 'CMPId',
            timestamps: false
        });
    }
}
exports.CMPId = CMPId;
