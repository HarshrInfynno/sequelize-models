import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_contact_group_linking, account_contact_group_linkingId } from './AccountContactGroupLinking';
import type { account_contact_note, account_contact_noteId } from './AccountContactNote';
import type { account_info, account_infoId } from './AccountInfo';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';
import type { workflow_list, workflow_listId } from './WorkflowList';

export interface account_contact_infoAttributes {
  id: number;
  account_info_id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  title?: string;
  primary_phone?: string;
  alert?: string;
  secondary_phone?: string;
  fax_number?: string;
  is_primary_contact?: number;
  profile_picture_link?: string;
  location?: string;
  address_1?: string;
  address_2?: string;
  country?: number;
  city?: string;
  state?: number;
  zip?: string;
  end_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;
  account_id?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  auto_inactivate?: number;
  app_user_info_id?: number;
  poa_signer?: number;
}

export type account_contact_infoPk = "id";
export type account_contact_infoId = account_contact_info[account_contact_infoPk];
export type account_contact_infoOptionalAttributes = "id" | "first_name" | "last_name" | "email" | "contact_type" | "title" | "primary_phone" | "alert" | "secondary_phone" | "fax_number" | "is_primary_contact" | "profile_picture_link" | "location" | "address_1" | "address_2" | "country" | "city" | "state" | "zip" | "end_date" | "created_by" | "updated_by" | "created_at" | "updated_at" | "co_info_id" | "account_id" | "internal_id_1" | "internal_id_2" | "auto_inactivate" | "app_user_info_id" | "poa_signer";
export type account_contact_infoCreationAttributes = Optional<account_contact_infoAttributes, account_contact_infoOptionalAttributes>;

export class account_contact_info extends Model<account_contact_infoAttributes, account_contact_infoCreationAttributes> implements account_contact_infoAttributes {
  id!: number;
  account_info_id!: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_type?: string;
  title?: string;
  primary_phone?: string;
  alert?: string;
  secondary_phone?: string;
  fax_number?: string;
  is_primary_contact?: number;
  profile_picture_link?: string;
  location?: string;
  address_1?: string;
  address_2?: string;
  country?: number;
  city?: string;
  state?: number;
  zip?: string;
  end_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;
  account_id?: string;
  internal_id_1?: string;
  internal_id_2?: string;
  auto_inactivate?: number;
  app_user_info_id?: number;
  poa_signer?: number;

  // account_contact_info hasMany account_contact_group_linking via account_contact_info_id
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
  // account_contact_info hasMany account_contact_note via account_contact_info_id
  account_contact_notes!: account_contact_note[];
  getAccount_contact_notes!: Sequelize.HasManyGetAssociationsMixin<account_contact_note>;
  setAccount_contact_notes!: Sequelize.HasManySetAssociationsMixin<account_contact_note, account_contact_noteId>;
  addAccount_contact_note!: Sequelize.HasManyAddAssociationMixin<account_contact_note, account_contact_noteId>;
  addAccount_contact_notes!: Sequelize.HasManyAddAssociationsMixin<account_contact_note, account_contact_noteId>;
  createAccount_contact_note!: Sequelize.HasManyCreateAssociationMixin<account_contact_note>;
  removeAccount_contact_note!: Sequelize.HasManyRemoveAssociationMixin<account_contact_note, account_contact_noteId>;
  removeAccount_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_note, account_contact_noteId>;
  hasAccount_contact_note!: Sequelize.HasManyHasAssociationMixin<account_contact_note, account_contact_noteId>;
  hasAccount_contact_notes!: Sequelize.HasManyHasAssociationsMixin<account_contact_note, account_contact_noteId>;
  countAccount_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // account_contact_info hasMany wf_info via poa_recipient
  wf_infos!: wf_info[];
  getWf_infos!: Sequelize.HasManyGetAssociationsMixin<wf_info>;
  setWf_infos!: Sequelize.HasManySetAssociationsMixin<wf_info, wf_infoId>;
  addWf_info!: Sequelize.HasManyAddAssociationMixin<wf_info, wf_infoId>;
  addWf_infos!: Sequelize.HasManyAddAssociationsMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.HasManyCreateAssociationMixin<wf_info>;
  removeWf_info!: Sequelize.HasManyRemoveAssociationMixin<wf_info, wf_infoId>;
  removeWf_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_info, wf_infoId>;
  hasWf_info!: Sequelize.HasManyHasAssociationMixin<wf_info, wf_infoId>;
  hasWf_infos!: Sequelize.HasManyHasAssociationsMixin<wf_info, wf_infoId>;
  countWf_infos!: Sequelize.HasManyCountAssociationsMixin;
  // account_contact_info hasMany wf_info_new via poa_recipient
  wf_info_news!: wf_info_new[];
  getWf_info_news!: Sequelize.HasManyGetAssociationsMixin<wf_info_new>;
  setWf_info_news!: Sequelize.HasManySetAssociationsMixin<wf_info_new, wf_info_newId>;
  addWf_info_new!: Sequelize.HasManyAddAssociationMixin<wf_info_new, wf_info_newId>;
  addWf_info_news!: Sequelize.HasManyAddAssociationsMixin<wf_info_new, wf_info_newId>;
  createWf_info_new!: Sequelize.HasManyCreateAssociationMixin<wf_info_new>;
  removeWf_info_new!: Sequelize.HasManyRemoveAssociationMixin<wf_info_new, wf_info_newId>;
  removeWf_info_news!: Sequelize.HasManyRemoveAssociationsMixin<wf_info_new, wf_info_newId>;
  hasWf_info_new!: Sequelize.HasManyHasAssociationMixin<wf_info_new, wf_info_newId>;
  hasWf_info_news!: Sequelize.HasManyHasAssociationsMixin<wf_info_new, wf_info_newId>;
  countWf_info_news!: Sequelize.HasManyCountAssociationsMixin;
  // account_contact_info belongsToMany workflow_list via account_contact_info_id and workflow_list_id
  workflow_list_id_workflow_lists!: workflow_list[];
  getWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManyGetAssociationsMixin<workflow_list>;
  setWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManySetAssociationsMixin<workflow_list, workflow_listId>;
  addWorkflow_list_id_workflow_list!: Sequelize.BelongsToManyAddAssociationMixin<workflow_list, workflow_listId>;
  addWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManyAddAssociationsMixin<workflow_list, workflow_listId>;
  createWorkflow_list_id_workflow_list!: Sequelize.BelongsToManyCreateAssociationMixin<workflow_list>;
  removeWorkflow_list_id_workflow_list!: Sequelize.BelongsToManyRemoveAssociationMixin<workflow_list, workflow_listId>;
  removeWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManyRemoveAssociationsMixin<workflow_list, workflow_listId>;
  hasWorkflow_list_id_workflow_list!: Sequelize.BelongsToManyHasAssociationMixin<workflow_list, workflow_listId>;
  hasWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManyHasAssociationsMixin<workflow_list, workflow_listId>;
  countWorkflow_list_id_workflow_lists!: Sequelize.BelongsToManyCountAssociationsMixin;
  // account_contact_info belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // account_contact_info belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_contact_info belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_contact_info {
    return sequelize.define('account_contact_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alert: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secondary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_primary_contact: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    profile_picture_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
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
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    internal_id_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auto_inactivate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    poa_signer: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'account_contact_info',
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
        name: "account_contact_info_account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "account_contact_info_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "account_contact_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_contact_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "data_import_index",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "account_id" },
        ]
      },
      {
        name: "data_import_index_internal_1",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "internal_id_1" },
        ]
      },
      {
        name: "data_import_index_internal_2",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "internal_id_2" },
        ]
      },
    ]
  }) as typeof account_contact_info;
  }
}
