import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_user_agency_idAttributes {
  id: number;
  country_id: number;
  app_user_info_id: number;
  agency_info_id: number;
  username?: string;
  password?: string;
  expire_on?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type app_user_agency_idPk = "id";
export type app_user_agency_idId = app_user_agency_id[app_user_agency_idPk];
export type app_user_agency_idOptionalAttributes = "id" | "username" | "password" | "expire_on" | "updated_by" | "created_at" | "updated_at";
export type app_user_agency_idCreationAttributes = Optional<app_user_agency_idAttributes, app_user_agency_idOptionalAttributes>;

export class app_user_agency_id extends Model<app_user_agency_idAttributes, app_user_agency_idCreationAttributes> implements app_user_agency_idAttributes {
  id!: number;
  country_id!: number;
  app_user_info_id!: number;
  agency_info_id!: number;
  username?: string;
  password?: string;
  expire_on?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_agency_id {
    return sequelize.define('app_user_agency_id', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    country_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expire_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'app_user_agency_ids',
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
  }) as typeof app_user_agency_id;
  }
}
