import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sys_task_definition, sys_task_definitionId } from './SysTaskDefinition';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface sys_workflow_taskAttributes {
  id: number;
  sys_workflow_id: number;
  sys_task_definition_id: number;
  order: number;
  days_open: number;
  assigned_to?: number;
  skip?: object;
  enabled_skip?: number;
  assignment?: object;
  created_at?: Date;
  updated_at?: Date;
  email?: string;
  template_letter?: number;
  include_totals_page?: number;
  count?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  assignment_type?: string;
  rule_assignment_type?: string;
  assignment_id?: number;
}

export type sys_workflow_taskPk = "id";
export type sys_workflow_taskId = sys_workflow_task[sys_workflow_taskPk];
export type sys_workflow_taskOptionalAttributes = "id" | "order" | "days_open" | "assigned_to" | "skip" | "enabled_skip" | "assignment" | "created_at" | "updated_at" | "email" | "template_letter" | "include_totals_page" | "count" | "rule_type_id_1" | "rule_type_option_value_1" | "assignment_type" | "rule_assignment_type" | "assignment_id";
export type sys_workflow_taskCreationAttributes = Optional<sys_workflow_taskAttributes, sys_workflow_taskOptionalAttributes>;

export class sys_workflow_task extends Model<sys_workflow_taskAttributes, sys_workflow_taskCreationAttributes> implements sys_workflow_taskAttributes {
  id!: number;
  sys_workflow_id!: number;
  sys_task_definition_id!: number;
  order!: number;
  days_open!: number;
  assigned_to?: number;
  skip?: object;
  enabled_skip?: number;
  assignment?: object;
  created_at?: Date;
  updated_at?: Date;
  email?: string;
  template_letter?: number;
  include_totals_page?: number;
  count?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  assignment_type?: string;
  rule_assignment_type?: string;
  assignment_id?: number;

  // sys_workflow_task belongsTo sys_task_definition via sys_task_definition_id
  sys_task_definition!: sys_task_definition;
  getSys_task_definition!: Sequelize.BelongsToGetAssociationMixin<sys_task_definition>;
  setSys_task_definition!: Sequelize.BelongsToSetAssociationMixin<sys_task_definition, sys_task_definitionId>;
  createSys_task_definition!: Sequelize.BelongsToCreateAssociationMixin<sys_task_definition>;
  // sys_workflow_task belongsTo sys_workflow via sys_workflow_id
  sys_workflow!: sys_workflow;
  getSys_workflow!: Sequelize.BelongsToGetAssociationMixin<sys_workflow>;
  setSys_workflow!: Sequelize.BelongsToSetAssociationMixin<sys_workflow, sys_workflowId>;
  createSys_workflow!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sys_workflow_task {
    return sequelize.define('sys_workflow_task', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_workflow',
        key: 'id'
      }
    },
    sys_task_definition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_task_definition',
        key: 'id'
      }
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    days_open: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    assigned_to: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    skip: {
      type: DataTypes.JSON,
      allowNull: true
    },
    enabled_skip: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    assignment: {
      type: DataTypes.JSON,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    template_letter: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    include_totals_page: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rule_type_id_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rule_type_option_value_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignment_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rule_assignment_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    assignment_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'sys_workflow_tasks',
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
        name: "sys_workflow_tasks_sys_workflow_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_id" },
        ]
      },
      {
        name: "sys_workflow_tasks_sys_task_definition_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_task_definition_id" },
        ]
      },
    ]
  }) as typeof sys_workflow_task;
  }
}
