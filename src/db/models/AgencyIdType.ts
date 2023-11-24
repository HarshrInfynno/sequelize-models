import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface agency_id_typeAttributes {
  id: number;
  name: string;
  tax_type_id?: number;
  description?: string;
  slug: string;
  agency_info_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_id_typePk = "id";
export type agency_id_typeId = agency_id_type[agency_id_typePk];
export type agency_id_typeOptionalAttributes = "id" | "tax_type_id" | "description" | "agency_info_id" | "created_at" | "updated_at";
export type agency_id_typeCreationAttributes = Optional<agency_id_typeAttributes, agency_id_typeOptionalAttributes>;

export class agency_id_type extends Model<agency_id_typeAttributes, agency_id_typeCreationAttributes> implements agency_id_typeAttributes {
  id!: number;
  name!: string;
  tax_type_id?: number;
  description?: string;
  slug!: string;
  agency_info_id?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof agency_id_type {
    return sequelize.define('agency_id_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'agency_id_types',
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
  }) as typeof agency_id_type;
  }
}
