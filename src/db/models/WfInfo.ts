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
import type { wf_bulk_notice, wf_bulk_noticeId } from './WfBulkNotice';
import type { wf_multiple_tax_period, wf_multiple_tax_periodId } from './WfMultipleTaxPeriod';
import type { wf_note, wf_noteId } from './WfNote';
import type { wf_task_abatement, wf_task_abatementId } from './WfTaskAbatement';
import type { wf_task_amount_due, wf_task_amount_dueId } from './WfTaskAmountDue';
import type { wf_task_closure, wf_task_closureId } from './WfTaskClosure';
import type { wf_task_contact, wf_task_contactId } from './WfTaskContact';
import type { wf_task_deposit_refund, wf_task_deposit_refundId } from './WfTaskDepositRefund';
import type { wf_task_detail, wf_task_detailId } from './WfTaskDetail';
import type { wf_task_detail_ar, wf_task_detail_arId } from './WfTaskDetailAr';
import type { wf_task_detail_reg, wf_task_detail_regId } from './WfTaskDetailReg';
import type { wf_task_guidance, wf_task_guidanceId } from './WfTaskGuidance';
import type { wf_task_moved_payment_info, wf_task_moved_payment_infoId } from './WfTaskMovedPaymentInfo';
import type { wf_task_rate, wf_task_rateId } from './WfTaskRate';
import type { wf_task_refund_due, wf_task_refund_dueId } from './WfTaskRefundDue';
import type { wf_task_research, wf_task_researchId } from './WfTaskResearch';

export interface wf_infoAttributes {
  id: number;
  ants_notice_id?: number;
  ocr_scanned_document_id?: number;
  display_id?: number;
  co_info_id: number;
  account_info_id?: number;
  wf_description?: string;
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
  poa_submit_template_letter_id?: string;
  seq_notice_id?: number;
  workflow_class?: string;
  is_sequential_notice?: number;
  seq_notice_number?: number;
  salesforce_case_id?: string;
  zendesk_ticket_id?: string;
  sub_type_name?: string;
  notice_manager_name?: string;
  notice_manager_pic?: string;
  account_id?: string;
  account_name?: string;
  updated_by_name?: string;
  created_by_name?: string;
  csr_name?: string;
  location_name?: string;
  last_note_entered?: Date;
  ar_reason_for_request?: string;
  ar_responsible_party?: string;
  ar_affected_agencies?: object;
  ar_affected_locals?: object;
  ar_total_returns?: number;
  ar_total_employees?: number;
  ar_total_w2c?: number;
  ar_multiple_years?: object;
  ar_country?: number;
  manager_2?: string;
  ar_affected_agencies_count?: number;
  ar_affected_locals_count?: number;
  is_bulk?: number;
  agency_id_to_use?: string;
  agency_id_to_use_value?: string;
  poa_agency_confirmation_date?: string;
  poa_confirm_by?: number;
  ar_number_of_states?: number;
  ar_number_of_years?: number;
  reg_type?: string;
  selected_reg_agency_id?: number;
  selected_reg_agency_name?: string;
  reg_form?: number;
  reg_taxable_wages?: number;
  reg_undeposited_funds?: number;
  reg_pending_deposits?: number;
  reg_1st_date_service_performed?: Date;
  reg_1st_date_wages_paid?: Date;
  reg_1st_q_number_ees?: number;
  reg_1st_q_state_wages?: number;
  reg_1st_q_ui_wages?: number;
  ar_total_w2?: number;
  ar_number_of_quarters?: number;
  amount_due_total_amount?: number;
  refund_due_total_amount?: number;
  reg_submittal_type?: string;
  reg_agency_process_date?: Date;
  reg_submitted_date?: Date;
  agency_department_name?: string;
  agency_local_name?: string;
  agency_city_name?: string;
  issuing_agency_name?: string;
  agency_info_id?: number;
  workflow_type_id?: number;
  workflow_type_name?: string;
  filling_type_name?: string;
  completed_tasks?: number;
  total_tasks?: number;
  current_task?: string;
  tax_type_name?: string;
  old_tax_type?: string;
  old_filling_type?: number;
  tax_type_id?: number;
  country?: number;
  workflow_multiple_tax_periods?: string;
  pv_payment_status?: string;
  pv_link_to_ap?: string;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;
  notice_funded?: number;
  wf_approved?: number;
  payment_type?: string;
  major_rate?: number;
  minor_rate_1?: number;
  minor_rate_2?: number;
  minor_rate_3?: number;
  ui_total_rate?: number;
  ui_start_date?: string;
  approved_date?: Date;
  rejected_date?: Date;
  uid?: string;
  reg_closed_acct?: number;
  reg_close_date?: string;
}

export type wf_infoPk = "id";
export type wf_infoId = wf_info[wf_infoPk];
export type wf_infoOptionalAttributes = "id" | "ants_notice_id" | "ocr_scanned_document_id" | "display_id" | "account_info_id" | "wf_description" | "agency_form_number" | "notice_type" | "workflow_type" | "issuing_agency" | "agency_type" | "agency_dept" | "agency_local" | "agency_city" | "tax_year" | "tax_period" | "filling_type" | "notice_form" | "category" | "tax_form" | "notice_manager" | "received_form" | "tax_type" | "priority" | "amount_type" | "issue_date" | "received_date" | "agency_due_date" | "check_date" | "co_due_date" | "follow_up_date" | "due_date" | "date_completed" | "attachment" | "status" | "inquiry_id" | "total_time_spent_in_seconds" | "created_by" | "updated_by" | "opened_at" | "opened_by" | "closed_at" | "closed_by" | "created_at" | "updated_at" | "entry_type" | "afc_amount" | "afc_check_number" | "afc_expiration_date" | "poa_request_type" | "poa_form" | "poa_recipient" | "poa_signature_date" | "poa_expiration_date" | "poa_envelope_id" | "poa_info" | "poa_submit_date" | "poa_submit_type" | "poa_submit_template_letter_id" | "seq_notice_id" | "workflow_class" | "is_sequential_notice" | "seq_notice_number" | "salesforce_case_id" | "zendesk_ticket_id" | "sub_type_name" | "notice_manager_name" | "notice_manager_pic" | "account_id" | "account_name" | "updated_by_name" | "created_by_name" | "csr_name" | "location_name" | "last_note_entered" | "ar_reason_for_request" | "ar_responsible_party" | "ar_affected_agencies" | "ar_affected_locals" | "ar_total_returns" | "ar_total_employees" | "ar_total_w2c" | "ar_multiple_years" | "ar_country" | "manager_2" | "ar_affected_agencies_count" | "ar_affected_locals_count" | "is_bulk" | "agency_id_to_use" | "agency_id_to_use_value" | "poa_agency_confirmation_date" | "poa_confirm_by" | "ar_number_of_states" | "ar_number_of_years" | "reg_type" | "selected_reg_agency_id" | "selected_reg_agency_name" | "reg_form" | "reg_taxable_wages" | "reg_undeposited_funds" | "reg_pending_deposits" | "reg_1st_date_service_performed" | "reg_1st_date_wages_paid" | "reg_1st_q_number_ees" | "reg_1st_q_state_wages" | "reg_1st_q_ui_wages" | "ar_total_w2" | "ar_number_of_quarters" | "amount_due_total_amount" | "refund_due_total_amount" | "reg_submittal_type" | "reg_agency_process_date" | "reg_submitted_date" | "agency_department_name" | "agency_local_name" | "agency_city_name" | "issuing_agency_name" | "agency_info_id" | "workflow_type_id" | "workflow_type_name" | "filling_type_name" | "completed_tasks" | "total_tasks" | "current_task" | "tax_type_name" | "old_tax_type" | "old_filling_type" | "tax_type_id" | "country" | "workflow_multiple_tax_periods" | "pv_payment_status" | "pv_link_to_ap" | "cc1" | "cc2" | "cc3" | "cc4" | "cc5" | "notice_funded" | "wf_approved" | "payment_type" | "major_rate" | "minor_rate_1" | "minor_rate_2" | "minor_rate_3" | "ui_total_rate" | "ui_start_date" | "approved_date" | "rejected_date" | "uid" | "reg_closed_acct" | "reg_close_date";
export type wf_infoCreationAttributes = Optional<wf_infoAttributes, wf_infoOptionalAttributes>;

export class wf_info extends Model<wf_infoAttributes, wf_infoCreationAttributes> implements wf_infoAttributes {
  id!: number;
  ants_notice_id?: number;
  ocr_scanned_document_id?: number;
  display_id?: number;
  co_info_id!: number;
  account_info_id?: number;
  wf_description?: string;
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
  poa_submit_template_letter_id?: string;
  seq_notice_id?: number;
  workflow_class?: string;
  is_sequential_notice?: number;
  seq_notice_number?: number;
  salesforce_case_id?: string;
  zendesk_ticket_id?: string;
  sub_type_name?: string;
  notice_manager_name?: string;
  notice_manager_pic?: string;
  account_id?: string;
  account_name?: string;
  updated_by_name?: string;
  created_by_name?: string;
  csr_name?: string;
  location_name?: string;
  last_note_entered?: Date;
  ar_reason_for_request?: string;
  ar_responsible_party?: string;
  ar_affected_agencies?: object;
  ar_affected_locals?: object;
  ar_total_returns?: number;
  ar_total_employees?: number;
  ar_total_w2c?: number;
  ar_multiple_years?: object;
  ar_country?: number;
  manager_2?: string;
  ar_affected_agencies_count?: number;
  ar_affected_locals_count?: number;
  is_bulk?: number;
  agency_id_to_use?: string;
  agency_id_to_use_value?: string;
  poa_agency_confirmation_date?: string;
  poa_confirm_by?: number;
  ar_number_of_states?: number;
  ar_number_of_years?: number;
  reg_type?: string;
  selected_reg_agency_id?: number;
  selected_reg_agency_name?: string;
  reg_form?: number;
  reg_taxable_wages?: number;
  reg_undeposited_funds?: number;
  reg_pending_deposits?: number;
  reg_1st_date_service_performed?: Date;
  reg_1st_date_wages_paid?: Date;
  reg_1st_q_number_ees?: number;
  reg_1st_q_state_wages?: number;
  reg_1st_q_ui_wages?: number;
  ar_total_w2?: number;
  ar_number_of_quarters?: number;
  amount_due_total_amount?: number;
  refund_due_total_amount?: number;
  reg_submittal_type?: string;
  reg_agency_process_date?: Date;
  reg_submitted_date?: Date;
  agency_department_name?: string;
  agency_local_name?: string;
  agency_city_name?: string;
  issuing_agency_name?: string;
  agency_info_id?: number;
  workflow_type_id?: number;
  workflow_type_name?: string;
  filling_type_name?: string;
  completed_tasks?: number;
  total_tasks?: number;
  current_task?: string;
  tax_type_name?: string;
  old_tax_type?: string;
  old_filling_type?: number;
  tax_type_id?: number;
  country?: number;
  workflow_multiple_tax_periods?: string;
  pv_payment_status?: string;
  pv_link_to_ap?: string;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;
  notice_funded?: number;
  wf_approved?: number;
  payment_type?: string;
  major_rate?: number;
  minor_rate_1?: number;
  minor_rate_2?: number;
  minor_rate_3?: number;
  ui_total_rate?: number;
  ui_start_date?: string;
  approved_date?: Date;
  rejected_date?: Date;
  uid?: string;
  reg_closed_acct?: number;
  reg_close_date?: string;

  // wf_info belongsTo account_agency via issuing_agency
  issuing_agency_account_agency!: account_agency;
  getIssuing_agency_account_agency!: Sequelize.BelongsToGetAssociationMixin<account_agency>;
  setIssuing_agency_account_agency!: Sequelize.BelongsToSetAssociationMixin<account_agency, account_agencyId>;
  createIssuing_agency_account_agency!: Sequelize.BelongsToCreateAssociationMixin<account_agency>;
  // wf_info belongsTo account_contact_info via poa_recipient
  poa_recipient_account_contact_info!: account_contact_info;
  getPoa_recipient_account_contact_info!: Sequelize.BelongsToGetAssociationMixin<account_contact_info>;
  setPoa_recipient_account_contact_info!: Sequelize.BelongsToSetAssociationMixin<account_contact_info, account_contact_infoId>;
  createPoa_recipient_account_contact_info!: Sequelize.BelongsToCreateAssociationMixin<account_contact_info>;
  // wf_info belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // wf_info belongsTo agency_city via agency_city
  agency_city_agency_city!: agency_city;
  getAgency_city_agency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city_agency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city_agency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // wf_info belongsTo agency_department via agency_dept
  agency_dept_agency_department!: agency_department;
  getAgency_dept_agency_department!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_dept_agency_department!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_dept_agency_department!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // wf_info belongsTo agency_local via agency_local
  agency_local_agency_local!: agency_local;
  getAgency_local_agency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local_agency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local_agency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // wf_info belongsTo agency_tax_form via poa_form
  poa_form_agency_tax_form!: agency_tax_form;
  getPoa_form_agency_tax_form!: Sequelize.BelongsToGetAssociationMixin<agency_tax_form>;
  setPoa_form_agency_tax_form!: Sequelize.BelongsToSetAssociationMixin<agency_tax_form, agency_tax_formId>;
  createPoa_form_agency_tax_form!: Sequelize.BelongsToCreateAssociationMixin<agency_tax_form>;
  // wf_info belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_info belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // wf_info belongsTo sys_workflow via notice_type
  notice_type_sys_workflow!: sys_workflow;
  getNotice_type_sys_workflow!: Sequelize.BelongsToGetAssociationMixin<sys_workflow>;
  setNotice_type_sys_workflow!: Sequelize.BelongsToSetAssociationMixin<sys_workflow, sys_workflowId>;
  createNotice_type_sys_workflow!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow>;
  // wf_info belongsToMany account_info via wf_info_id and account_info_id
  account_info_id_account_infos!: account_info[];
  getAccount_info_id_account_infos!: Sequelize.BelongsToManyGetAssociationsMixin<account_info>;
  setAccount_info_id_account_infos!: Sequelize.BelongsToManySetAssociationsMixin<account_info, account_infoId>;
  addAccount_info_id_account_info!: Sequelize.BelongsToManyAddAssociationMixin<account_info, account_infoId>;
  addAccount_info_id_account_infos!: Sequelize.BelongsToManyAddAssociationsMixin<account_info, account_infoId>;
  createAccount_info_id_account_info!: Sequelize.BelongsToManyCreateAssociationMixin<account_info>;
  removeAccount_info_id_account_info!: Sequelize.BelongsToManyRemoveAssociationMixin<account_info, account_infoId>;
  removeAccount_info_id_account_infos!: Sequelize.BelongsToManyRemoveAssociationsMixin<account_info, account_infoId>;
  hasAccount_info_id_account_info!: Sequelize.BelongsToManyHasAssociationMixin<account_info, account_infoId>;
  hasAccount_info_id_account_infos!: Sequelize.BelongsToManyHasAssociationsMixin<account_info, account_infoId>;
  countAccount_info_id_account_infos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // wf_info hasMany wf_bulk_notice via wf_info_id
  wf_bulk_notices!: wf_bulk_notice[];
  getWf_bulk_notices!: Sequelize.HasManyGetAssociationsMixin<wf_bulk_notice>;
  setWf_bulk_notices!: Sequelize.HasManySetAssociationsMixin<wf_bulk_notice, wf_bulk_noticeId>;
  addWf_bulk_notice!: Sequelize.HasManyAddAssociationMixin<wf_bulk_notice, wf_bulk_noticeId>;
  addWf_bulk_notices!: Sequelize.HasManyAddAssociationsMixin<wf_bulk_notice, wf_bulk_noticeId>;
  createWf_bulk_notice!: Sequelize.HasManyCreateAssociationMixin<wf_bulk_notice>;
  removeWf_bulk_notice!: Sequelize.HasManyRemoveAssociationMixin<wf_bulk_notice, wf_bulk_noticeId>;
  removeWf_bulk_notices!: Sequelize.HasManyRemoveAssociationsMixin<wf_bulk_notice, wf_bulk_noticeId>;
  hasWf_bulk_notice!: Sequelize.HasManyHasAssociationMixin<wf_bulk_notice, wf_bulk_noticeId>;
  hasWf_bulk_notices!: Sequelize.HasManyHasAssociationsMixin<wf_bulk_notice, wf_bulk_noticeId>;
  countWf_bulk_notices!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_multiple_tax_period via workflow_notice_info_id
  wf_multiple_tax_periods!: wf_multiple_tax_period[];
  getWf_multiple_tax_periods!: Sequelize.HasManyGetAssociationsMixin<wf_multiple_tax_period>;
  setWf_multiple_tax_periods!: Sequelize.HasManySetAssociationsMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  addWf_multiple_tax_period!: Sequelize.HasManyAddAssociationMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  addWf_multiple_tax_periods!: Sequelize.HasManyAddAssociationsMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  createWf_multiple_tax_period!: Sequelize.HasManyCreateAssociationMixin<wf_multiple_tax_period>;
  removeWf_multiple_tax_period!: Sequelize.HasManyRemoveAssociationMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  removeWf_multiple_tax_periods!: Sequelize.HasManyRemoveAssociationsMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  hasWf_multiple_tax_period!: Sequelize.HasManyHasAssociationMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  hasWf_multiple_tax_periods!: Sequelize.HasManyHasAssociationsMixin<wf_multiple_tax_period, wf_multiple_tax_periodId>;
  countWf_multiple_tax_periods!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_note via workflow_info_id
  wf_notes!: wf_note[];
  getWf_notes!: Sequelize.HasManyGetAssociationsMixin<wf_note>;
  setWf_notes!: Sequelize.HasManySetAssociationsMixin<wf_note, wf_noteId>;
  addWf_note!: Sequelize.HasManyAddAssociationMixin<wf_note, wf_noteId>;
  addWf_notes!: Sequelize.HasManyAddAssociationsMixin<wf_note, wf_noteId>;
  createWf_note!: Sequelize.HasManyCreateAssociationMixin<wf_note>;
  removeWf_note!: Sequelize.HasManyRemoveAssociationMixin<wf_note, wf_noteId>;
  removeWf_notes!: Sequelize.HasManyRemoveAssociationsMixin<wf_note, wf_noteId>;
  hasWf_note!: Sequelize.HasManyHasAssociationMixin<wf_note, wf_noteId>;
  hasWf_notes!: Sequelize.HasManyHasAssociationsMixin<wf_note, wf_noteId>;
  countWf_notes!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_abatement via wf_info_id
  wf_task_abatements!: wf_task_abatement[];
  getWf_task_abatements!: Sequelize.HasManyGetAssociationsMixin<wf_task_abatement>;
  setWf_task_abatements!: Sequelize.HasManySetAssociationsMixin<wf_task_abatement, wf_task_abatementId>;
  addWf_task_abatement!: Sequelize.HasManyAddAssociationMixin<wf_task_abatement, wf_task_abatementId>;
  addWf_task_abatements!: Sequelize.HasManyAddAssociationsMixin<wf_task_abatement, wf_task_abatementId>;
  createWf_task_abatement!: Sequelize.HasManyCreateAssociationMixin<wf_task_abatement>;
  removeWf_task_abatement!: Sequelize.HasManyRemoveAssociationMixin<wf_task_abatement, wf_task_abatementId>;
  removeWf_task_abatements!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_abatement, wf_task_abatementId>;
  hasWf_task_abatement!: Sequelize.HasManyHasAssociationMixin<wf_task_abatement, wf_task_abatementId>;
  hasWf_task_abatements!: Sequelize.HasManyHasAssociationsMixin<wf_task_abatement, wf_task_abatementId>;
  countWf_task_abatements!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_amount_due via wf_info_id
  wf_task_amount_dues!: wf_task_amount_due[];
  getWf_task_amount_dues!: Sequelize.HasManyGetAssociationsMixin<wf_task_amount_due>;
  setWf_task_amount_dues!: Sequelize.HasManySetAssociationsMixin<wf_task_amount_due, wf_task_amount_dueId>;
  addWf_task_amount_due!: Sequelize.HasManyAddAssociationMixin<wf_task_amount_due, wf_task_amount_dueId>;
  addWf_task_amount_dues!: Sequelize.HasManyAddAssociationsMixin<wf_task_amount_due, wf_task_amount_dueId>;
  createWf_task_amount_due!: Sequelize.HasManyCreateAssociationMixin<wf_task_amount_due>;
  removeWf_task_amount_due!: Sequelize.HasManyRemoveAssociationMixin<wf_task_amount_due, wf_task_amount_dueId>;
  removeWf_task_amount_dues!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_amount_due, wf_task_amount_dueId>;
  hasWf_task_amount_due!: Sequelize.HasManyHasAssociationMixin<wf_task_amount_due, wf_task_amount_dueId>;
  hasWf_task_amount_dues!: Sequelize.HasManyHasAssociationsMixin<wf_task_amount_due, wf_task_amount_dueId>;
  countWf_task_amount_dues!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_closure via wf_info_id
  wf_task_closures!: wf_task_closure[];
  getWf_task_closures!: Sequelize.HasManyGetAssociationsMixin<wf_task_closure>;
  setWf_task_closures!: Sequelize.HasManySetAssociationsMixin<wf_task_closure, wf_task_closureId>;
  addWf_task_closure!: Sequelize.HasManyAddAssociationMixin<wf_task_closure, wf_task_closureId>;
  addWf_task_closures!: Sequelize.HasManyAddAssociationsMixin<wf_task_closure, wf_task_closureId>;
  createWf_task_closure!: Sequelize.HasManyCreateAssociationMixin<wf_task_closure>;
  removeWf_task_closure!: Sequelize.HasManyRemoveAssociationMixin<wf_task_closure, wf_task_closureId>;
  removeWf_task_closures!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_closure, wf_task_closureId>;
  hasWf_task_closure!: Sequelize.HasManyHasAssociationMixin<wf_task_closure, wf_task_closureId>;
  hasWf_task_closures!: Sequelize.HasManyHasAssociationsMixin<wf_task_closure, wf_task_closureId>;
  countWf_task_closures!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_contact via wf_info_id
  wf_task_contacts!: wf_task_contact[];
  getWf_task_contacts!: Sequelize.HasManyGetAssociationsMixin<wf_task_contact>;
  setWf_task_contacts!: Sequelize.HasManySetAssociationsMixin<wf_task_contact, wf_task_contactId>;
  addWf_task_contact!: Sequelize.HasManyAddAssociationMixin<wf_task_contact, wf_task_contactId>;
  addWf_task_contacts!: Sequelize.HasManyAddAssociationsMixin<wf_task_contact, wf_task_contactId>;
  createWf_task_contact!: Sequelize.HasManyCreateAssociationMixin<wf_task_contact>;
  removeWf_task_contact!: Sequelize.HasManyRemoveAssociationMixin<wf_task_contact, wf_task_contactId>;
  removeWf_task_contacts!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_contact, wf_task_contactId>;
  hasWf_task_contact!: Sequelize.HasManyHasAssociationMixin<wf_task_contact, wf_task_contactId>;
  hasWf_task_contacts!: Sequelize.HasManyHasAssociationsMixin<wf_task_contact, wf_task_contactId>;
  countWf_task_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_deposit_refund via wf_info_id
  wf_task_deposit_refunds!: wf_task_deposit_refund[];
  getWf_task_deposit_refunds!: Sequelize.HasManyGetAssociationsMixin<wf_task_deposit_refund>;
  setWf_task_deposit_refunds!: Sequelize.HasManySetAssociationsMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  addWf_task_deposit_refund!: Sequelize.HasManyAddAssociationMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  addWf_task_deposit_refunds!: Sequelize.HasManyAddAssociationsMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  createWf_task_deposit_refund!: Sequelize.HasManyCreateAssociationMixin<wf_task_deposit_refund>;
  removeWf_task_deposit_refund!: Sequelize.HasManyRemoveAssociationMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  removeWf_task_deposit_refunds!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  hasWf_task_deposit_refund!: Sequelize.HasManyHasAssociationMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  hasWf_task_deposit_refunds!: Sequelize.HasManyHasAssociationsMixin<wf_task_deposit_refund, wf_task_deposit_refundId>;
  countWf_task_deposit_refunds!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_detail via wf_info_id
  wf_task_details!: wf_task_detail[];
  getWf_task_details!: Sequelize.HasManyGetAssociationsMixin<wf_task_detail>;
  setWf_task_details!: Sequelize.HasManySetAssociationsMixin<wf_task_detail, wf_task_detailId>;
  addWf_task_detail!: Sequelize.HasManyAddAssociationMixin<wf_task_detail, wf_task_detailId>;
  addWf_task_details!: Sequelize.HasManyAddAssociationsMixin<wf_task_detail, wf_task_detailId>;
  createWf_task_detail!: Sequelize.HasManyCreateAssociationMixin<wf_task_detail>;
  removeWf_task_detail!: Sequelize.HasManyRemoveAssociationMixin<wf_task_detail, wf_task_detailId>;
  removeWf_task_details!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_detail, wf_task_detailId>;
  hasWf_task_detail!: Sequelize.HasManyHasAssociationMixin<wf_task_detail, wf_task_detailId>;
  hasWf_task_details!: Sequelize.HasManyHasAssociationsMixin<wf_task_detail, wf_task_detailId>;
  countWf_task_details!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_detail_ar via wf_info_id
  wf_task_detail_ars!: wf_task_detail_ar[];
  getWf_task_detail_ars!: Sequelize.HasManyGetAssociationsMixin<wf_task_detail_ar>;
  setWf_task_detail_ars!: Sequelize.HasManySetAssociationsMixin<wf_task_detail_ar, wf_task_detail_arId>;
  addWf_task_detail_ar!: Sequelize.HasManyAddAssociationMixin<wf_task_detail_ar, wf_task_detail_arId>;
  addWf_task_detail_ars!: Sequelize.HasManyAddAssociationsMixin<wf_task_detail_ar, wf_task_detail_arId>;
  createWf_task_detail_ar!: Sequelize.HasManyCreateAssociationMixin<wf_task_detail_ar>;
  removeWf_task_detail_ar!: Sequelize.HasManyRemoveAssociationMixin<wf_task_detail_ar, wf_task_detail_arId>;
  removeWf_task_detail_ars!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_detail_ar, wf_task_detail_arId>;
  hasWf_task_detail_ar!: Sequelize.HasManyHasAssociationMixin<wf_task_detail_ar, wf_task_detail_arId>;
  hasWf_task_detail_ars!: Sequelize.HasManyHasAssociationsMixin<wf_task_detail_ar, wf_task_detail_arId>;
  countWf_task_detail_ars!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_detail_reg via wf_info_id
  wf_task_detail_regs!: wf_task_detail_reg[];
  getWf_task_detail_regs!: Sequelize.HasManyGetAssociationsMixin<wf_task_detail_reg>;
  setWf_task_detail_regs!: Sequelize.HasManySetAssociationsMixin<wf_task_detail_reg, wf_task_detail_regId>;
  addWf_task_detail_reg!: Sequelize.HasManyAddAssociationMixin<wf_task_detail_reg, wf_task_detail_regId>;
  addWf_task_detail_regs!: Sequelize.HasManyAddAssociationsMixin<wf_task_detail_reg, wf_task_detail_regId>;
  createWf_task_detail_reg!: Sequelize.HasManyCreateAssociationMixin<wf_task_detail_reg>;
  removeWf_task_detail_reg!: Sequelize.HasManyRemoveAssociationMixin<wf_task_detail_reg, wf_task_detail_regId>;
  removeWf_task_detail_regs!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_detail_reg, wf_task_detail_regId>;
  hasWf_task_detail_reg!: Sequelize.HasManyHasAssociationMixin<wf_task_detail_reg, wf_task_detail_regId>;
  hasWf_task_detail_regs!: Sequelize.HasManyHasAssociationsMixin<wf_task_detail_reg, wf_task_detail_regId>;
  countWf_task_detail_regs!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_guidance via workflow_info_id
  wf_task_guidances!: wf_task_guidance[];
  getWf_task_guidances!: Sequelize.HasManyGetAssociationsMixin<wf_task_guidance>;
  setWf_task_guidances!: Sequelize.HasManySetAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  addWf_task_guidance!: Sequelize.HasManyAddAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  addWf_task_guidances!: Sequelize.HasManyAddAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  createWf_task_guidance!: Sequelize.HasManyCreateAssociationMixin<wf_task_guidance>;
  removeWf_task_guidance!: Sequelize.HasManyRemoveAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  removeWf_task_guidances!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  hasWf_task_guidance!: Sequelize.HasManyHasAssociationMixin<wf_task_guidance, wf_task_guidanceId>;
  hasWf_task_guidances!: Sequelize.HasManyHasAssociationsMixin<wf_task_guidance, wf_task_guidanceId>;
  countWf_task_guidances!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_moved_payment_info via wf_info_id
  wf_task_moved_payment_infos!: wf_task_moved_payment_info[];
  getWf_task_moved_payment_infos!: Sequelize.HasManyGetAssociationsMixin<wf_task_moved_payment_info>;
  setWf_task_moved_payment_infos!: Sequelize.HasManySetAssociationsMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  addWf_task_moved_payment_info!: Sequelize.HasManyAddAssociationMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  addWf_task_moved_payment_infos!: Sequelize.HasManyAddAssociationsMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  createWf_task_moved_payment_info!: Sequelize.HasManyCreateAssociationMixin<wf_task_moved_payment_info>;
  removeWf_task_moved_payment_info!: Sequelize.HasManyRemoveAssociationMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  removeWf_task_moved_payment_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  hasWf_task_moved_payment_info!: Sequelize.HasManyHasAssociationMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  hasWf_task_moved_payment_infos!: Sequelize.HasManyHasAssociationsMixin<wf_task_moved_payment_info, wf_task_moved_payment_infoId>;
  countWf_task_moved_payment_infos!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_rate via wf_info_id
  wf_task_rates!: wf_task_rate[];
  getWf_task_rates!: Sequelize.HasManyGetAssociationsMixin<wf_task_rate>;
  setWf_task_rates!: Sequelize.HasManySetAssociationsMixin<wf_task_rate, wf_task_rateId>;
  addWf_task_rate!: Sequelize.HasManyAddAssociationMixin<wf_task_rate, wf_task_rateId>;
  addWf_task_rates!: Sequelize.HasManyAddAssociationsMixin<wf_task_rate, wf_task_rateId>;
  createWf_task_rate!: Sequelize.HasManyCreateAssociationMixin<wf_task_rate>;
  removeWf_task_rate!: Sequelize.HasManyRemoveAssociationMixin<wf_task_rate, wf_task_rateId>;
  removeWf_task_rates!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_rate, wf_task_rateId>;
  hasWf_task_rate!: Sequelize.HasManyHasAssociationMixin<wf_task_rate, wf_task_rateId>;
  hasWf_task_rates!: Sequelize.HasManyHasAssociationsMixin<wf_task_rate, wf_task_rateId>;
  countWf_task_rates!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_refund_due via wf_info_id
  wf_task_refund_dues!: wf_task_refund_due[];
  getWf_task_refund_dues!: Sequelize.HasManyGetAssociationsMixin<wf_task_refund_due>;
  setWf_task_refund_dues!: Sequelize.HasManySetAssociationsMixin<wf_task_refund_due, wf_task_refund_dueId>;
  addWf_task_refund_due!: Sequelize.HasManyAddAssociationMixin<wf_task_refund_due, wf_task_refund_dueId>;
  addWf_task_refund_dues!: Sequelize.HasManyAddAssociationsMixin<wf_task_refund_due, wf_task_refund_dueId>;
  createWf_task_refund_due!: Sequelize.HasManyCreateAssociationMixin<wf_task_refund_due>;
  removeWf_task_refund_due!: Sequelize.HasManyRemoveAssociationMixin<wf_task_refund_due, wf_task_refund_dueId>;
  removeWf_task_refund_dues!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_refund_due, wf_task_refund_dueId>;
  hasWf_task_refund_due!: Sequelize.HasManyHasAssociationMixin<wf_task_refund_due, wf_task_refund_dueId>;
  hasWf_task_refund_dues!: Sequelize.HasManyHasAssociationsMixin<wf_task_refund_due, wf_task_refund_dueId>;
  countWf_task_refund_dues!: Sequelize.HasManyCountAssociationsMixin;
  // wf_info hasMany wf_task_research via wf_info_id
  wf_task_researches!: wf_task_research[];
  getWf_task_researches!: Sequelize.HasManyGetAssociationsMixin<wf_task_research>;
  setWf_task_researches!: Sequelize.HasManySetAssociationsMixin<wf_task_research, wf_task_researchId>;
  addWf_task_research!: Sequelize.HasManyAddAssociationMixin<wf_task_research, wf_task_researchId>;
  addWf_task_researches!: Sequelize.HasManyAddAssociationsMixin<wf_task_research, wf_task_researchId>;
  createWf_task_research!: Sequelize.HasManyCreateAssociationMixin<wf_task_research>;
  removeWf_task_research!: Sequelize.HasManyRemoveAssociationMixin<wf_task_research, wf_task_researchId>;
  removeWf_task_researches!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_research, wf_task_researchId>;
  hasWf_task_research!: Sequelize.HasManyHasAssociationMixin<wf_task_research, wf_task_researchId>;
  hasWf_task_researches!: Sequelize.HasManyHasAssociationsMixin<wf_task_research, wf_task_researchId>;
  countWf_task_researches!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_info {
    return sequelize.define('wf_info', {
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
    ocr_scanned_document_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      unique: "wf_info_ocr_scanned_document_index"
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
    wf_description: {
      type: DataTypes.STRING(255),
      allowNull: true
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
      type: DataTypes.STRING(255),
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
    zendesk_ticket_id: {
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
    },
    last_note_entered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ar_reason_for_request: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_responsible_party: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ar_affected_agencies: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ar_affected_locals: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ar_total_returns: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ar_total_employees: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ar_total_w2c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ar_multiple_years: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ar_country: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    manager_2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ar_affected_agencies_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ar_affected_locals_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    is_bulk: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_id_to_use: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_id_to_use_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poa_agency_confirmation_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    poa_confirm_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ar_number_of_states: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ar_number_of_years: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reg_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_reg_agency_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    selected_reg_agency_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_form: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    reg_taxable_wages: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reg_undeposited_funds: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reg_pending_deposits: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reg_1st_date_service_performed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_1st_date_wages_paid: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_1st_q_number_ees: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_1st_q_state_wages: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    reg_1st_q_ui_wages: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    ar_total_w2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ar_number_of_quarters: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    amount_due_total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    refund_due_total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    reg_submittal_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_agency_process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_submitted_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    agency_department_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_local_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_city_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issuing_agency_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filling_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    completed_tasks: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    total_tasks: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    current_task: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    old_tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    old_filling_type: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    workflow_multiple_tax_periods: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pv_payment_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pv_link_to_ap: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notice_funded: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    wf_approved: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_2: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_3: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    ui_total_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    ui_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rejected_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_closed_acct: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    reg_close_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'wf_info',
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
        name: "wf_info_ocr_scanned_document_index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ocr_scanned_document_id" },
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
  }) as typeof wf_info;
  }
}
