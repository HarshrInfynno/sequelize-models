"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAgency = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.AccountAgency = config_1.connection.define('account_agency', {
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    parent: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
    },
    account_info_id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'account_info',
            key: 'id',
        },
    },
    agency_type: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'department',
    },
    agency_info_id: {
        type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'agency_info',
            key: 'id',
        },
    },
    agency_local: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'agency_local',
            key: 'id',
        },
    },
    agency_city: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'agency_city',
            key: 'id',
        },
    },
    ein: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    agency_deposit_frequency_list_id: {
        type: sequelize_1.DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'agency_deposit_frequency_list',
            key: 'id',
        },
    },
    deposit_method: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    deposit_made_to: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    account_number: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    withholding_id: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    taxpayer_id: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    unemployment_id: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    start_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    end_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    created_by: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'app_user_info',
            key: 'id',
        },
    },
    updated_by: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
            model: 'app_user_info',
            key: 'id',
        },
    },
    co_info_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
    },
    account_id: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    internal_id_1: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    internal_id_2: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    sales_use_id: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    use_id: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    country: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'updated_at',
    },
}, {
    tableName: 'account_agency',
    timestamps: true,
    indexes: [
        {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
        },
        {
            name: 'account_agency_agency_deposit_frequency_list_id_foreign',
            using: 'BTREE',
            fields: [{ name: 'agency_deposit_frequency_list_id' }],
        },
        {
            name: 'account_agency_created_by_foreign',
            using: 'BTREE',
            fields: [{ name: 'created_by' }],
        },
        {
            name: 'account_agency_updated_by_foreign',
            using: 'BTREE',
            fields: [{ name: 'updated_by' }],
        },
        {
            name: 'account_agency_agency_city',
            using: 'BTREE',
            fields: [{ name: 'agency_city' }],
        },
        {
            name: 'account_agency_agency_local',
            using: 'BTREE',
            fields: [{ name: 'agency_local' }],
        },
        {
            name: 'account_agency_account_info_id_foreign',
            using: 'BTREE',
            fields: [{ name: 'account_info_id' }],
        },
        {
            name: 'account_agency_agency_info_id_foreign',
            using: 'BTREE',
            fields: [{ name: 'agency_info_id' }],
        },
    ],
});
