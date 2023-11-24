import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_amount_dueAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  amount_due_credit_amount?: number;
  amount_due_payment_amount?: number;
  amount_due_tax_amount?: number;
  amount_due_penalty_amount?: number;
  amount_due_interest_amount?: number;
  amount_due_fine_amount?: number;
  amount_due_fee_amount?: number;
  amount_due_original_total_amount?: number;
  is_amount_due?: string;
  amount_due_reason?: string;
  amount_due_allow_actual: number;
  amount_due_actual_credit_amount?: number;
  amount_due_actual_payment_amount?: number;
  amount_due_actual_tax_amount?: number;
  amount_due_actual_penalty_amount?: number;
  amount_due_actual_interest_amount?: number;
  amount_due_actual_total_amount?: number;
  amount_due_total_variance?: number;
  amount_due_total_paid_by?: string;
  amount_due_tax_paid_by?: string;
  amount_due_penalty_paid_by?: string;
  amount_due_interest_paid_by?: string;
  amount_due_fine_paid_by?: string;
  amount_due_fee_paid_by?: string;
  amount_due_paid_date?: string;
  amount_due_total_check_number?: string;
  amount_due_tax_check_number?: string;
  amount_due_penalty_check_number?: string;
  amount_due_interest_check_number?: string;
  amount_due_fine_check_number?: string;
  amount_due_fee_check_number?: string;
  amount_due_pi_amount?: string;
  amount_due_payment_made?: string;
  amount_due_payment_type?: string;
  amount_due_tax_approver?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  is_use_actuals?: string;
  pv_invoice_id?: string;
}

export type wf_task_amount_duePk = "id";
export type wf_task_amount_dueId = wf_task_amount_due[wf_task_amount_duePk];
export type wf_task_amount_dueOptionalAttributes = "id" | "amount_due_credit_amount" | "amount_due_payment_amount" | "amount_due_tax_amount" | "amount_due_penalty_amount" | "amount_due_interest_amount" | "amount_due_fine_amount" | "amount_due_fee_amount" | "amount_due_original_total_amount" | "is_amount_due" | "amount_due_reason" | "amount_due_allow_actual" | "amount_due_actual_credit_amount" | "amount_due_actual_payment_amount" | "amount_due_actual_tax_amount" | "amount_due_actual_penalty_amount" | "amount_due_actual_interest_amount" | "amount_due_actual_total_amount" | "amount_due_total_variance" | "amount_due_total_paid_by" | "amount_due_tax_paid_by" | "amount_due_penalty_paid_by" | "amount_due_interest_paid_by" | "amount_due_fine_paid_by" | "amount_due_fee_paid_by" | "amount_due_paid_date" | "amount_due_total_check_number" | "amount_due_tax_check_number" | "amount_due_penalty_check_number" | "amount_due_interest_check_number" | "amount_due_fine_check_number" | "amount_due_fee_check_number" | "amount_due_pi_amount" | "amount_due_payment_made" | "amount_due_payment_type" | "amount_due_tax_approver" | "updated_by" | "created_at" | "updated_at" | "is_use_actuals" | "pv_invoice_id";
export type wf_task_amount_dueCreationAttributes = Optional<wf_task_amount_dueAttributes, wf_task_amount_dueOptionalAttributes>;

export class wf_task_amount_due extends Model<wf_task_amount_dueAttributes, wf_task_amount_dueCreationAttributes> implements wf_task_amount_dueAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  amount_due_credit_amount?: number;
  amount_due_payment_amount?: number;
  amount_due_tax_amount?: number;
  amount_due_penalty_amount?: number;
  amount_due_interest_amount?: number;
  amount_due_fine_amount?: number;
  amount_due_fee_amount?: number;
  amount_due_original_total_amount?: number;
  is_amount_due?: string;
  amount_due_reason?: string;
  amount_due_allow_actual!: number;
  amount_due_actual_credit_amount?: number;
  amount_due_actual_payment_amount?: number;
  amount_due_actual_tax_amount?: number;
  amount_due_actual_penalty_amount?: number;
  amount_due_actual_interest_amount?: number;
  amount_due_actual_total_amount?: number;
  amount_due_total_variance?: number;
  amount_due_total_paid_by?: string;
  amount_due_tax_paid_by?: string;
  amount_due_penalty_paid_by?: string;
  amount_due_interest_paid_by?: string;
  amount_due_fine_paid_by?: string;
  amount_due_fee_paid_by?: string;
  amount_due_paid_date?: string;
  amount_due_total_check_number?: string;
  amount_due_tax_check_number?: string;
  amount_due_penalty_check_number?: string;
  amount_due_interest_check_number?: string;
  amount_due_fine_check_number?: string;
  amount_due_fee_check_number?: string;
  amount_due_pi_amount?: string;
  amount_due_payment_made?: string;
  amount_due_payment_type?: string;
  amount_due_tax_approver?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  is_use_actuals?: string;
  pv_invoice_id?: string;

  // wf_task_amount_due belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_amount_due belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_amount_due {
    return sequelize.define('wf_task_amount_due', {
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
    amount_due_credit_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_payment_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    amount_due_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_fine_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    amount_due_fee_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    amount_due_original_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    is_amount_due: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_allow_actual: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    amount_due_actual_credit_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_actual_payment_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    amount_due_actual_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_actual_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_actual_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_actual_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_total_variance: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount_due_total_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_tax_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_penalty_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_interest_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_fine_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_fee_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_paid_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    amount_due_total_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_tax_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_penalty_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_interest_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_fine_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_fee_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_pi_amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_payment_made: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_payment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_due_tax_approver: {
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
    },
    is_use_actuals: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pv_invoice_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_amount_due',
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
        name: "wf_task_amount_due_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_amount_due_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_amount_due;
  }
}
