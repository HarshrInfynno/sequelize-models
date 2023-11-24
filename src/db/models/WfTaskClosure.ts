import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_closureAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  issuing_country?: number;
  issuing_agency?: number;
  agency_type?: string;
  rs_is_completed_timely?: string;
  rs_call_agency_count?: number;
  rs_call_account_contact_count?: number;
  rs_is_related_to_vendor?: string;
  rs_difficulty_level?: number;
  rs_resolution_rating?: string;
  rs_created_by?: number;
  cl_close_notification_type?: string;
  cl_agent_talked_to?: string;
  cl_agent_id?: string;
  cl_was_issue_avoidable?: string;
  cl_issue_avoidable_action?: string;
  cl_is_followup_needed?: string;
  cl_type_of_followup?: string;
  cl_created_by?: number;
  created_at?: Date;
  updated_at?: Date;
  workflow_task_info_id?: number;
  afc_type_of_closure?: string;
}

export type wf_task_closurePk = "id";
export type wf_task_closureId = wf_task_closure[wf_task_closurePk];
export type wf_task_closureOptionalAttributes = "id" | "issuing_country" | "issuing_agency" | "agency_type" | "rs_is_completed_timely" | "rs_call_agency_count" | "rs_call_account_contact_count" | "rs_is_related_to_vendor" | "rs_difficulty_level" | "rs_resolution_rating" | "rs_created_by" | "cl_close_notification_type" | "cl_agent_talked_to" | "cl_agent_id" | "cl_was_issue_avoidable" | "cl_issue_avoidable_action" | "cl_is_followup_needed" | "cl_type_of_followup" | "cl_created_by" | "created_at" | "updated_at" | "workflow_task_info_id" | "afc_type_of_closure";
export type wf_task_closureCreationAttributes = Optional<wf_task_closureAttributes, wf_task_closureOptionalAttributes>;

export class wf_task_closure extends Model<wf_task_closureAttributes, wf_task_closureCreationAttributes> implements wf_task_closureAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  issuing_country?: number;
  issuing_agency?: number;
  agency_type?: string;
  rs_is_completed_timely?: string;
  rs_call_agency_count?: number;
  rs_call_account_contact_count?: number;
  rs_is_related_to_vendor?: string;
  rs_difficulty_level?: number;
  rs_resolution_rating?: string;
  rs_created_by?: number;
  cl_close_notification_type?: string;
  cl_agent_talked_to?: string;
  cl_agent_id?: string;
  cl_was_issue_avoidable?: string;
  cl_issue_avoidable_action?: string;
  cl_is_followup_needed?: string;
  cl_type_of_followup?: string;
  cl_created_by?: number;
  created_at?: Date;
  updated_at?: Date;
  workflow_task_info_id?: number;
  afc_type_of_closure?: string;

  // wf_task_closure belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_closure belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_closure {
    return sequelize.define('wf_task_closure', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    issuing_country: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    issuing_agency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_is_completed_timely: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_call_agency_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rs_call_account_contact_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rs_is_related_to_vendor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    rs_resolution_rating: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    cl_close_notification_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_agent_talked_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_agent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_was_issue_avoidable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_issue_avoidable_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_is_followup_needed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_type_of_followup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    afc_type_of_closure: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_closure',
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
        name: "wf_task_closure_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_closure_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_closure;
  }
}
