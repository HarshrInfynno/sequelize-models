import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_task_guidance, wf_task_guidanceId } from './WfTaskGuidance';

export interface wf_noteAttributes {
  id: number;
  workflow_type: string;
  workflow_info_id: number;
  workflow_task_info_id?: number;
  note_type: string;
  note: string;
  visible_account_contact?: number;
  notify_account_contact?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  contacts?: string;
  salesforce_notes_id?: string;
  zendesk_notes_id?: string;
  cc_manager?: number;
}

export type wf_notePk = "id";
export type wf_noteId = wf_note[wf_notePk];
export type wf_noteOptionalAttributes = "id" | "workflow_task_info_id" | "visible_account_contact" | "notify_account_contact" | "updated_by" | "created_at" | "updated_at" | "contacts" | "salesforce_notes_id" | "zendesk_notes_id" | "cc_manager";
export type wf_noteCreationAttributes = Optional<wf_noteAttributes, wf_noteOptionalAttributes>;

export class wf_note extends Model<wf_noteAttributes, wf_noteCreationAttributes> implements wf_noteAttributes {
  id!: number;
  workflow_type!: string;
  workflow_info_id!: number;
  workflow_task_info_id?: number;
  note_type!: string;
  note!: string;
  visible_account_contact?: number;
  notify_account_contact?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  contacts?: string;
  salesforce_notes_id?: string;
  zendesk_notes_id?: string;
  cc_manager?: number;

  // wf_note belongsTo wf_info via workflow_info_id
  workflow_info!: wf_info;
  getWorkflow_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWorkflow_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWorkflow_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;
  // wf_note hasMany wf_task_guidance via wf_notes_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_note {
    return sequelize.define('wf_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    note_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    visible_account_contact: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notify_account_contact: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    contacts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salesforce_notes_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zendesk_notes_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc_manager: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'wf_notes',
    hasTrigger: true,
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
        name: "workflow_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "workflow_task_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_task_info_id" },
        ]
      },
    ]
  }) as typeof wf_note;
  }
}
