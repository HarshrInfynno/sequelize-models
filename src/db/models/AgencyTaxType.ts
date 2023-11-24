import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface agency_tax_typeAttributes {
  id: number
  co_info_id?: number
  name?: string
  description?: string
  created_by?: number
  updated_by?: number
  created_at?: Date
  updated_at?: Date
}

export type agency_tax_typePk = 'id'
export type agency_tax_typeId = agency_tax_type[agency_tax_typePk]
export type agency_tax_typeOptionalAttributes =
  | 'id'
  | 'co_info_id'
  | 'name'
  | 'description'
  | 'created_by'
  | 'updated_by'
  | 'created_at'
  | 'updated_at'
export type agency_tax_typeCreationAttributes = Optional<
  agency_tax_typeAttributes,
  agency_tax_typeOptionalAttributes
>

export class agency_tax_type
  extends Model<agency_tax_typeAttributes, agency_tax_typeCreationAttributes>
  implements agency_tax_typeAttributes
{
  id!: number
  co_info_id?: number
  name?: string
  description?: string
  created_by?: number
  updated_by?: number
  created_at?: Date
  updated_at?: Date

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_tax_type {
    return sequelize.define(
      'agency_tax_type',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        co_info_id: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        created_by: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: true,
        },
        updated_by: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: true,
        },
      },
      {
        tableName: 'agency_tax_types',
        timestamps: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
        ],
      },
    ) as typeof agency_tax_type
  }
}
