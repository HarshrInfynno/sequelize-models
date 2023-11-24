import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { app_usage_type, app_usage_typeId } from './AppUsageType';
import type { co_info, co_infoId } from './CoInfo';

export interface account_usage_typeAttributes {
  co_id: number;
  app_usage_type_id: number;
}

export type account_usage_typeCreationAttributes = account_usage_typeAttributes;

export class account_usage_type extends Model<account_usage_typeAttributes, account_usage_typeCreationAttributes> implements account_usage_typeAttributes {
  co_id!: number;
  app_usage_type_id!: number;

  // account_usage_type belongsTo app_usage_type via app_usage_type_id
  app_usage_type!: app_usage_type;
  getApp_usage_type!: Sequelize.BelongsToGetAssociationMixin<app_usage_type>;
  setApp_usage_type!: Sequelize.BelongsToSetAssociationMixin<app_usage_type, app_usage_typeId>;
  createApp_usage_type!: Sequelize.BelongsToCreateAssociationMixin<app_usage_type>;
  // account_usage_type belongsTo co_info via co_id
  co!: co_info;
  getCo!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_usage_type {
    return sequelize.define('account_usage_type', {
    co_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    app_usage_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_usage_types',
        key: 'id'
      }
    }
  }, {
    tableName: 'account_usage_types',
    timestamps: false,
    indexes: [
      {
        name: "account_usage_types_co_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_id" },
        ]
      },
      {
        name: "account_usage_types_app_usage_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "app_usage_type_id" },
        ]
      },
    ]
  }) as typeof account_usage_type;
  }
}
