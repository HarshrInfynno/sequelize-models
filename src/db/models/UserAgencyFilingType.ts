import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface user_agency_filing_typeAttributes {
  id: number;
  app_user_info_id: number;
  co_info_id: number;
  agency_filing_type_id: number;
  agency_tax_type_id?: number;
  created_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type user_agency_filing_typePk = "id";
export type user_agency_filing_typeId = user_agency_filing_type[user_agency_filing_typePk];
export type user_agency_filing_typeOptionalAttributes = "id" | "agency_tax_type_id" | "created_by" | "created_at" | "updated_at";
export type user_agency_filing_typeCreationAttributes = Optional<user_agency_filing_typeAttributes, user_agency_filing_typeOptionalAttributes>;

export class user_agency_filing_type extends Model<user_agency_filing_typeAttributes, user_agency_filing_typeCreationAttributes> implements user_agency_filing_typeAttributes {
  id!: number;
  app_user_info_id!: number;
  co_info_id!: number;
  agency_filing_type_id!: number;
  agency_tax_type_id?: number;
  created_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof user_agency_filing_type {
    return sequelize.define('user_agency_filing_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    agency_filing_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    tableName: 'user_agency_filing_type',
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
  }) as typeof user_agency_filing_type;
  }
}
