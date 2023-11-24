"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data_import_chunk = void 0;
const sequelize_1 = require("sequelize");
class data_import_chunk extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('data_import_chunk', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            data_import_logs_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'data_import_logs',
                    key: 'id'
                }
            },
            s3_url: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.ENUM('PENDING', 'PROCESSING', 'PROCESSED'),
                allowNull: true
            },
            options: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            result: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            errors: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            }
        }, {
            tableName: 'data_import_chunks',
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
                {
                    name: "data_import_chunks_data_import_logs_id",
                    using: "BTREE",
                    fields: [
                        { name: "data_import_logs_id" },
                    ]
                },
            ]
        });
    }
}
exports.data_import_chunk = data_import_chunk;
