import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_user_propertyAttributes {
  id: number;
  user_id: number;
  key: string;
  value?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type app_user_propertyPk = "id";
export type app_user_propertyId = app_user_property[app_user_propertyPk];
export type app_user_propertyOptionalAttributes = "id" | "value" | "created_at" | "updated_at";
export type app_user_propertyCreationAttributes = Optional<app_user_propertyAttributes, app_user_propertyOptionalAttributes>;

export class app_user_property extends Model<app_user_propertyAttributes, app_user_propertyCreationAttributes> implements app_user_propertyAttributes {
  id!: number;
  user_id!: number;
  key!: string;
  value?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_property {
    return sequelize.define('app_user_property', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'app_user_properties',
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
  }) as typeof app_user_property;
  }
}
