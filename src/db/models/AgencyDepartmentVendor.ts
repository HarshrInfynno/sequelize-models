import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface agency_department_vendorAttributes {
  id: number;
  co_info_id?: number;
  agency_department_id: number;
  identifier: string;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_department_vendorPk = "id";
export type agency_department_vendorId = agency_department_vendor[agency_department_vendorPk];
export type agency_department_vendorOptionalAttributes = "id" | "co_info_id" | "created_at" | "updated_at";
export type agency_department_vendorCreationAttributes = Optional<agency_department_vendorAttributes, agency_department_vendorOptionalAttributes>;

export class agency_department_vendor extends Model<agency_department_vendorAttributes, agency_department_vendorCreationAttributes> implements agency_department_vendorAttributes {
  id!: number;
  co_info_id?: number;
  agency_department_id!: number;
  identifier!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof agency_department_vendor {
    return sequelize.define('agency_department_vendor', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'agency_department_vendors',
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
  }) as typeof agency_department_vendor;
  }
}
