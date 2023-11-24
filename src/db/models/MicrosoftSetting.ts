import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface microsoft_settingAttributes {
  id: number;
  co_info_id: number;
  provider?: string;
  display_name?: string;
  app_user_info_id?: number;
  access_token?: string;
  refresh_token?: string;
  expires_on?: Date;
  email?: string;
  user?: object;
  connection_level?: string;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type microsoft_settingPk = "id";
export type microsoft_settingId = microsoft_setting[microsoft_settingPk];
export type microsoft_settingOptionalAttributes = "id" | "provider" | "display_name" | "app_user_info_id" | "access_token" | "refresh_token" | "expires_on" | "email" | "user" | "connection_level" | "last_synced_at" | "created_at" | "updated_at";
export type microsoft_settingCreationAttributes = Optional<microsoft_settingAttributes, microsoft_settingOptionalAttributes>;

export class microsoft_setting extends Model<microsoft_settingAttributes, microsoft_settingCreationAttributes> implements microsoft_settingAttributes {
  id!: number;
  co_info_id!: number;
  provider?: string;
  display_name?: string;
  app_user_info_id?: number;
  access_token?: string;
  refresh_token?: string;
  expires_on?: Date;
  email?: string;
  user?: object;
  connection_level?: string;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof microsoft_setting {
    return sequelize.define('microsoft_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_user_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    access_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expires_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user: {
      type: DataTypes.JSON,
      allowNull: true
    },
    connection_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'microsoft_settings',
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
  }) as typeof microsoft_setting;
  }
}
