import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface app_user_viewAttributes {
  id: number;
  key?: string;
  co_info_id?: number;
  user_id?: number;
  workflow_type: string;
  column_order?: object;
  hidden_columns?: object;
  filters?: object;
  page_size?: number;
  search?: string;
  sort?: object;
  created_at?: Date;
  updated_at?: Date;
  search_field?: string;
}

export type app_user_viewPk = "id";
export type app_user_viewId = app_user_view[app_user_viewPk];
export type app_user_viewOptionalAttributes = "id" | "key" | "co_info_id" | "user_id" | "column_order" | "hidden_columns" | "filters" | "page_size" | "search" | "sort" | "created_at" | "updated_at" | "search_field";
export type app_user_viewCreationAttributes = Optional<app_user_viewAttributes, app_user_viewOptionalAttributes>;

export class app_user_view extends Model<app_user_viewAttributes, app_user_viewCreationAttributes> implements app_user_viewAttributes {
  id!: number;
  key?: string;
  co_info_id?: number;
  user_id?: number;
  workflow_type!: string;
  column_order?: object;
  hidden_columns?: object;
  filters?: object;
  page_size?: number;
  search?: string;
  sort?: object;
  created_at?: Date;
  updated_at?: Date;
  search_field?: string;

  // app_user_view belongsTo app_user_info via user_id
  user!: app_user_info;
  getUser!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_view {
    return sequelize.define('app_user_view', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    workflow_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    column_order: {
      type: DataTypes.JSON,
      allowNull: true
    },
    hidden_columns: {
      type: DataTypes.JSON,
      allowNull: true
    },
    filters: {
      type: DataTypes.JSON,
      allowNull: true
    },
    page_size: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    search: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort: {
      type: DataTypes.JSON,
      allowNull: true
    },
    search_field: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'app_user_views',
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
        name: "app_user_views_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof app_user_view;
  }
}
