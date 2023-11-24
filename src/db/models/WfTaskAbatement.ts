import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_abatementAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  abatement_tax_amount?: number;
  abatement_penalty_amount?: number;
  abatement_interest_amount?: number;
  abatement_total_amount?: number;
  abatement_request_type?: string;
  abatement_request_date?: string;
  abatement_request_paid_pi?: string;
  abatement_response_is_approved?: string;
  abatement_response_reason?: string;
  abatement_response_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_abatementPk = "id";
export type wf_task_abatementId = wf_task_abatement[wf_task_abatementPk];
export type wf_task_abatementOptionalAttributes = "id" | "abatement_tax_amount" | "abatement_penalty_amount" | "abatement_interest_amount" | "abatement_total_amount" | "abatement_request_type" | "abatement_request_date" | "abatement_request_paid_pi" | "abatement_response_is_approved" | "abatement_response_reason" | "abatement_response_date" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type wf_task_abatementCreationAttributes = Optional<wf_task_abatementAttributes, wf_task_abatementOptionalAttributes>;

export class wf_task_abatement extends Model<wf_task_abatementAttributes, wf_task_abatementCreationAttributes> implements wf_task_abatementAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  abatement_tax_amount?: number;
  abatement_penalty_amount?: number;
  abatement_interest_amount?: number;
  abatement_total_amount?: number;
  abatement_request_type?: string;
  abatement_request_date?: string;
  abatement_request_paid_pi?: string;
  abatement_response_is_approved?: string;
  abatement_response_reason?: string;
  abatement_response_date?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_abatement belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_abatement {
    return sequelize.define('wf_task_abatement', {
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
      type: DataTypes.BIGINT,
      allowNull: false
    },
    abatement_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_request_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_request_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    abatement_request_paid_pi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_is_approved: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_abatement',
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
        name: "wf_task_abatement_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_abatement;
  }
}
