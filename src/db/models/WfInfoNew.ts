import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { account_info, account_infoId } from './AccountInfo';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_tax_form, agency_tax_formId } from './AgencyTaxForm';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface wf_info_newAttributes {
  id: number;
  ants_notice_id?: number;
  display_id?: number;
  co_info_id: number;
  account_info_id?: number;
  agency_form_number?: string;
  notice_type?: number;
  workflow_type?: string;
  issuing_agency?: number;
  agency_type?: string;
  agency_dept?: number;
  agency_local?: number;
  agency_city?: number;
  tax_year?: string;
  tax_period?: string;
  filling_type?: number;
  notice_form?: string;
  category?: string;
  tax_form?: string;
  notice_manager?: number;
  received_form?: string;
  tax_type?: string;
  priority?: string;
  amount_type?: string;
  issue_date?: string;
  received_date?: string;
  agency_due_date?: string;
  check_date?: string;
  co_due_date?: string;
  follow_up_date?: string;
  due_date?: string;
  date_completed?: string;
  attachment?: number;
  status?: string;
  inquiry_id?: string;
  total_time_spent_in_seconds?: number;
  created_by?: number;
  updated_by?: number;
  opened_at?: Date;
  opened_by?: number;
  closed_at?: Date;
  closed_by?: number;
  created_at?: Date;
  updated_at?: Date;
  entry_type?: string;
  afc_amount?: number;
  afc_check_number?: string;
  afc_expiration_date?: string;
  poa_request_type?: string;
  poa_form?: number;
  poa_recipient?: number;
  poa_signature_date?: string;
  poa_expiration_date?: string;
  poa_envelope_id?: string;
  poa_info?: number;
  poa_submit_date?: string;
  poa_submit_type?: string;
  poa_submit_template_letter_id?: number;
  seq_notice_id?: number;
  workflow_class?: string;
  is_sequential_notice?: number;
  seq_notice_number?: number;
  salesforce_case_id?: string;
  sub_type_name?: string;
  notice_manager_name?: string;
  notice_manager_pic?: string;
  account_id?: string;
  account_name?: string;
  updated_by_name?: string;
  created_by_name?: string;
  csr_name?: string;
  location_name?: string;
}

export type wf_info_newPk = "id";
export type wf_info_newId = wf_info_new[wf_info_newPk];
export type wf_info_newOptionalAttributes = "id" | "ants_notice_id" | "display_id" | "account_info_id" | "agency_form_number" | "notice_type" | "workflow_type" | "issuing_agency" | "agency_type" | "agency_dept" | "agency_local" | "agency_city" | "tax_year" | "tax_period" | "filling_type" | "notice_form" | "category" | "tax_form" | "notice_manager" | "received_form" | "tax_type" | "priority" | "amount_type" | "issue_date" | "received_date" | "agency_due_date" | "check_date" | "co_due_date" | "follow_up_date" | "due_date" | "date_completed" | "attachment" | "status" | "inquiry_id" | "total_time_spent_in_seconds" | "created_by" | "updated_by" | "opened_at" | "opened_by" | "closed_at" | "closed_by" | "created_at" | "updated_at" | "entry_type" | "afc_amount" | "afc_check_number" | "afc_expiration_date" | "poa_request_type" | "poa_form" | "poa_recipient" | "poa_signature_date" | "poa_expiration_date" | "poa_envelope_id" | "poa_info" | "poa_submit_date" | "poa_submit_type" | "poa_submit_template_letter_id" | "seq_notice_id" | "workflow_class" | "is_sequential_notice" | "seq_notice_number" | "salesforce_case_id" | "sub_type_name" | "notice_manager_name" | "notice_manager_pic" | "account_id" | "account_name" | "updated_by_name" | "created_by_name" | "csr_name" | "location_name";
export type wf_info_newCreationAttributes = Optional<wf_info_newAttributes, wf_info_newOptionalAttributes>;

export class wf_info_new extends Model<wf_info_newAttributes, wf_info_newCreationAttributes> implements wf_info_newAttributes {
  id!: number;
  ants_notice_id?: number;
  display_id?: number;
  co_info_id!: number;
  account_info_id?: number;
  agency_form_number?: string;
  notice_type?: number;
  workflow_type?: string;
  issuing_agency?: number;
  agency_type?: string;
  agency_dept?: number;
  agency_local?: number;
  agency_city?: number;
  tax_year?: string;
  tax_period?: string;
  filling_type?: number;
  notice_form?: string;
  category?: string;
  tax_form?: string;
  notice_manager?: number;
  received_form?: string;
  tax_type?: string;
  priority?: string;
  amount_type?: string;
  issue_date?: string;
  received_date?: string;
  agency_due_date?: string;
  check_date?: string;
  co_due_date?: string;
  follow_up_date?: string;
  due_date?: string;
  date_completed?: string;
  attachment?: number;
  status?: string;
  inquiry_id?: string;
  total_time_spent_in_seconds?: number;
  created_by?: number;
  updated_by?: number;
  opened_at?: Date;
  opened_by?: number;
  closed_at?: Date;
  closed_by?: number;
  created_at?: Date;
  updated_at?: Date;
  entry_type?: string;
  afc_amount?: number;
  afc_check_number?: string;
  afc_expiration_date?: string;
  poa_request_type?: string;
  poa_form?: number;
  poa_recipient?: number;
  poa_signature_date?: string;
  poa_expiration_date?: string;
  poa_envelope_id?: string;
  poa_info?: number;
  poa_submit_date?: string;
  poa_submit_type?: string;
  poa_submit_template_letter_id?: number;
  seq_notice_id?: number;
  workflow_class?: string;
  is_sequential_notice?: number;
  seq_notice_number?: number;
  salesforce_case_id?: string;
  sub_type_name?: string;
  notice_manager_name?: string;
  notice_manager_pic?: string;
  account_id?: string;
  account_name?: string;
  updated_by_name?: string;
  created_by_name?: string;
  csr_name?: string;
  location_name?: string;

  // wf_info_new belongsTo account_agency via issuing_agency
  issuing_agency_account_agency!: account_agency;
  getIssuing_agency_account_agency!: Sequelize.BelongsToGetAssociationMixin<account_agency>;
  setIssuing_agency_account_agency!: Sequelize.BelongsToSetAssociationMixin<account_agency, account_agencyId>;
  createIssuing_agency_account_agency!: Sequelize.BelongsToCreateAssociationMixin<account_agency>;
  // wf_info_new belongsTo account_contact_info via poa_recipient
  poa_recipient_account_contact_info!: account_contact_info;
  getPoa_recipient_account_contact_info!: Sequelize.BelongsToGetAssociationMixin<account_contact_info>;
  setPoa_recipient_account_contact_info!: Sequelize.BelongsToSetAssociationMixin<account_contact_info, account_contact_infoId>;
  createPoa_recipient_account_contact_info!: Sequelize.BelongsToCreateAssociationMixin<account_contact_info>;
  // wf_info_new belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // wf_info_new belongsTo agency_city via agency_city
  agency_city_agency_city!: agency_city;
  getAgency_city_agency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city_agency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city_agency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // wf_info_new belongsTo agency_department via agency_dept
  agency_dept_agency_department!: agency_department;
  getAgency_dept_agency_department!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_dept_agency_department!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_dept_agency_department!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // wf_info_new belongsTo agency_local via agency_local
  agency_local_agency_local!: agency_local;
  getAgency_local_agency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local_agency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local_agency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // wf_info_new belongsTo agency_tax_form via poa_form
  poa_form_agency_tax_form!: agency_tax_form;
  getPoa_form_agency_tax_form!: Sequelize.BelongsToGetAssociationMixin<agency_tax_form>;
  setPoa_form_agency_tax_form!: Sequelize.BelongsToSetAssociationMixin<agency_tax_form, agency_tax_formId>;
  createPoa_form_agency_tax_form!: Sequelize.BelongsToCreateAssociationMixin<agency_tax_form>;
  // wf_info_new belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_info_new belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_info_new belongsTo sys_workflow via notice_type
  notice_type_sys_workflow!: sys_workflow;
  getNotice_type_sys_workflow!: Sequelize.BelongsToGetAssociationMixin<sys_workflow>;
  setNotice_type_sys_workflow!: Sequelize.BelongsToSetAssociationMixin<sys_workflow, sys_workflowId>;
  createNotice_type_sys_workflow!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_info_new {
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
  }) as typeof wf_info_new;
  }
}
