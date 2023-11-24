"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mastertax_import_log = void 0;
const sequelize_1 = require("sequelize");
class mastertax_import_log extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('mastertax_import_log', {
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
            data_import_logs_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            resource_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            output_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            output_file: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'mastertax_import_logs',
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
exports.mastertax_import_log = mastertax_import_log;
