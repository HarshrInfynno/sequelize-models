import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_refund_dueAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  issuing_country?: number;
  issuing_agency?: number;
  rd_is_refund_due?: string;
  rd_refund_due_reason?: string;
  rd_expected_date?: string;
  rd_recieved_date?: string;
  rd_refund_paid_by?: string;
  rd_refund_amount?: number;
  rd_refund_paid_to?: string;
  rd_refund_check_number?: string;
  rd_paid_date?: string;
  rd_refund_expected_date?: string;
  rd_refund_request_date?: string;
  rd_refund_request_type?: string;
  rd_refund_due_tax_amount?: number;
  rd_refund_due_penalty_amount?: number;
  rd_refund_due_interest_amount?: number;
  rd_refund_due_total_amount?: number;
  created_at?: Date;
  updated_at?: Date;
  rd_credit_amount?: number;
  rd_total_refund?: number;
}

export type wf_task_refund_duePk = "id";
export type wf_task_refund_dueId = wf_task_refund_due[wf_task_refund_duePk];
export type wf_task_refund_dueOptionalAttributes = "id" | "issuing_country" | "issuing_agency" | "rd_is_refund_due" | "rd_refund_due_reason" | "rd_expected_date" | "rd_recieved_date" | "rd_refund_paid_by" | "rd_refund_amount" | "rd_refund_paid_to" | "rd_refund_check_number" | "rd_paid_date" | "rd_refund_expected_date" | "rd_refund_request_date" | "rd_refund_request_type" | "rd_refund_due_tax_amount" | "rd_refund_due_penalty_amount" | "rd_refund_due_interest_amount" | "rd_refund_due_total_amount" | "created_at" | "updated_at" | "rd_credit_amount" | "rd_total_refund";
export type wf_task_refund_dueCreationAttributes = Optional<wf_task_refund_dueAttributes, wf_task_refund_dueOptionalAttributes>;

export class wf_task_refund_due extends Model<wf_task_refund_dueAttributes, wf_task_refund_dueCreationAttributes> implements wf_task_refund_dueAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  issuing_country?: number;
  issuing_agency?: number;
  rd_is_refund_due?: string;
  rd_refund_due_reason?: string;
  rd_expected_date?: string;
  rd_recieved_date?: string;
  rd_refund_paid_by?: string;
  rd_refund_amount?: number;
  rd_refund_paid_to?: string;
  rd_refund_check_number?: string;
  rd_paid_date?: string;
  rd_refund_expected_date?: string;
  rd_refund_request_date?: string;
  rd_refund_request_type?: string;
  rd_refund_due_tax_amount?: number;
  rd_refund_due_penalty_amount?: number;
  rd_refund_due_interest_amount?: number;
  rd_refund_due_total_amount?: number;
  created_at?: Date;
  updated_at?: Date;
  rd_credit_amount?: number;
  rd_total_refund?: number;

  // wf_task_refund_due belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_refund_due belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_refund_due {
    return sequelize.define('wf_task_refund_due', {
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
    rd_is_refund_due: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_due_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_expected_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_recieved_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_paid_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_paid_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_expected_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_request_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_request_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_due_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_credit_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    rd_total_refund: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    tableName: 'wf_task_refund_due',
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
        name: "wf_task_refund_due_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_refund_due_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_refund_due;
  }
}
