import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_rateAttributes {
  id: number;
  wf_info_id?: number;
  workflow_task_info_id: number;
  start_date?: string;
  major_status?: string;
  major_rate?: number;
  minor_status?: string;
  minor_rate_1?: number;
  minor_rate_2?: number;
  override_rate?: string;
  total_rate_override?: number;
  total_rate?: number;
  sdi_rate?: number;
  information_saved?: number;
  verification_date?: string;
  approval_type?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_ratePk = "id";
export type wf_task_rateId = wf_task_rate[wf_task_ratePk];
export type wf_task_rateOptionalAttributes = "id" | "wf_info_id" | "start_date" | "major_status" | "major_rate" | "minor_status" | "minor_rate_1" | "minor_rate_2" | "override_rate" | "total_rate_override" | "total_rate" | "sdi_rate" | "information_saved" | "verification_date" | "approval_type" | "updated_by" | "created_at" | "updated_at";
export type wf_task_rateCreationAttributes = Optional<wf_task_rateAttributes, wf_task_rateOptionalAttributes>;

export class wf_task_rate extends Model<wf_task_rateAttributes, wf_task_rateCreationAttributes> implements wf_task_rateAttributes {
  id!: number;
  wf_info_id?: number;
  workflow_task_info_id!: number;
  start_date?: string;
  major_status?: string;
  major_rate?: number;
  minor_status?: string;
  minor_rate_1?: number;
  minor_rate_2?: number;
  override_rate?: string;
  total_rate_override?: number;
  total_rate?: number;
  sdi_rate?: number;
  information_saved?: number;
  verification_date?: string;
  approval_type?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_rate belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_rate {
    return sequelize.define('wf_task_rate', {
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
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    major_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    minor_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    minor_rate_2: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    override_rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_rate_override: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    total_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    sdi_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    information_saved: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    verification_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approval_type: {
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
    tableName: 'wf_task_rates',
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
        name: "wf_task_rates_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_rate;
  }
}
