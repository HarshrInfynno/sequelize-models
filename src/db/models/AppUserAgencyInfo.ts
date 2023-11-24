import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface app_user_agency_infoAttributes {
  id: number;
  app_user_info_id: number;
  co_info_id: number;
  agency_info_id: number;
  type?: string;
  username?: string;
  password?: string;
  expires_on?: Date;
  created_by: number;
  updated_by?: number;
  created_at: Date;
  updated_at: Date;
}

export type app_user_agency_infoPk = "id";
export type app_user_agency_infoId = app_user_agency_info[app_user_agency_infoPk];
export type app_user_agency_infoOptionalAttributes = "id" | "type" | "username" | "password" | "expires_on" | "updated_by" | "created_at" | "updated_at";
export type app_user_agency_infoCreationAttributes = Optional<app_user_agency_infoAttributes, app_user_agency_infoOptionalAttributes>;

export class app_user_agency_info extends Model<app_user_agency_infoAttributes, app_user_agency_infoCreationAttributes> implements app_user_agency_infoAttributes {
  id!: number;
  app_user_info_id!: number;
  co_info_id!: number;
  agency_info_id!: number;
  type?: string;
  username?: string;
  password?: string;
  expires_on?: Date;
  created_by!: number;
  updated_by?: number;
  created_at!: Date;
  updated_at!: Date;

  // app_user_agency_info belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // app_user_agency_info belongsTo app_user_info via app_user_info_id
  app_user_info!: app_user_info;
  getApp_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setApp_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createApp_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // app_user_agency_info belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // app_user_agency_info belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // app_user_agency_info belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_agency_info {
    return sequelize.define('app_user_agency_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expires_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'app_user_agency_info',
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
        name: "app_user_agency_info_app_user_info_foreign",
        using: "BTREE",
        fields: [
          { name: "app_user_info_id" },
        ]
      },
      {
        name: "app_user_agency_info_co_info_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "app_user_agency_info_agency_info_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "app_user_agency_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "app_user_agency_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof app_user_agency_info;
  }
}
