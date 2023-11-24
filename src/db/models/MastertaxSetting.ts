import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';

export interface mastertax_settingAttributes {
  id: number;
  co_info_id?: number;
  client_id: string;
  client_secret: string;
  certificate?: string;
  key?: string;
  access_token?: string;
  access_token_expiry?: Date;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type mastertax_settingPk = "id";
export type mastertax_settingId = mastertax_setting[mastertax_settingPk];
export type mastertax_settingOptionalAttributes = "id" | "co_info_id" | "certificate" | "key" | "access_token" | "access_token_expiry" | "last_synced_at" | "created_at" | "updated_at";
export type mastertax_settingCreationAttributes = Optional<mastertax_settingAttributes, mastertax_settingOptionalAttributes>;

export class mastertax_setting extends Model<mastertax_settingAttributes, mastertax_settingCreationAttributes> implements mastertax_settingAttributes {
  id!: number;
  co_info_id?: number;
  client_id!: string;
  client_secret!: string;
  certificate?: string;
  key?: string;
  access_token?: string;
  access_token_expiry?: Date;
  last_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;

  // mastertax_setting belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mastertax_setting {
    return sequelize.define('mastertax_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    certificate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    access_token_expiry: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mastertax_settings',
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
      {
        name: "mastertax_Settings_co_info_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof mastertax_setting;
  }
}
