import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface sys_tax_service_level_listAttributes {
  id: number;
  co_info_id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_tax_service_level_listPk = "id";
export type sys_tax_service_level_listId = sys_tax_service_level_list[sys_tax_service_level_listPk];
export type sys_tax_service_level_listOptionalAttributes = "id" | "co_info_id" | "created_at" | "updated_at";
export type sys_tax_service_level_listCreationAttributes = Optional<sys_tax_service_level_listAttributes, sys_tax_service_level_listOptionalAttributes>;

export class sys_tax_service_level_list extends Model<sys_tax_service_level_listAttributes, sys_tax_service_level_listCreationAttributes> implements sys_tax_service_level_listAttributes {
  id!: number;
  co_info_id?: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;

  // sys_tax_service_level_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // sys_tax_service_level_list hasMany account_info via sys_tax_service_level_list_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_tax_service_level_list {
    return sequelize.define('sys_tax_service_level_list', {
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
    tableName: 'sys_tax_service_level_list',
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
        name: "sys_tax_service_level_list_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof sys_tax_service_level_list;
  }
}
