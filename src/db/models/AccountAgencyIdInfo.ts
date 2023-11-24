import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface account_agency_id_infoAttributes {
  account_agency_id: number;
  agency_id_info_id: number;
  co_info_id: number;
  agency_id_types_name?: string;
  agency_id_types_slug: string;
  value: string;
  agency_deposit_frequency_list_id?: number;
  deposit_method?: string;
  start_date?: Date;
  end_date?: Date;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_agency_id_infoPk = "account_agency_id" | "agency_id_info_id";
export type account_agency_id_infoId = account_agency_id_info[account_agency_id_infoPk];
export type account_agency_id_infoOptionalAttributes = "agency_id_types_name" | "agency_deposit_frequency_list_id" | "deposit_method" | "start_date" | "end_date" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type account_agency_id_infoCreationAttributes = Optional<account_agency_id_infoAttributes, account_agency_id_infoOptionalAttributes>;

export class account_agency_id_info extends Model<account_agency_id_infoAttributes, account_agency_id_infoCreationAttributes> implements account_agency_id_infoAttributes {
  account_agency_id!: number;
  agency_id_info_id!: number;
  co_info_id!: number;
  agency_id_types_name?: string;
  agency_id_types_slug!: string;
  value!: string;
  agency_deposit_frequency_list_id?: number;
  deposit_method?: string;
  start_date?: Date;
  end_date?: Date;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof account_agency_id_info {
    return sequelize.define('account_agency_id_info', {
    account_agency_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_id_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    agency_id_types_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_id_types_slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    agency_deposit_frequency_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    deposit_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
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
    tableName: 'account_agency_id_info',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_agency_id" },
          { name: "agency_id_info_id" },
        ]
      },
    ]
  }) as typeof account_agency_id_info;
  }
}
