"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co_email = void 0;
const sequelize_1 = require("sequelize");
class co_email extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('co_email', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            workflow_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            letter_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            letter_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            sent_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            sent_to: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            email_by: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_to: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_cc: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_subject: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email_body: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            email_attachments: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            entered_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            internet_message_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            conversation_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            entry_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'co_emails',
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
exports.co_email = co_email;
