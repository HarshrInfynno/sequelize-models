import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface agency_rateAttributes {
  agency_info_id: number;
  major_rate_description?: string;
  major_rate_tax_code?: string;
  minor_rate_1_description?: string;
  minor_rate_1_tax_code?: string;
  minor_rate_2_description?: string;
  minor_rate_2_tax_code?: string;
  minor_rate_3_description?: string;
  minor_rate_3_tax_code?: string;
  sdi_rate_description?: string;
  sdi_rate_tax_code?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_ratePk = "agency_info_id";
export type agency_rateId = agency_rate[agency_ratePk];
export type agency_rateOptionalAttributes = "major_rate_description" | "major_rate_tax_code" | "minor_rate_1_description" | "minor_rate_1_tax_code" | "minor_rate_2_description" | "minor_rate_2_tax_code" | "minor_rate_3_description" | "minor_rate_3_tax_code" | "sdi_rate_description" | "sdi_rate_tax_code" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type agency_rateCreationAttributes = Optional<agency_rateAttributes, agency_rateOptionalAttributes>;

export class agency_rate extends Model<agency_rateAttributes, agency_rateCreationAttributes> implements agency_rateAttributes {
  agency_info_id!: number;
  major_rate_description?: string;
  major_rate_tax_code?: string;
  minor_rate_1_description?: string;
  minor_rate_1_tax_code?: string;
  minor_rate_2_description?: string;
  minor_rate_2_tax_code?: string;
  minor_rate_3_description?: string;
  minor_rate_3_tax_code?: string;
  sdi_rate_description?: string;
  sdi_rate_tax_code?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof agency_rate {
    return sequelize.define('agency_rate', {
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    major_rate_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    major_rate_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_1_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_1_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_2_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_2_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_3_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_3_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sdi_rate_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sdi_rate_tax_code: {
      type: DataTypes.STRING(100),
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
    tableName: 'agency_rates',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  }) as typeof agency_rate;
  }
}
