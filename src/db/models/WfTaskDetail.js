const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
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
  });
};
