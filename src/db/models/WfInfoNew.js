const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_info_new', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ants_notice_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    display_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    agency_form_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_workflow',
        key: 'id'
      }
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issuing_agency: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_agency',
        key: 'id'
      }
    },
    agency_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agency_dept: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_department',
        key: 'id'
      }
    },
    agency_local: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local',
        key: 'id'
      }
    },
    agency_city: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_city',
        key: 'id'
      }
    },
    tax_year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_period: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filling_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    notice_form: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_form: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_manager: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    received_form: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    received_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    agency_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    check_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    co_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    follow_up_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_completed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    attachment: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inquiry_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_time_spent_in_seconds: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    opened_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    opened_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    closed_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    entry_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    afc_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    afc_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    afc_expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poa_request_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poa_form: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Linked to agency_tax_forms",
      references: {
        model: 'agency_tax_forms',
        key: 'id'
      }
    },
    poa_recipient: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Likend to account_contact_info",
      references: {
        model: 'account_contact_info',
        key: 'id'
      }
    },
    poa_signature_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poa_expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poa_envelope_id: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    poa_info: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    poa_submit_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poa_submit_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    poa_submit_template_letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    seq_notice_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_class: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_sequential_notice: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    seq_notice_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salesforce_case_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_manager_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_manager_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_by_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    csr_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_info_new',
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
        name: "wf_info_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "wf_info_notice_type_index",
        using: "BTREE",
        fields: [
          { name: "notice_type" },
        ]
      },
      {
        name: "wf_info_issuing_agency_index",
        using: "BTREE",
        fields: [
          { name: "issuing_agency" },
        ]
      },
      {
        name: "wf_info_notice_manager_index",
        using: "BTREE",
        fields: [
          { name: "notice_manager" },
        ]
      },
      {
        name: "wf_info_agency_due_date_index",
        using: "BTREE",
        fields: [
          { name: "agency_due_date" },
        ]
      },
      {
        name: "wf_info_priority_index",
        using: "BTREE",
        fields: [
          { name: "priority" },
        ]
      },
      {
        name: "wf_info_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "wf_info_account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "wf_info_agency_dept_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_dept" },
        ]
      },
      {
        name: "wf_info_agency_local_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local" },
        ]
      },
      {
        name: "wf_info_agency_city_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_city" },
        ]
      },
      {
        name: "wf_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "wf_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "wf_info_poa_form_foreign",
        using: "BTREE",
        fields: [
          { name: "poa_form" },
        ]
      },
      {
        name: "wf_info_poa_recipient_foreign",
        using: "BTREE",
        fields: [
          { name: "poa_recipient" },
        ]
      },
    ]
  });
};
