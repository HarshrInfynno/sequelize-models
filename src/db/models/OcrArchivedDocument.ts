import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { account_info, account_infoId } from './AccountInfo';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_country, agency_countryId } from './AgencyCountry';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface ocr_archived_documentAttributes {
  id: number;
  wf_display_id?: number;
  wf_info_id?: number;
  synced_at?: Date;
  document_id?: string;
  s3_path?: string;
  s3_name?: string;
  file_text?: string;
  csv_files_locations?: object;
  document_processed: string;
  total_pages?: number;
  tax_period?: string;
  tax_year?: string;
  tax_form?: string;
  amount_due?: string;
  agency_form_number?: string;
  payment_type?: string;
  amount_type?: string;
  credit_amount?: string;
  payment_amount?: string;
  tax_amount?: string;
  penalty_amount?: string;
  interest_amount?: string;
  fine_amount?: string;
  fee_amount?: string;
  tax_refund_amount?: string;
  penalty_refund_amount?: string;
  interest_refund_amount?: string;
  major_rate_1?: string;
  minor_rate_1?: string;
  minor_rate_2?: string;
  minor_rate_3?: string;
  rate_start_date?: string;
  sdi_rate?: string;
  issue_date?: string;
  received_date?: string;
  agency_due_date?: string;
  check_date?: string;
  co_due_date?: string;
  follow_up_date?: string;
  due_date?: string;
  agency_type?: 'Department' | 'Local' | 'City';
  agency_dept_id?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  notice_type_id?: number;
  account_agency_id?: number;
  agency_tax_type_id?: number;
  agency_info_id?: number;
  co_info_id?: number;
  created_by: number;
  agency_countries_id?: number;
  account_info_id?: number;
  wf_description?: string;
  agency_form_number_id?: number;
  created_at?: Date;
  updated_at?: Date;
  filing_type_id?: number;
  refund_due?: string;
  inquiry_id?: string;
  sql_notice?: number;
  priority?: string;
  notice_manager?: number;
  seq_notice_id?: number;
  agency_id_to_use_value?: string;
  agency_id_to_use?: string;
  verified?: number;
  query_results?: object;
  textract_process_count?: number;
  parent_id?: number;
  actual_pages?: number;
}

export type ocr_archived_documentPk = "id";
export type ocr_archived_documentId = ocr_archived_document[ocr_archived_documentPk];
export type ocr_archived_documentOptionalAttributes = "id" | "wf_display_id" | "wf_info_id" | "synced_at" | "document_id" | "s3_path" | "s3_name" | "file_text" | "csv_files_locations" | "document_processed" | "total_pages" | "tax_period" | "tax_year" | "tax_form" | "amount_due" | "agency_form_number" | "payment_type" | "amount_type" | "credit_amount" | "payment_amount" | "tax_amount" | "penalty_amount" | "interest_amount" | "fine_amount" | "fee_amount" | "tax_refund_amount" | "penalty_refund_amount" | "interest_refund_amount" | "major_rate_1" | "minor_rate_1" | "minor_rate_2" | "minor_rate_3" | "rate_start_date" | "sdi_rate" | "issue_date" | "received_date" | "agency_due_date" | "check_date" | "co_due_date" | "follow_up_date" | "due_date" | "agency_type" | "agency_dept_id" | "agency_local_id" | "agency_city_id" | "notice_type_id" | "account_agency_id" | "agency_tax_type_id" | "agency_info_id" | "co_info_id" | "agency_countries_id" | "account_info_id" | "wf_description" | "agency_form_number_id" | "created_at" | "updated_at" | "filing_type_id" | "refund_due" | "inquiry_id" | "sql_notice" | "priority" | "notice_manager" | "seq_notice_id" | "agency_id_to_use_value" | "agency_id_to_use" | "verified" | "query_results" | "textract_process_count" | "parent_id" | "actual_pages";
export type ocr_archived_documentCreationAttributes = Optional<ocr_archived_documentAttributes, ocr_archived_documentOptionalAttributes>;

export class ocr_archived_document extends Model<ocr_archived_documentAttributes, ocr_archived_documentCreationAttributes> implements ocr_archived_documentAttributes {
  id!: number;
  wf_display_id?: number;
  wf_info_id?: number;
  synced_at?: Date;
  document_id?: string;
  s3_path?: string;
  s3_name?: string;
  file_text?: string;
  csv_files_locations?: object;
  document_processed!: string;
  total_pages?: number;
  tax_period?: string;
  tax_year?: string;
  tax_form?: string;
  amount_due?: string;
  agency_form_number?: string;
  payment_type?: string;
  amount_type?: string;
  credit_amount?: string;
  payment_amount?: string;
  tax_amount?: string;
  penalty_amount?: string;
  interest_amount?: string;
  fine_amount?: string;
  fee_amount?: string;
  tax_refund_amount?: string;
  penalty_refund_amount?: string;
  interest_refund_amount?: string;
  major_rate_1?: string;
  minor_rate_1?: string;
  minor_rate_2?: string;
  minor_rate_3?: string;
  rate_start_date?: string;
  sdi_rate?: string;
  issue_date?: string;
  received_date?: string;
  agency_due_date?: string;
  check_date?: string;
  co_due_date?: string;
  follow_up_date?: string;
  due_date?: string;
  agency_type?: 'Department' | 'Local' | 'City';
  agency_dept_id?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  notice_type_id?: number;
  account_agency_id?: number;
  agency_tax_type_id?: number;
  agency_info_id?: number;
  co_info_id?: number;
  created_by!: number;
  agency_countries_id?: number;
  account_info_id?: number;
  wf_description?: string;
  agency_form_number_id?: number;
  created_at?: Date;
  updated_at?: Date;
  filing_type_id?: number;
  refund_due?: string;
  inquiry_id?: string;
  sql_notice?: number;
  priority?: string;
  notice_manager?: number;
  seq_notice_id?: number;
  agency_id_to_use_value?: string;
  agency_id_to_use?: string;
  verified?: number;
  query_results?: object;
  textract_process_count?: number;
  parent_id?: number;
  actual_pages?: number;

  // ocr_archived_document belongsTo account_agency via account_agency_id
  account_agency!: account_agency;
  getAccount_agency!: Sequelize.BelongsToGetAssociationMixin<account_agency>;
  setAccount_agency!: Sequelize.BelongsToSetAssociationMixin<account_agency, account_agencyId>;
  createAccount_agency!: Sequelize.BelongsToCreateAssociationMixin<account_agency>;
  // ocr_archived_document belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // ocr_archived_document belongsTo agency_city via agency_city_id
  agency_city!: agency_city;
  getAgency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // ocr_archived_document belongsTo agency_country via agency_countries_id
  agency_country!: agency_country;
  getAgency_country!: Sequelize.BelongsToGetAssociationMixin<agency_country>;
  setAgency_country!: Sequelize.BelongsToSetAssociationMixin<agency_country, agency_countryId>;
  createAgency_country!: Sequelize.BelongsToCreateAssociationMixin<agency_country>;
  // ocr_archived_document belongsTo agency_department via agency_dept_id
  agency_dept!: agency_department;
  getAgency_dept!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_dept!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_dept!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // ocr_archived_document belongsTo agency_form_number via agency_form_number_id
  agency_form_number!: agency_form_number;
  getAgency_form_number!: Sequelize.BelongsToGetAssociationMixin<agency_form_number>;
  setAgency_form_number!: Sequelize.BelongsToSetAssociationMixin<agency_form_number, agency_form_numberId>;
  createAgency_form_number!: Sequelize.BelongsToCreateAssociationMixin<agency_form_number>;
  // ocr_archived_document belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // ocr_archived_document belongsTo agency_local via agency_local_id
  agency_local!: agency_local;
  getAgency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // ocr_archived_document belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // ocr_archived_document belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // ocr_archived_document belongsTo sys_workflow via notice_type_id
  notice_type!: sys_workflow;
  getNotice_type!: Sequelize.BelongsToGetAssociationMixin<sys_workflow>;
  setNotice_type!: Sequelize.BelongsToSetAssociationMixin<sys_workflow, sys_workflowId>;
  createNotice_type!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ocr_archived_document {
    return sequelize.define('ocr_archived_document', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wf_display_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    document_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    s3_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    s3_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    csv_files_locations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    document_processed: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "PROCESSING"
    },
    total_pages: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_period: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tax_year: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tax_form: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    amount_due: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    agency_form_number: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    credit_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    payment_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tax_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    penalty_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    interest_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    fine_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    fee_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tax_refund_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    penalty_refund_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    interest_refund_amount: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    major_rate_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    minor_rate_2: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    minor_rate_3: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    rate_start_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    sdi_rate: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    issue_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    received_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    agency_due_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    check_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    co_due_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    follow_up_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    due_date: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.ENUM('Department','Local','City'),
      allowNull: true
    },
    agency_dept_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_department',
        key: 'id'
      }
    },
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local',
        key: 'id'
      }
    },
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_city',
        key: 'id'
      }
    },
    notice_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_workflow',
        key: 'id'
      }
    },
    account_agency_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_agency',
        key: 'id'
      }
    },
    agency_tax_type_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    agency_countries_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    wf_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_form_number_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_form_numbers',
        key: 'id'
      }
    },
    filing_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    refund_due: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    inquiry_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sql_notice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_manager: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    seq_notice_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agency_id_to_use_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_id_to_use: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    query_results: {
      type: DataTypes.JSON,
      allowNull: true
    },
    textract_process_count: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    actual_pages: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    tableName: 'ocr_archived_documents',
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
        name: "agency_dept_id",
        using: "BTREE",
        fields: [
          { name: "agency_dept_id" },
        ]
      },
      {
        name: "agency_local_id",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_city_id",
        using: "BTREE",
        fields: [
          { name: "agency_city_id" },
        ]
      },
      {
        name: "notice_type_id",
        using: "BTREE",
        fields: [
          { name: "notice_type_id" },
        ]
      },
      {
        name: "account_agency_id",
        using: "BTREE",
        fields: [
          { name: "account_agency_id" },
        ]
      },
      {
        name: "agency_tax_type_id",
        using: "BTREE",
        fields: [
          { name: "agency_tax_type_id" },
        ]
      },
      {
        name: "agency_info_id",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "co_info_id",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_countries_id",
        using: "BTREE",
        fields: [
          { name: "agency_countries_id" },
        ]
      },
      {
        name: "account_info_id",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "agency_form_number_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_id" },
        ]
      },
      {
        name: "filing_type_id",
        using: "BTREE",
        fields: [
          { name: "filing_type_id" },
        ]
      },
    ]
  }) as typeof ocr_archived_document;
  }
}
