import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_contact_group_linking, account_contact_group_linkingId } from './AccountContactGroupLinking';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface workflow_listAttributes {
  id: number;
  co_info_id?: number;
  tax_type_id?: number;
  type: string;
  name: string;
  description?: string;
  hide_from_list?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type workflow_listPk = "id";
export type workflow_listId = workflow_list[workflow_listPk];
export type workflow_listOptionalAttributes = "id" | "co_info_id" | "tax_type_id" | "description" | "hide_from_list" | "created_at" | "updated_at";
export type workflow_listCreationAttributes = Optional<workflow_listAttributes, workflow_listOptionalAttributes>;

export class workflow_list extends Model<workflow_listAttributes, workflow_listCreationAttributes> implements workflow_listAttributes {
  id!: number;
  co_info_id?: number;
  tax_type_id?: number;
  type!: string;
  name!: string;
  description?: string;
  hide_from_list?: string;
  created_at?: Date;
  updated_at?: Date;

  // workflow_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // workflow_list hasMany account_contact_group_linking via workflow_list_id
  account_contact_group_linkings!: account_contact_group_linking[];
  getAccount_contact_group_linkings!: Sequelize.HasManyGetAssociationsMixin<account_contact_group_linking>;
  setAccount_contact_group_linkings!: Sequelize.HasManySetAssociationsMixin<account_contact_group_linking, account_contact_group_linkingId>;
  addAccount_contact_group_linking!: Sequelize.HasManyAddAssociationMixin<account_contact_group_linking, account_contact_group_linkingId>;
  addAccount_contact_group_linkings!: Sequelize.HasManyAddAssociationsMixin<account_contact_group_linking, account_contact_group_linkingId>;
  createAccount_contact_group_linking!: Sequelize.HasManyCreateAssociationMixin<account_contact_group_linking>;
  removeAccount_contact_group_linking!: Sequelize.HasManyRemoveAssociationMixin<account_contact_group_linking, account_contact_group_linkingId>;
  removeAccount_contact_group_linkings!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_group_linking, account_contact_group_linkingId>;
  hasAccount_contact_group_linking!: Sequelize.HasManyHasAssociationMixin<account_contact_group_linking, account_contact_group_linkingId>;
  hasAccount_contact_group_linkings!: Sequelize.HasManyHasAssociationsMixin<account_contact_group_linking, account_contact_group_linkingId>;
  countAccount_contact_group_linkings!: Sequelize.HasManyCountAssociationsMixin;
  // workflow_list belongsToMany account_contact_info via workflow_list_id and account_contact_info_id
  account_contact_info_id_account_contact_infos!: account_contact_info[];
  getAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManyGetAssociationsMixin<account_contact_info>;
  setAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManySetAssociationsMixin<account_contact_info, account_contact_infoId>;
  addAccount_contact_info_id_account_contact_info!: Sequelize.BelongsToManyAddAssociationMixin<account_contact_info, account_contact_infoId>;
  addAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManyAddAssociationsMixin<account_contact_info, account_contact_infoId>;
  createAccount_contact_info_id_account_contact_info!: Sequelize.BelongsToManyCreateAssociationMixin<account_contact_info>;
  removeAccount_contact_info_id_account_contact_info!: Sequelize.BelongsToManyRemoveAssociationMixin<account_contact_info, account_contact_infoId>;
  removeAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManyRemoveAssociationsMixin<account_contact_info, account_contact_infoId>;
  hasAccount_contact_info_id_account_contact_info!: Sequelize.BelongsToManyHasAssociationMixin<account_contact_info, account_contact_infoId>;
  hasAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManyHasAssociationsMixin<account_contact_info, account_contact_infoId>;
  countAccount_contact_info_id_account_contact_infos!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof workflow_list {
    return sequelize.define('workflow_list', {
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
    tax_type_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hide_from_list: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'workflow_lists',
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
        name: "workflow_lists_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof workflow_list;
  }
}
