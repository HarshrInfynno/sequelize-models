import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface agency_filing_typeAttributes {
  id: number;
  co_info_id?: number;
  agency_tax_type_id?: number;
  name?: string;
  description?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_filing_typePk = "id";
export type agency_filing_typeId = agency_filing_type[agency_filing_typePk];
export type agency_filing_typeOptionalAttributes = "id" | "co_info_id" | "agency_tax_type_id" | "name" | "description" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type agency_filing_typeCreationAttributes = Optional<agency_filing_typeAttributes, agency_filing_typeOptionalAttributes>;

export class agency_filing_type extends Model<agency_filing_typeAttributes, agency_filing_typeCreationAttributes> implements agency_filing_typeAttributes {
  id!: number;
  co_info_id?: number;
  agency_tax_type_id?: number;
  name?: string;
  description?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof agency_filing_type {
    return sequelize.define('agency_filing_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(500),
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
    tableName: 'agency_filing_types',
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
  }) as typeof agency_filing_type;
  }
}
