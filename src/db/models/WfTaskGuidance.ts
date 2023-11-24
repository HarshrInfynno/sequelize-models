import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_note, wf_noteId } from './WfNote';
import type { wf_task_info, wf_task_infoId } from './WfTaskInfo';

export interface wf_task_guidanceAttributes {
  id: number;
  workflow_task_info_id: number;
  workflow_info_id: number;
  note?: string;
  wf_notes_id: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_guidancePk = "id";
export type wf_task_guidanceId = wf_task_guidance[wf_task_guidancePk];
export type wf_task_guidanceOptionalAttributes = "id" | "note" | "updated_by" | "created_at" | "updated_at";
export type wf_task_guidanceCreationAttributes = Optional<wf_task_guidanceAttributes, wf_task_guidanceOptionalAttributes>;

export class wf_task_guidance extends Model<wf_task_guidanceAttributes, wf_task_guidanceCreationAttributes> implements wf_task_guidanceAttributes {
  id!: number;
  workflow_task_info_id!: number;
  workflow_info_id!: number;
  note?: string;
  wf_notes_id!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_guidance belongsTo wf_info via workflow_info_id
  workflow_info!: wf_info;
  getWorkflow_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWorkflow_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWorkflow_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;
  // wf_task_guidance belongsTo wf_note via wf_notes_id
  wf_note!: wf_note;
  getWf_note!: Sequelize.BelongsToGetAssociationMixin<wf_note>;
  setWf_note!: Sequelize.BelongsToSetAssociationMixin<wf_note, wf_noteId>;
  createWf_note!: Sequelize.BelongsToCreateAssociationMixin<wf_note>;
  // wf_task_guidance belongsTo wf_task_info via workflow_task_info_id
  workflow_task_info!: wf_task_info;
  getWorkflow_task_info!: Sequelize.BelongsToGetAssociationMixin<wf_task_info>;
  setWorkflow_task_info!: Sequelize.BelongsToSetAssociationMixin<wf_task_info, wf_task_infoId>;
  createWorkflow_task_info!: Sequelize.BelongsToCreateAssociationMixin<wf_task_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_guidance {
    return sequelize.define('wf_task_guidance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_task_info',
        key: 'id'
      }
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wf_notes_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_notes',
        key: 'id'
      }
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
    tableName: 'wf_task_guidance',
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
        name: "wf_task_guidance_workflow_info_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "wf_task_guidance_workflow_task_info_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_task_info_id" },
        ]
      },
      {
        name: "wf_task_guidance_wf+notes_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_notes_id" },
        ]
      },
    ]
  }) as typeof wf_task_guidance;
  }
}
