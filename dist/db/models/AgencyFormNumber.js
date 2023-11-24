"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_number = void 0;
const sequelize_1 = require("sequelize");
class agency_form_number extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_form_number', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            document_id: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            agency_countries_id: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_info',
                    key: 'id'
                }
            },
            agency_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            agency_dept_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            form_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
                unique: "agency_form_numbers_form_bumber_unique"
            },
            filling_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            notice_type: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'sys_workflow',
                    key: 'id'
                }
            },
            notes: {
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
            s3_path: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            s3_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            csv_files_locations: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            document_processed: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            agency_local_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            agency_city_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            file_text: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            date_conversion: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            last_four: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            form_configured: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0
            },
            tax_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            filing_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            old_filling_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'agency_form_numbers',
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
                    name: "agency_form_numbers_form_bumber_unique",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "form_number" },
                    ]
                },
                {
                    name: "agency_form_numbers_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_form_numbers_agency_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
                {
                    name: "agency_form_numbers_notice_type_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "notice_type" },
                    ]
                },
                {
                    name: "agency_form_numbers_form_number_index",
                    using: "BTREE",
                    fields: [
                        { name: "form_number" },
                    ]
                },
            ]
        });
    }
}
exports.agency_form_number = agency_form_number;
