import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_detail_arAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  wf_task_info_id: number;
  ar_who_completed?: string;
  ar_date_completed?: string;
  ar_billed_account?: string;
  ar_date_billed?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  ar_liability_due_type?: string;
  ar_no_return_needed?: number;
  ar_returns_created?: number;
  ar_liability_collected?: number;
  ar_liability_amount?: number;
  ar_filed_return?: number;
  ar_deposit_paid?: number;
  ar_date_filed?: string;
  ar_refund_due?: number;
  ar_refund_amount?: number;
  ar_letter_sent_date?: string;
  ar_letter_received_date?: string;
  ar_who_entered_adjustment?: string;
  ar_adjustment_type?: string;
  ar_adjustment_date_entered?: string;
  ar_review_date?: string;
  ar_review_by?: number;
}

export type wf_task_detail_arPk = "id";
export type wf_task_detail_arId = wf_task_detail_ar[wf_task_detail_arPk];
export type wf_task_detail_arOptionalAttributes = "id" | "ar_who_completed" | "ar_date_completed" | "ar_billed_account" | "ar_date_billed" | "created_by" | "updated_by" | "created_at" | "updated_at" | "ar_liability_due_type" | "ar_no_return_needed" | "ar_returns_created" | "ar_liability_collected" | "ar_liability_amount" | "ar_filed_return" | "ar_deposit_paid" | "ar_date_filed" | "ar_refund_due" | "ar_refund_amount" | "ar_letter_sent_date" | "ar_letter_received_date" | "ar_who_entered_adjustment" | "ar_adjustment_type" | "ar_adjustment_date_entered" | "ar_review_date" | "ar_review_by";
export type wf_task_detail_arCreationAttributes = Optional<wf_task_detail_arAttributes, wf_task_detail_arOptionalAttributes>;

export class wf_task_detail_ar extends Model<wf_task_detail_arAttributes, wf_task_detail_arCreationAttributes> implements wf_task_detail_arAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  wf_task_info_id!: number;
  ar_who_completed?: string;
  ar_date_completed?: string;
  ar_billed_account?: string;
  ar_date_billed?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  ar_liability_due_type?: string;
  ar_no_return_needed?: number;
  ar_returns_created?: number;
  ar_liability_collected?: number;
  ar_liability_amount?: number;
  ar_filed_return?: number;
  ar_deposit_paid?: number;
  ar_date_filed?: string;
  ar_refund_due?: number;
  ar_refund_amount?: number;
  ar_letter_sent_date?: string;
  ar_letter_received_date?: string;
  ar_who_entered_adjustment?: string;
  ar_adjustment_type?: string;
  ar_adjustment_date_entered?: string;
  ar_review_date?: string;
  ar_review_by?: number;

  // wf_task_detail_ar belongsTo app_user_info via ar_review_by
  ar_review_by_app_user_info!: app_user_info;
  getAr_review_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setAr_review_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createAr_review_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_task_detail_ar belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_detail_ar belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_detail_ar {
    return sequelize.define('wf_task_detail_ar', {
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
    wf_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ar_who_completed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_date_completed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_billed_account: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_date_billed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    ar_liability_due_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_no_return_needed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_returns_created: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_liability_collected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_liability_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ar_filed_return: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_deposit_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_date_filed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_refund_due: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ar_refund_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ar_letter_sent_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_letter_received_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_who_entered_adjustment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_adjustment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_adjustment_date_entered: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_review_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_review_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'wf_task_detail_ar',
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
        name: "wf_task_detail_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_detail_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "wf_task_detail_ar_review_by",
        using: "BTREE",
        fields: [
          { name: "ar_review_by" },
        ]
      },
    ]
  }) as typeof wf_task_detail_ar;
  }
}
