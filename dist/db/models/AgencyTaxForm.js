"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_tax_form = void 0;
const sequelize_1 = require("sequelize");
class agency_tax_form extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_tax_form', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'co_info',
                    key: 'id'
                }
            },
            agency_info_id: {
                type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'agency_info',
                    key: 'id'
                }
            },
            tax_form: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            filling_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            rev_number: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rev_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            year: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notes: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            document_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            file: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            required_to_file: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            required_to_contact: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            use_fed_form: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            used_for: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            expires_after: {
                type: sequelize_1.DataTypes.TINYINT,
                allowNull: true,
                comment: "In Years"
            },
            created_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            updated_by: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            form_fields: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            sign_settings: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            submission_site: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            form_site: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            submission_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tax_type_id: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            old_tax_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            address: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            country: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            state: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            city: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            zip: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            phone: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fax: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            notary_req: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            tableName: 'agency_tax_forms',
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
                    name: "agency_tax_forms_co_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "co_info_id" },
                    ]
                },
                {
                    name: "agency_tax_forms_agency_info_id_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "agency_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.agency_tax_form = agency_tax_form;
