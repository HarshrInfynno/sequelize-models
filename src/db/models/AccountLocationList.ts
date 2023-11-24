import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface account_location_listAttributes {
  id: number;
  co_info_id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type account_location_listPk = "id";
export type account_location_listId = account_location_list[account_location_listPk];
export type account_location_listOptionalAttributes = "id" | "co_info_id" | "created_at" | "updated_at";
export type account_location_listCreationAttributes = Optional<account_location_listAttributes, account_location_listOptionalAttributes>;

export class account_location_list extends Model<account_location_listAttributes, account_location_listCreationAttributes> implements account_location_listAttributes {
  id!: number;
  co_info_id?: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;

  // account_location_list hasMany account_info via account_location_list_id
  account_infos!: account_info[];
  getAccount_infos!: Sequelize.HasManyGetAssociationsMixin<account_info>;
  setAccount_infos!: Sequelize.HasManySetAssociationsMixin<account_info, account_infoId>;
  addAccount_info!: Sequelize.HasManyAddAssociationMixin<account_info, account_infoId>;
  addAccount_infos!: Sequelize.HasManyAddAssociationsMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.HasManyCreateAssociationMixin<account_info>;
  removeAccount_info!: Sequelize.HasManyRemoveAssociationMixin<account_info, account_infoId>;
  removeAccount_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_info, account_infoId>;
  hasAccount_info!: Sequelize.HasManyHasAssociationMixin<account_info, account_infoId>;
  hasAccount_infos!: Sequelize.HasManyHasAssociationsMixin<account_info, account_infoId>;
  countAccount_infos!: Sequelize.HasManyCountAssociationsMixin;
  // account_location_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_location_list {
    return sequelize.define('account_location_list', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
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
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'account_location_list',
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
        name: "unique_name_for_co_info_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
          { name: "name" },
        ]
      },
      {
        name: "account_location_list_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof account_location_list;
  }
}
