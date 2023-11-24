import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface yardi_settingAttributes {
  id: number;
  host?: string;
  username?: string;
  private_key?: string;
  file_path?: string;
  co_info_id?: number;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type yardi_settingPk = "id";
export type yardi_settingId = yardi_setting[yardi_settingPk];
export type yardi_settingOptionalAttributes = "id" | "host" | "username" | "private_key" | "file_path" | "co_info_id" | "last_synced_at" | "created_at" | "updated_at";
export type yardi_settingCreationAttributes = Optional<yardi_settingAttributes, yardi_settingOptionalAttributes>;

export class yardi_setting extends Model<yardi_settingAttributes, yardi_settingCreationAttributes> implements yardi_settingAttributes {
  id!: number;
  host?: string;
  username?: string;
  private_key?: string;
  file_path?: string;
  co_info_id?: number;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof yardi_setting {
    return sequelize.define('yardi_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    private_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    last_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'yardi_settings',
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
  }) as typeof yardi_setting;
  }
}
