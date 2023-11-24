"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agency_form_keyword_type = void 0;
const sequelize_1 = require("sequelize");
class agency_form_keyword_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('agency_form_keyword_type', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            keyword_type: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: false
            },
            pre_notice_column: {
                type: sequelize_1.DataTypes.STRING(191),
                allowNull: true
            },
            is_required: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            tableName: 'agency_form_keyword_type',
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
exports.agency_form_keyword_type = agency_form_keyword_type;
