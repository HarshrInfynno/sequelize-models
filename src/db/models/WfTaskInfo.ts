import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { sys_task_definition, sys_task_definitionId } from './SysTaskDefinition';
import type { wf_task_guidance, wf_task_guidanceId } from './WfTaskGuidance';

export interface wf_task_infoAttributes {
  id: number;
  co_info_id: number;
  account_info_id?: number;
  workflow_type: string;
  workflow_info_id: number;
  sys_task_definition_id: number;
  order: number;
  days_open: number;
  due_date?: string;
  assigned_to?: number;
  skip?: object;
  enabled_skip?: number;
  assignment?: object;
  status?: string;
  total_time_spent_in_seconds: number;
  task_complete_date?: Date;
  task_open_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  total_options: number;
  completed_options: number;
  task_opened_by?: number;
  task_completed_by?: number;
  pv_email?: string;
  pv_template_letter?: number;
  pv_include_totals_page?: number;
  count?: number;
  has_guidance?: number;
  is_skipped?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  assignment_type?: string;
  rule_assignment_type?: string;
  assignment_id?: number;
}

export type wf_task_infoPk = "id";
export type wf_task_infoId = wf_task_info[wf_task_infoPk];
export type wf_task_infoOptionalAttributes = "id" | "account_info_id" | "order" | "days_open" | "due_date" | "assigned_to" | "skip" | "enabled_skip" | "assignment" | "status" | "total_time_spent_in_seconds" | "task_complete_date" | "task_open_date" | "created_at" | "updated_at" | "total_options" | "completed_options" | "task_opened_by" | "task_completed_by" | "pv_email" | "pv_template_letter" | "pv_include_totals_page" | "count" | "has_guidance" | "is_skipped" | "rule_type_id_1" | "rule_type_option_value_1" | "assignment_type" | "rule_assignment_type" | "assignment_id";
export type wf_task_infoCreationAttributes = Optional<wf_task_infoAttributes, wf_task_infoOptionalAttributes>;

export class wf_task_info extends Model<wf_task_infoAttributes, wf_task_infoCreationAttributes> implements wf_task_infoAttributes {
  id!: number;
  co_info_id!: number;
  account_info_id?: number;
  workflow_type!: string;
  workflow_info_id!: number;
  sys_task_definition_id!: number;
  order!: number;
  days_open!: number;
  due_date?: string;
  assigned_to?: number;
  skip?: object;
  enabled_skip?: number;
  assignment?: object;
  status?: string;
  total_time_spent_in_seconds!: number;
  task_complete_date?: Date;
  task_open_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  total_options!: number;
  completed_options!: number;
  task_opened_by?: number;
  task_completed_by?: number;
  pv_email?: string;
  pv_template_letter?: number;
  pv_include_totals_page?: number;
  count?: number;
  has_guidance?: number;
  is_skipped?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  assignment_type?: string;
  rule_assignment_type?: string;
  assignment_id?: number;

  // wf_task_info belongsTo app_user_info via assigned_to
  assigned_to_app_user_info!: app_user_info;
  getAssigned_to_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setAssigned_to_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createAssigned_to_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_task_info belongsTo sys_task_definition via sys_task_definition_id
  sys_task_definition!: sys_task_definition;
  getSys_task_definition!: Sequelize.BelongsToGetAssociationMixin<sys_task_definition>;
  setSys_task_definition!: Sequelize.BelongsToSetAssociationMixin<sys_task_definition, sys_task_definitionId>;
  createSys_task_definition!: Sequelize.BelongsToCreateAssociationMixin<sys_task_definition>;
  // wf_task_info hasMany wf_task_guidance via workflow_task_info_id
  wf_task_guidances!: wf_task_guidance[];
  getWf_task_guidances!: Sequelize.HasManyGetAssociationsMixin<wf_task_guidance>;
  setWf_task_guidances!: Sequelize.HasManySetAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  addWf_task_guidance!: Sequelize.HasManyAddAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  addWf_task_guidances!: Sequelize.HasManyAddAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  createWf_task_guidance!: Sequelize.HasManyCreateAssociationMixin<wf_task_guidance>;
  removeWf_task_guidance!: Sequelize.HasManyRemoveAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  removeWf_task_guidances!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  hasWf_task_guidance!: Sequelize.HasManyHasAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  hasWf_task_guidances!: Sequelize.HasManyHasAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  countWf_task_guidances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_info {
    return sequelize.define('wf_task_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    assigned_to: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
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
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_time_spent_in_seconds: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    task_complete_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    task_open_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_options: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    completed_options: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    task_opened_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    task_completed_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    pv_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pv_template_letter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pv_include_totals_page: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    has_guidance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_skipped: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'wf_task_info',
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
        name: "workflow_task_info_sys_task_definition_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_task_definition_id" },
        ]
      },
      {
        name: "workflow_task_info_assigned_to_foreign",
        using: "BTREE",
        fields: [
          { name: "assigned_to" },
        ]
      },
      {
        name: "workflow_task_info_workflow_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "workflow_task_info_order_index",
        using: "BTREE",
        fields: [
          { name: "order" },
        ]
      },
      {
        name: "workflow_task_info_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  }) as typeof wf_task_info;
  }
}
