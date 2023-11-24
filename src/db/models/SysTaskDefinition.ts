import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sys_workflow_task, sys_workflow_taskId } from './SysWorkflowTask';
import type { wf_task_info, wf_task_infoId } from './WfTaskInfo';

export interface sys_task_definitionAttributes {
  id: number;
  name: string;
  description?: string;
  slug?: string;
  days_open: number;
  default: number;
  sys_workflow_type_id?: string;
  total_options?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_task_definitionPk = "id";
export type sys_task_definitionId = sys_task_definition[sys_task_definitionPk];
export type sys_task_definitionOptionalAttributes = "id" | "description" | "slug" | "days_open" | "default" | "sys_workflow_type_id" | "total_options" | "created_at" | "updated_at";
export type sys_task_definitionCreationAttributes = Optional<sys_task_definitionAttributes, sys_task_definitionOptionalAttributes>;

export class sys_task_definition extends Model<sys_task_definitionAttributes, sys_task_definitionCreationAttributes> implements sys_task_definitionAttributes {
  id!: number;
  name!: string;
  description?: string;
  slug?: string;
  days_open!: number;
  default!: number;
  sys_workflow_type_id?: string;
  total_options?: number;
  created_at?: Date;
  updated_at?: Date;

  // sys_task_definition hasMany sys_workflow_task via sys_task_definition_id
  sys_workflow_tasks!: sys_workflow_task[];
  getSys_workflow_tasks!: Sequelize.HasManyGetAssociationsMixin<sys_workflow_task>;
  setSys_workflow_tasks!: Sequelize.HasManySetAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  addSys_workflow_task!: Sequelize.HasManyAddAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  addSys_workflow_tasks!: Sequelize.HasManyAddAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  createSys_workflow_task!: Sequelize.HasManyCreateAssociationMixin<sys_workflow_task>;
  removeSys_workflow_task!: Sequelize.HasManyRemoveAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  removeSys_workflow_tasks!: Sequelize.HasManyRemoveAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  hasSys_workflow_task!: Sequelize.HasManyHasAssociationMixin<sys_workflow_task, sys_workflow_taskId>;
  hasSys_workflow_tasks!: Sequelize.HasManyHasAssociationsMixin<sys_workflow_task, sys_workflow_taskId>;
  countSys_workflow_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // sys_task_definition hasMany wf_task_info via sys_task_definition_id
  wf_task_infos!: wf_task_info[];
  getWf_task_infos!: Sequelize.HasManyGetAssociationsMixin<wf_task_info>;
  setWf_task_infos!: Sequelize.HasManySetAssociationsMixin<wf_task_info, wf_task_infoId>;
  addWf_task_info!: Sequelize.HasManyAddAssociationMixin<wf_task_info, wf_task_infoId>;
  addWf_task_infos!: Sequelize.HasManyAddAssociationsMixin<wf_task_info, wf_task_infoId>;
  createWf_task_info!: Sequelize.HasManyCreateAssociationMixin<wf_task_info>;
  removeWf_task_info!: Sequelize.HasManyRemoveAssociationMixin<wf_task_info, wf_task_infoId>;
  removeWf_task_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_info, wf_task_infoId>;
  hasWf_task_info!: Sequelize.HasManyHasAssociationMixin<wf_task_info, wf_task_infoId>;
  hasWf_task_infos!: Sequelize.HasManyHasAssociationsMixin<wf_task_info, wf_task_infoId>;
  countWf_task_infos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_task_definition {
    return sequelize.define('sys_task_definition', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sys_task_definition_slug_unique"
    },
    days_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    default: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sys_workflow_type_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_options: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'sys_task_definition',
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
        name: "sys_task_definition_slug_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  }) as typeof sys_task_definition;
  }
}
