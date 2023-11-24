"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data_import_log = void 0;
const sequelize_1 = require("sequelize");
class data_import_log extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('data_import_log', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            s3_urls: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            meta: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true,
                defaultValue: "PENDING"
            },
            account_errors: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            agency_errors: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            contact_errors: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            errors: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            result: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            import_type: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            tableName: 'data_import_logs',
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
exports.data_import_log = data_import_log;
