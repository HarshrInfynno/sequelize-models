"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.import_log = void 0;
const sequelize_1 = require("sequelize");
class import_log extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('import_log', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            log_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            log: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            import_type: {
                type: sequelize_1.DataTypes.STRING(45),
                allowNull: true
            }
        }, {
            tableName: 'import_logs',
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
exports.import_log = import_log;
