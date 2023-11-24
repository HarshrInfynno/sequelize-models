import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface sys_csr_listAttributes {
  id: number;
  co_info_id?: number;
  name: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_csr_listPk = "id";
export type sys_csr_listId = sys_csr_list[sys_csr_listPk];
export type sys_csr_listOptionalAttributes = "id" | "co_info_id" | "email" | "created_at" | "updated_at";
export type sys_csr_listCreationAttributes = Optional<sys_csr_listAttributes, sys_csr_listOptionalAttributes>;

export class sys_csr_list extends Model<sys_csr_listAttributes, sys_csr_listCreationAttributes> implements sys_csr_listAttributes {
  id!: number;
  co_info_id?: number;
  name!: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;

  // sys_csr_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // sys_csr_list hasMany account_info via sys_csr_list_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_csr_list {
    return sequelize.define('sys_csr_list', {
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
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'sys_csr_list',
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
    ]
  }) as typeof sys_csr_list;
  }
}
