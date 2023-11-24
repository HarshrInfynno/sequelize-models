import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface sys_priority_listAttributes {
  id: number;
  co_info_id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_priority_listPk = "id";
export type sys_priority_listId = sys_priority_list[sys_priority_listPk];
export type sys_priority_listOptionalAttributes = "id" | "co_info_id" | "created_at" | "updated_at";
export type sys_priority_listCreationAttributes = Optional<sys_priority_listAttributes, sys_priority_listOptionalAttributes>;

export class sys_priority_list extends Model<sys_priority_listAttributes, sys_priority_listCreationAttributes> implements sys_priority_listAttributes {
  id!: number;
  co_info_id?: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;

  // sys_priority_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // sys_priority_list hasMany account_info via sys_priority_list_id
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
  // sys_priority_list hasMany sys_workflow via sys_priority_list_id
  sys_workflows!: sys_workflow[];
  getSys_workflows!: Sequelize.HasManyGetAssociationsMixin<sys_workflow>;
  setSys_workflows!: Sequelize.HasManySetAssociationsMixin<sys_workflow, sys_workflowId>;
  addSys_workflow!: Sequelize.HasManyAddAssociationMixin<sys_workflow, sys_workflowId>;
  addSys_workflows!: Sequelize.HasManyAddAssociationsMixin<sys_workflow, sys_workflowId>;
  createSys_workflow!: Sequelize.HasManyCreateAssociationMixin<sys_workflow>;
  removeSys_workflow!: Sequelize.HasManyRemoveAssociationMixin<sys_workflow, sys_workflowId>;
  removeSys_workflows!: Sequelize.HasManyRemoveAssociationsMixin<sys_workflow, sys_workflowId>;
  hasSys_workflow!: Sequelize.HasManyHasAssociationMixin<sys_workflow, sys_workflowId>;
  hasSys_workflows!: Sequelize.HasManyHasAssociationsMixin<sys_workflow, sys_workflowId>;
  countSys_workflows!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_priority_list {
    return sequelize.define('sys_priority_list', {
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
    tableName: 'sys_priority_list',
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
        name: "sys_priority_list_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof sys_priority_list;
  }
}
