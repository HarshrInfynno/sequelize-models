import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface account_agency_e_service_login_credentialAttributes {
  id: number;
  co_info_id: number;
  account_info_id: number;
  country?: number;
  agency_info_id: number;
  agency_type: string;
  agency_dept_id?: number;
  agency_city_id?: number;
  agency_local_id?: number;
  parent?: number;
  website?: string;
  username?: string;
  password?: string;
  pin?: string;
  notes?: string;
  expiration_date?: Date;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_agency_e_service_login_credentialPk = "id";
export type account_agency_e_service_login_credentialId = account_agency_e_service_login_credential[account_agency_e_service_login_credentialPk];
export type account_agency_e_service_login_credentialOptionalAttributes = "id" | "country" | "agency_dept_id" | "agency_city_id" | "agency_local_id" | "parent" | "website" | "username" | "password" | "pin" | "notes" | "expiration_date" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type account_agency_e_service_login_credentialCreationAttributes = Optional<account_agency_e_service_login_credentialAttributes, account_agency_e_service_login_credentialOptionalAttributes>;

export class account_agency_e_service_login_credential extends Model<account_agency_e_service_login_credentialAttributes, account_agency_e_service_login_credentialCreationAttributes> implements account_agency_e_service_login_credentialAttributes {
  id!: number;
  co_info_id!: number;
  account_info_id!: number;
  country?: number;
  agency_info_id!: number;
  agency_type!: string;
  agency_dept_id?: number;
  agency_city_id?: number;
  agency_local_id?: number;
  parent?: number;
  website?: string;
  username?: string;
  password?: string;
  pin?: string;
  notes?: string;
  expiration_date?: Date;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof account_agency_e_service_login_credential {
    return sequelize.define('account_agency_e_service_login_credential', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    agency_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    agency_dept_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_agency_e_service_login_credentials',
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
  }) as typeof account_agency_e_service_login_credential;
  }
}
