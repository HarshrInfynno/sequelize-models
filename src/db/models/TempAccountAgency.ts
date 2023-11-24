import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface temp_account_agencyAttributes {
  id: number;
  co_info_id: number;
  account_info: string;
  description: string;
  agency_info: string;
  ein?: string;
  deposit_frequency?: string;
  deposit_method?: string;
  account_number?: string;
  withholding_id?: string;
  taxpayer_id?: string;
  unemployment_id?: string;
  start_date?: string;
  end_date?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  agency_type?: string;
  agency?: string;
}

export type temp_account_agencyPk = "id";
export type temp_account_agencyId = temp_account_agency[temp_account_agencyPk];
export type temp_account_agencyOptionalAttributes = "id" | "ein" | "deposit_frequency" | "deposit_method" | "account_number" | "withholding_id" | "taxpayer_id" | "unemployment_id" | "start_date" | "end_date" | "internal_id_1" | "internal_id_2" | "agency_type" | "agency";
export type temp_account_agencyCreationAttributes = Optional<temp_account_agencyAttributes, temp_account_agencyOptionalAttributes>;

export class temp_account_agency extends Model<temp_account_agencyAttributes, temp_account_agencyCreationAttributes> implements temp_account_agencyAttributes {
  id!: number;
  co_info_id!: number;
  account_info!: string;
  description!: string;
  agency_info!: string;
  ein?: string;
  deposit_frequency?: string;
  deposit_method?: string;
  account_number?: string;
  withholding_id?: string;
  taxpayer_id?: string;
  unemployment_id?: string;
  start_date?: string;
  end_date?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  agency_type?: string;
  agency?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof temp_account_agency {
    return sequelize.define('temp_account_agency', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agency_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ein: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposit_frequency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposit_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    withholding_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxpayer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unemployment_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'temp_account_agency',
    timestamps: false,
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
  }) as typeof temp_account_agency;
  }
}
