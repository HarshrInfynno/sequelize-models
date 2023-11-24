"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account_agency_rate = void 0;
const sequelize_1 = require("sequelize");
class account_agency_rate extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('account_agency_rate', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: true
            },
            account_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            account_id: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            major_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_1: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_2: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            minor_rate_3: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            total_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            major_rate_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "Pending"
            },
            minor_rate_1_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "Pending"
            },
            minor_rate_2_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "Pending"
            },
            minor_rate_3_status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "Pending"
            },
            sdi_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            rate_change_reason: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            start_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            end_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            approved_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            rejected_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            verification_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            status: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "Pending"
            },
            is_override_rate: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            override_rate: {
                type: sequelize_1.DataTypes.DOUBLE(12, 6),
                allowNull: true
            },
            override_rate_notes_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            is_active: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            }
        }, {
            tableName: 'account_agency_rates',
            hasTrigger: true,
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
exports.account_agency_rate = account_agency_rate;
