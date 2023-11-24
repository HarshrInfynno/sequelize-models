import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_detailAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  workflow_task_info_id: number;
  issuing_country?: number;
  issuing_agency?: number;
  agency_type?: string;
  vc_is_verification_completed?: string;
  vc_verification_date?: string;
  ua_is_account_updated?: string;
  ua_what_update_made?: string;
  ua_date_account_updated?: string;
  ua_is_followup_needed?: string;
  vi_updated_vendor?: string;
  vi_vendor_updated?: string;
  vi_updated_datetime?: Date;
  vf_account_change_type?: string;
  vf_date_verified?: string;
  up_has_deposit_freuency_updated?: string;
  up_date_deposit_freuency_updated?: string;
  sr_type_of_information_submited?: string;
  sr_date_information_submited?: string;
  ar_returned_filed?: string;
  ar_return_date_filed?: string;
  ar_created_by?: number;
  fu_type?: string;
  fu_is_follow_up_done?: string;
  fu_is_more_follw_up_needed?: string;
  fu_is_agency_follow_up_done?: string;
  fu_is_agency_more_follw_up_needed?: string;
  fu_needed_by?: number;
  bi_is_workflow_billable?: string;
  bi_total_time_spent_in_minutes?: number;
  bi_bill_amount?: number;
  bi_date_bill_sent?: string;
  bi_created_by?: number;
  vd_updated_vendor?: string;
  vd_vendor_updated?: string;
  vd_vendor_updated_datetime?: string;
  vd_updated_by?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  type_of_information?: string;
  date_information_requested?: string;
  date_information_received?: string;
}

export type wf_task_detailPk = "id";
export type wf_task_detailId = wf_task_detail[wf_task_detailPk];
export type wf_task_detailOptionalAttributes = "id" | "issuing_country" | "issuing_agency" | "agency_type" | "vc_is_verification_completed" | "vc_verification_date" | "ua_is_account_updated" | "ua_what_update_made" | "ua_date_account_updated" | "ua_is_followup_needed" | "vi_updated_vendor" | "vi_vendor_updated" | "vi_updated_datetime" | "vf_account_change_type" | "vf_date_verified" | "up_has_deposit_freuency_updated" | "up_date_deposit_freuency_updated" | "sr_type_of_information_submited" | "sr_date_information_submited" | "ar_returned_filed" | "ar_return_date_filed" | "ar_created_by" | "fu_type" | "fu_is_follow_up_done" | "fu_is_more_follw_up_needed" | "fu_is_agency_follow_up_done" | "fu_is_agency_more_follw_up_needed" | "fu_needed_by" | "bi_is_workflow_billable" | "bi_total_time_spent_in_minutes" | "bi_bill_amount" | "bi_date_bill_sent" | "bi_created_by" | "vd_updated_vendor" | "vd_vendor_updated" | "vd_vendor_updated_datetime" | "vd_updated_by" | "created_by" | "updated_by" | "created_at" | "updated_at" | "type_of_information" | "date_information_requested" | "date_information_received";
export type wf_task_detailCreationAttributes = Optional<wf_task_detailAttributes, wf_task_detailOptionalAttributes>;

export class wf_task_detail extends Model<wf_task_detailAttributes, wf_task_detailCreationAttributes> implements wf_task_detailAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  workflow_task_info_id!: number;
  issuing_country?: number;
  issuing_agency?: number;
  agency_type?: string;
  vc_is_verification_completed?: string;
  vc_verification_date?: string;
  ua_is_account_updated?: string;
  ua_what_update_made?: string;
  ua_date_account_updated?: string;
  ua_is_followup_needed?: string;
  vi_updated_vendor?: string;
  vi_vendor_updated?: string;
  vi_updated_datetime?: Date;
  vf_account_change_type?: string;
  vf_date_verified?: string;
  up_has_deposit_freuency_updated?: string;
  up_date_deposit_freuency_updated?: string;
  sr_type_of_information_submited?: string;
  sr_date_information_submited?: string;
  ar_returned_filed?: string;
  ar_return_date_filed?: string;
  ar_created_by?: number;
  fu_type?: string;
  fu_is_follow_up_done?: string;
  fu_is_more_follw_up_needed?: string;
  fu_is_agency_follow_up_done?: string;
  fu_is_agency_more_follw_up_needed?: string;
  fu_needed_by?: number;
  bi_is_workflow_billable?: string;
  bi_total_time_spent_in_minutes?: number;
  bi_bill_amount?: number;
  bi_date_bill_sent?: string;
  bi_created_by?: number;
  vd_updated_vendor?: string;
  vd_vendor_updated?: string;
  vd_vendor_updated_datetime?: string;
  vd_updated_by?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  type_of_information?: string;
  date_information_requested?: string;
  date_information_received?: string;

  // wf_task_detail belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_detail belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_detail {
    return sequelize.define('wf_task_detail', {
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
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    vc_is_verification_completed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vc_verification_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ua_is_account_updated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ua_what_update_made: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ua_date_account_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ua_is_followup_needed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vi_updated_vendor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vi_vendor_updated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vi_updated_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vf_account_change_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vf_date_verified: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    up_has_deposit_freuency_updated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    up_date_deposit_freuency_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sr_type_of_information_submited: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sr_date_information_submited: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_returned_filed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_return_date_filed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ar_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    fu_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fu_is_follow_up_done: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fu_is_more_follw_up_needed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fu_is_agency_follow_up_done: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fu_is_agency_more_follw_up_needed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fu_needed_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    bi_is_workflow_billable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bi_total_time_spent_in_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bi_bill_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    bi_date_bill_sent: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bi_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    vd_updated_vendor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vd_vendor_updated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vd_vendor_updated_datetime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vd_updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
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
    type_of_information: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_information_requested: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_information_received: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_detail',
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
    ]
  }) as typeof wf_task_detail;
  }
}
