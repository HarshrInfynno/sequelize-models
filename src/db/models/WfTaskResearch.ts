import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_researchAttributes {
  id: number;
  wf_info_id?: number;
  workflow_task_info_id?: number;
  workflow_situation?: string;
  who_caused_issue?: string;
  what_department_caused_issue?: string;
  expect_sequential_notice?: string;
  what_caused_issue?: string;
  what_corrective_actions_taken?: string;
  what_department_responsible_for_corrective_actions?: string;
  what_form_used_to_resolve_the_issue?: string;
  inquiry_id?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_researchPk = "id";
export type wf_task_researchId = wf_task_research[wf_task_researchPk];
export type wf_task_researchOptionalAttributes = "id" | "wf_info_id" | "workflow_task_info_id" | "workflow_situation" | "who_caused_issue" | "what_department_caused_issue" | "expect_sequential_notice" | "what_caused_issue" | "what_corrective_actions_taken" | "what_department_responsible_for_corrective_actions" | "what_form_used_to_resolve_the_issue" | "inquiry_id" | "updated_by" | "created_at" | "updated_at";
export type wf_task_researchCreationAttributes = Optional<wf_task_researchAttributes, wf_task_researchOptionalAttributes>;

export class wf_task_research extends Model<wf_task_researchAttributes, wf_task_researchCreationAttributes> implements wf_task_researchAttributes {
  id!: number;
  wf_info_id?: number;
  workflow_task_info_id?: number;
  workflow_situation?: string;
  who_caused_issue?: string;
  what_department_caused_issue?: string;
  expect_sequential_notice?: string;
  what_caused_issue?: string;
  what_corrective_actions_taken?: string;
  what_department_responsible_for_corrective_actions?: string;
  what_form_used_to_resolve_the_issue?: string;
  inquiry_id?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_research belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_research {
    return sequelize.define('wf_task_research', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_situation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    who_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_department_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expect_sequential_notice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_corrective_actions_taken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_department_responsible_for_corrective_actions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_form_used_to_resolve_the_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inquiry_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_research',
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
        name: "wf_task_research_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_research;
  }
}
