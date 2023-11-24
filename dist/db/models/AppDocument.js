"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_document = void 0;
const sequelize_1 = require("sequelize");
class app_document extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('app_document', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            workflow_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            workflow_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            filename: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            extension: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            mime_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            size: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            path: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            hyperlink: {
                type: sequelize_1.DataTypes.STRING(2000),
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            ants_attachment_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            tableName: 'app_documents',
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
exports.app_document = app_document;
