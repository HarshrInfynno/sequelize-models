"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf_task_abatement = void 0;
const sequelize_1 = require("sequelize");
class wf_task_abatement extends sequelize_1.Model {
    static initModel(sequelize) {
        return sequelize.define('wf_task_abatement', {
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            wf_info_id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'wf_info',
                    key: 'id'
                }
            },
            co_info_id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            abatement_tax_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            abatement_penalty_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            abatement_interest_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            abatement_total_amount: {
                type: sequelize_1.DataTypes.DOUBLE(16, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            abatement_request_type: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            abatement_request_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            abatement_request_paid_pi: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            abatement_response_is_approved: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            abatement_response_reason: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            abatement_response_date: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
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
            tableName: 'wf_task_abatement',
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
                    name: "wf_task_abatement_wf_info_id_index",
                    using: "BTREE",
                    fields: [
                        { name: "wf_info_id" },
                    ]
                },
            ]
        });
    }
}
exports.wf_task_abatement = wf_task_abatement;
