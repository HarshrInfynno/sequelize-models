import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_agency_tax_typeAttributes {
  id: number;
  co_info_id?: number;
  agency_tax_type_id?: number;
  created_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type co_agency_tax_typePk = "id";
export type co_agency_tax_typeId = co_agency_tax_type[co_agency_tax_typePk];
export type co_agency_tax_typeOptionalAttributes = "id" | "co_info_id" | "agency_tax_type_id" | "created_by" | "created_at" | "updated_at";
export type co_agency_tax_typeCreationAttributes = Optional<co_agency_tax_typeAttributes, co_agency_tax_typeOptionalAttributes>;

export class co_agency_tax_type extends Model<co_agency_tax_typeAttributes, co_agency_tax_typeCreationAttributes> implements co_agency_tax_typeAttributes {
  id!: number;
  co_info_id?: number;
  agency_tax_type_id?: number;
  created_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_agency_tax_type {
    return sequelize.define('co_agency_tax_type', {
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
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'co_agency_tax_type',
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
  }) as typeof co_agency_tax_type;
  }
}
