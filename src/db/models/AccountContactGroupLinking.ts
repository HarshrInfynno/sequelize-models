import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { workflow_list, workflow_listId } from './WorkflowList';

export interface account_contact_group_linkingAttributes {
  account_contact_info_id: number;
  workflow_list_id: number;
  account_info_id?: number;
}

export type account_contact_group_linkingPk = "account_contact_info_id" | "workflow_list_id";
export type account_contact_group_linkingId = account_contact_group_linking[account_contact_group_linkingPk];
export type account_contact_group_linkingOptionalAttributes = "account_info_id";
export type account_contact_group_linkingCreationAttributes = Optional<account_contact_group_linkingAttributes, account_contact_group_linkingOptionalAttributes>;

export class account_contact_group_linking extends Model<account_contact_group_linkingAttributes, account_contact_group_linkingCreationAttributes> implements account_contact_group_linkingAttributes {
  account_contact_info_id!: number;
  workflow_list_id!: number;
  account_info_id?: number;

  // account_contact_group_linking belongsTo account_contact_info via account_contact_info_id
  account_contact_info!: account_contact_info;
  getAccount_contact_info!: Sequelize.BelongsToGetAssociationMixin<account_contact_info>;
  setAccount_contact_info!: Sequelize.BelongsToSetAssociationMixin<account_contact_info, account_contact_infoId>;
  createAccount_contact_info!: Sequelize.BelongsToCreateAssociationMixin<account_contact_info>;
  // account_contact_group_linking belongsTo workflow_list via workflow_list_id
  workflow_list!: workflow_list;
  getWorkflow_list!: Sequelize.BelongsToGetAssociationMixin<workflow_list>;
  setWorkflow_list!: Sequelize.BelongsToSetAssociationMixin<workflow_list, workflow_listId>;
  createWorkflow_list!: Sequelize.BelongsToCreateAssociationMixin<workflow_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_contact_group_linking {
    return sequelize.define('account_contact_group_linking', {
    account_contact_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account_contact_info',
        key: 'id'
      }
    },
    workflow_list_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'workflow_lists',
        key: 'id'
      }
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_contact_group_linking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_contact_info_id" },
          { name: "workflow_list_id" },
        ]
      },
      {
        name: "account_contact_linking_workflow_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_list_id" },
        ]
      },
      {
        name: "account_contact_info_id_workflow_list_id_index",
        using: "BTREE",
        fields: [
          { name: "account_contact_info_id" },
          { name: "workflow_list_id" },
        ]
      },
    ]
  }) as typeof account_contact_group_linking;
  }
}
