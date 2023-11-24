import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { account_location_list, account_location_listId } from './AccountLocationList';
import type { account_note, account_noteId } from './AccountNote';
import type { account_usage_type, account_usage_typeId } from './AccountUsageType';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_country, agency_countryId } from './AgencyCountry';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_deposit_frequency_list, agency_deposit_frequency_listId } from './AgencyDepositFrequencyList';
import type { agency_form_number_rule, agency_form_number_ruleId } from './AgencyFormNumberRule';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';
import type { agency_id_co_detail, agency_id_co_detailId } from './AgencyIdCoDetail';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_tax_form, agency_tax_formId } from './AgencyTaxForm';
import type { agency_tax_type, agency_tax_typeId } from './AgencyTaxType';
import type { app_industry, app_industryId } from './AppIndustry';
import type { app_user_agency_info, app_user_agency_infoId } from './AppUserAgencyInfo';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_billing, co_billingId } from './CoBilling';
import type { managed_service_notes_setting, managed_service_notes_settingId } from './ManagedServiceNotesSetting';
import type { mastertax_setting, mastertax_settingId } from './MastertaxSetting';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { sys_csr_list, sys_csr_listId } from './SysCsrList';
import type { sys_priority_list, sys_priority_listId } from './SysPriorityList';
import type { sys_tax_service_level_list, sys_tax_service_level_listId } from './SysTaxServiceLevelList';
import type { sys_user_group_list, sys_user_group_listId } from './SysUserGroupList';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';
import type { wf_task_amount_due, wf_task_amount_dueId } from './WfTaskAmountDue';
import type { wf_task_closure, wf_task_closureId } from './WfTaskClosure';
import type { wf_task_contact, wf_task_contactId } from './WfTaskContact';
import type { wf_task_detail, wf_task_detailId } from './WfTaskDetail';
import type { wf_task_detail_ar, wf_task_detail_arId } from './WfTaskDetailAr';
import type { wf_task_detail_reg, wf_task_detail_regId } from './WfTaskDetailReg';
import type { wf_task_refund_due, wf_task_refund_dueId } from './WfTaskRefundDue';
import type { workflow_list, workflow_listId } from './WorkflowList';
import type { zendesk_setting, zendesk_settingId } from './ZendeskSetting';

export interface co_infoAttributes {
  id: number;
  name: string;
  industry: number;
  country: number;
  address: string;
  city: string;
  state: number;
  zip: string;
  phone: string;
  email_server_host?: string;
  email_server_username?: string;
  email_server_password?: string;
  email_server_port?: string;
  email_server_encryption?: string;
  email_display_name?: string;
  letter_cc_email?: string;
  letter_bcc_email?: string;
  international: number;
  countries?: string;
  aos_option_1?: string;
  aos_option_2?: string;
  aos_option_3?: string;
  aos_option_4?: string;
  aos_date_1?: string;
  aos_date_2?: string;
  aos_date_3?: string;
  aos_date_4?: string;
  wf_options?: string;
  filing_options?: string;
  enabled_ask_expert?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  workflow_assignment?: number;
  auto_letters?: number;
  is_2fa_enabled?: number;
  docusign_settings?: object;
  docusign_token?: object;
  caf_number?: string;
  digisigner_key?: string;
  override_sequential_assignment?: number;
  email_service_provider?: string;
  use_custom_mailing_provider?: number;
  salesforce_settings?: object;
  sso_settings?: object;
  sso_enabled?: number;
  ocr_id_format?: number;
  sequential_enabled?: number;
  logo?: string;
  mail_alert_enabled?: number;
  alert_time?: object;
  account_options_enabled?: number;
  digisigner_enabled?: number;
  docusign_enabled?: number;
  filing_type_enabled?: number;
  workflow_options_enabled?: number;
  salesforce_enabled?: number;
  zendesk_enabled?: number;
  ocr_settings_enabled?: number;
  sequential_preference?: string;
  registration_information_enabled?: number;
  company_type?: string;
  stock_traded?: number;
  recently_acquired?: number;
  incorporated_state?: number;
  incorporation_date?: Date;
  formerly_known_as?: string;
  naics_code?: string;
  business_type?: string;
  business_description?: string;
  website?: string;
  cc_the_csr?: number;
  sequential_use_current_id?: number;
  account_end_date?: Date;
  master_tax_settings_enabled?: number;
  yardi_settings_enabled?: number;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;
  cost_center_mapping_enabled?: number;
  managed_service_notes_enabled?: number;
  co_branding_logo_enabled?: number;
  custom_user_color_enabled?: number;
}

export type co_infoPk = "id";
export type co_infoId = co_info[co_infoPk];
export type co_infoOptionalAttributes = "id" | "email_server_host" | "email_server_username" | "email_server_password" | "email_server_port" | "email_server_encryption" | "email_display_name" | "letter_cc_email" | "letter_bcc_email" | "international" | "countries" | "aos_option_1" | "aos_option_2" | "aos_option_3" | "aos_option_4" | "aos_date_1" | "aos_date_2" | "aos_date_3" | "aos_date_4" | "wf_options" | "filing_options" | "enabled_ask_expert" | "created_by" | "updated_by" | "created_at" | "updated_at" | "workflow_assignment" | "auto_letters" | "is_2fa_enabled" | "docusign_settings" | "docusign_token" | "caf_number" | "digisigner_key" | "override_sequential_assignment" | "email_service_provider" | "use_custom_mailing_provider" | "salesforce_settings" | "sso_settings" | "sso_enabled" | "ocr_id_format" | "sequential_enabled" | "logo" | "mail_alert_enabled" | "alert_time" | "account_options_enabled" | "digisigner_enabled" | "docusign_enabled" | "filing_type_enabled" | "workflow_options_enabled" | "salesforce_enabled" | "zendesk_enabled" | "ocr_settings_enabled" | "sequential_preference" | "registration_information_enabled" | "company_type" | "stock_traded" | "recently_acquired" | "incorporated_state" | "incorporation_date" | "formerly_known_as" | "naics_code" | "business_type" | "business_description" | "website" | "cc_the_csr" | "sequential_use_current_id" | "account_end_date" | "master_tax_settings_enabled" | "yardi_settings_enabled" | "cc1" | "cc2" | "cc3" | "cc4" | "cc5" | "cost_center_mapping_enabled" | "managed_service_notes_enabled" | "co_branding_logo_enabled" | "custom_user_color_enabled";
export type co_infoCreationAttributes = Optional<co_infoAttributes, co_infoOptionalAttributes>;

export class co_info extends Model<co_infoAttributes, co_infoCreationAttributes> implements co_infoAttributes {
  id!: number;
  name!: string;
  industry!: number;
  country!: number;
  address!: string;
  city!: string;
  state!: number;
  zip!: string;
  phone!: string;
  email_server_host?: string;
  email_server_username?: string;
  email_server_password?: string;
  email_server_port?: string;
  email_server_encryption?: string;
  email_display_name?: string;
  letter_cc_email?: string;
  letter_bcc_email?: string;
  international!: number;
  countries?: string;
  aos_option_1?: string;
  aos_option_2?: string;
  aos_option_3?: string;
  aos_option_4?: string;
  aos_date_1?: string;
  aos_date_2?: string;
  aos_date_3?: string;
  aos_date_4?: string;
  wf_options?: string;
  filing_options?: string;
  enabled_ask_expert?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  workflow_assignment?: number;
  auto_letters?: number;
  is_2fa_enabled?: number;
  docusign_settings?: object;
  docusign_token?: object;
  caf_number?: string;
  digisigner_key?: string;
  override_sequential_assignment?: number;
  email_service_provider?: string;
  use_custom_mailing_provider?: number;
  salesforce_settings?: object;
  sso_settings?: object;
  sso_enabled?: number;
  ocr_id_format?: number;
  sequential_enabled?: number;
  logo?: string;
  mail_alert_enabled?: number;
  alert_time?: object;
  account_options_enabled?: number;
  digisigner_enabled?: number;
  docusign_enabled?: number;
  filing_type_enabled?: number;
  workflow_options_enabled?: number;
  salesforce_enabled?: number;
  zendesk_enabled?: number;
  ocr_settings_enabled?: number;
  sequential_preference?: string;
  registration_information_enabled?: number;
  company_type?: string;
  stock_traded?: number;
  recently_acquired?: number;
  incorporated_state?: number;
  incorporation_date?: Date;
  formerly_known_as?: string;
  naics_code?: string;
  business_type?: string;
  business_description?: string;
  website?: string;
  cc_the_csr?: number;
  sequential_use_current_id?: number;
  account_end_date?: Date;
  master_tax_settings_enabled?: number;
  yardi_settings_enabled?: number;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;
  cost_center_mapping_enabled?: number;
  managed_service_notes_enabled?: number;
  co_branding_logo_enabled?: number;
  custom_user_color_enabled?: number;

  // co_info belongsTo agency_country via country
  country_agency_country!: agency_country;
  getCountry_agency_country!: Sequelize.BelongsToGetAssociationMixin<agency_country>;
  setCountry_agency_country!: Sequelize.BelongsToSetAssociationMixin<agency_country, agency_countryId>;
  createCountry_agency_country!: Sequelize.BelongsToCreateAssociationMixin<agency_country>;
  // co_info belongsTo app_industry via industry
  industry_app_industry!: app_industry;
  getIndustry_app_industry!: Sequelize.BelongsToGetAssociationMixin<app_industry>;
  setIndustry_app_industry!: Sequelize.BelongsToSetAssociationMixin<app_industry, app_industryId>;
  createIndustry_app_industry!: Sequelize.BelongsToCreateAssociationMixin<app_industry>;
  // co_info hasMany account_info via co_info_id
  account_infos!: account_info[];
  getAccount_infos!: Sequelize.HasManyGetAssociationsMixin<account_info>;
  setAccount_infos!: Sequelize.HasManySetAssociationsMixin<account_info, account_infoId>;
  addAccount_info!: Sequelize.HasManyAddAssociationMixin<account_info, account_infoId>;
  addAccount_infos!: Sequelize.HasManyAddAssociationsMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.HasManyCreateAssociationMixin<account_info>;
  removeAccount_info!: Sequelize.HasManyRemoveAssociationMixin<account_info, account_infoId>;
  removeAccount_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_info, account_infoId>;
  hasAccount_info!: Sequelize.HasManyHasAssociationMixin<account_info, account_infoId>;
  hasAccount_infos!: Sequelize.HasManyHasAssociationsMixin<account_info, account_infoId>;
  countAccount_infos!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany account_location_list via co_info_id
  account_location_lists!: account_location_list[];
  getAccount_location_lists!: Sequelize.HasManyGetAssociationsMixin<account_location_list>;
  setAccount_location_lists!: Sequelize.HasManySetAssociationsMixin<account_location_list, account_location_listId>;
  addAccount_location_list!: Sequelize.HasManyAddAssociationMixin<account_location_list, account_location_listId>;
  addAccount_location_lists!: Sequelize.HasManyAddAssociationsMixin<account_location_list, account_location_listId>;
  createAccount_location_list!: Sequelize.HasManyCreateAssociationMixin<account_location_list>;
  removeAccount_location_list!: Sequelize.HasManyRemoveAssociationMixin<account_location_list, account_location_listId>;
  removeAccount_location_lists!: Sequelize.HasManyRemoveAssociationsMixin<account_location_list, account_location_listId>;
  hasAccount_location_list!: Sequelize.HasManyHasAssociationMixin<account_location_list, account_location_listId>;
  hasAccount_location_lists!: Sequelize.HasManyHasAssociationsMixin<account_location_list, account_location_listId>;
  countAccount_location_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany account_note via co_info_id
  account_notes!: account_note[];
  getAccount_notes!: Sequelize.HasManyGetAssociationsMixin<account_note>;
  setAccount_notes!: Sequelize.HasManySetAssociationsMixin<account_note, account_noteId>;
  addAccount_note!: Sequelize.HasManyAddAssociationMixin<account_note, account_noteId>;
  addAccount_notes!: Sequelize.HasManyAddAssociationsMixin<account_note, account_noteId>;
  createAccount_note!: Sequelize.HasManyCreateAssociationMixin<account_note>;
  removeAccount_note!: Sequelize.HasManyRemoveAssociationMixin<account_note, account_noteId>;
  removeAccount_notes!: Sequelize.HasManyRemoveAssociationsMixin<account_note, account_noteId>;
  hasAccount_note!: Sequelize.HasManyHasAssociationMixin<account_note, account_noteId>;
  hasAccount_notes!: Sequelize.HasManyHasAssociationsMixin<account_note, account_noteId>;
  countAccount_notes!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany account_usage_type via co_id
  account_usage_types!: account_usage_type[];
  getAccount_usage_types!: Sequelize.HasManyGetAssociationsMixin<account_usage_type>;
  setAccount_usage_types!: Sequelize.HasManySetAssociationsMixin<account_usage_type, account_usage_typeId>;
  addAccount_usage_type!: Sequelize.HasManyAddAssociationMixin<account_usage_type, account_usage_typeId>;
  addAccount_usage_types!: Sequelize.HasManyAddAssociationsMixin<account_usage_type, account_usage_typeId>;
  createAccount_usage_type!: Sequelize.HasManyCreateAssociationMixin<account_usage_type>;
  removeAccount_usage_type!: Sequelize.HasManyRemoveAssociationMixin<account_usage_type, account_usage_typeId>;
  removeAccount_usage_types!: Sequelize.HasManyRemoveAssociationsMixin<account_usage_type, account_usage_typeId>;
  hasAccount_usage_type!: Sequelize.HasManyHasAssociationMixin<account_usage_type, account_usage_typeId>;
  hasAccount_usage_types!: Sequelize.HasManyHasAssociationsMixin<account_usage_type, account_usage_typeId>;
  countAccount_usage_types!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_city via co_info_id
  agency_cities!: agency_city[];
  getAgency_cities!: Sequelize.HasManyGetAssociationsMixin<agency_city>;
  setAgency_cities!: Sequelize.HasManySetAssociationsMixin<agency_city, agency_cityId>;
  addAgency_city!: Sequelize.HasManyAddAssociationMixin<agency_city, agency_cityId>;
  addAgency_cities!: Sequelize.HasManyAddAssociationsMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.HasManyCreateAssociationMixin<agency_city>;
  removeAgency_city!: Sequelize.HasManyRemoveAssociationMixin<agency_city, agency_cityId>;
  removeAgency_cities!: Sequelize.HasManyRemoveAssociationsMixin<agency_city, agency_cityId>;
  hasAgency_city!: Sequelize.HasManyHasAssociationMixin<agency_city, agency_cityId>;
  hasAgency_cities!: Sequelize.HasManyHasAssociationsMixin<agency_city, agency_cityId>;
  countAgency_cities!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_department via co_info_id
  agency_departments!: agency_department[];
  getAgency_departments!: Sequelize.HasManyGetAssociationsMixin<agency_department>;
  setAgency_departments!: Sequelize.HasManySetAssociationsMixin<agency_department, agency_departmentId>;
  addAgency_department!: Sequelize.HasManyAddAssociationMixin<agency_department, agency_departmentId>;
  addAgency_departments!: Sequelize.HasManyAddAssociationsMixin<agency_department, agency_departmentId>;
  createAgency_department!: Sequelize.HasManyCreateAssociationMixin<agency_department>;
  removeAgency_department!: Sequelize.HasManyRemoveAssociationMixin<agency_department, agency_departmentId>;
  removeAgency_departments!: Sequelize.HasManyRemoveAssociationsMixin<agency_department, agency_departmentId>;
  hasAgency_department!: Sequelize.HasManyHasAssociationMixin<agency_department, agency_departmentId>;
  hasAgency_departments!: Sequelize.HasManyHasAssociationsMixin<agency_department, agency_departmentId>;
  countAgency_departments!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_deposit_frequency_list via co_info_id
  agency_deposit_frequency_lists!: agency_deposit_frequency_list[];
  getAgency_deposit_frequency_lists!: Sequelize.HasManyGetAssociationsMixin<agency_deposit_frequency_list>;
  setAgency_deposit_frequency_lists!: Sequelize.HasManySetAssociationsMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  addAgency_deposit_frequency_list!: Sequelize.HasManyAddAssociationMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  addAgency_deposit_frequency_lists!: Sequelize.HasManyAddAssociationsMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  createAgency_deposit_frequency_list!: Sequelize.HasManyCreateAssociationMixin<agency_deposit_frequency_list>;
  removeAgency_deposit_frequency_list!: Sequelize.HasManyRemoveAssociationMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  removeAgency_deposit_frequency_lists!: Sequelize.HasManyRemoveAssociationsMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  hasAgency_deposit_frequency_list!: Sequelize.HasManyHasAssociationMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  hasAgency_deposit_frequency_lists!: Sequelize.HasManyHasAssociationsMixin<agency_deposit_frequency_list, agency_deposit_frequency_listId>;
  countAgency_deposit_frequency_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_form_number_rule via co_info_id
  agency_form_number_rules!: agency_form_number_rule[];
  getAgency_form_number_rules!: Sequelize.HasManyGetAssociationsMixin<agency_form_number_rule>;
  setAgency_form_number_rules!: Sequelize.HasManySetAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  addAgency_form_number_rule!: Sequelize.HasManyAddAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  addAgency_form_number_rules!: Sequelize.HasManyAddAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  createAgency_form_number_rule!: Sequelize.HasManyCreateAssociationMixin<agency_form_number_rule>;
  removeAgency_form_number_rule!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  removeAgency_form_number_rules!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  hasAgency_form_number_rule!: Sequelize.HasManyHasAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  hasAgency_form_number_rules!: Sequelize.HasManyHasAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  countAgency_form_number_rules!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_form_number via co_info_id
  agency_form_numbers!: agency_form_number[];
  getAgency_form_numbers!: Sequelize.HasManyGetAssociationsMixin<agency_form_number>;
  setAgency_form_numbers!: Sequelize.HasManySetAssociationsMixin<agency_form_number, agency_form_numberId>;
  addAgency_form_number!: Sequelize.HasManyAddAssociationMixin<agency_form_number, agency_form_numberId>;
  addAgency_form_numbers!: Sequelize.HasManyAddAssociationsMixin<agency_form_number, agency_form_numberId>;
  createAgency_form_number!: Sequelize.HasManyCreateAssociationMixin<agency_form_number>;
  removeAgency_form_number!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number, agency_form_numberId>;
  removeAgency_form_numbers!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number, agency_form_numberId>;
  hasAgency_form_number!: Sequelize.HasManyHasAssociationMixin<agency_form_number, agency_form_numberId>;
  hasAgency_form_numbers!: Sequelize.HasManyHasAssociationsMixin<agency_form_number, agency_form_numberId>;
  countAgency_form_numbers!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_id_co_detail via co_info_id
  agency_id_co_details!: agency_id_co_detail[];
  getAgency_id_co_details!: Sequelize.HasManyGetAssociationsMixin<agency_id_co_detail>;
  setAgency_id_co_details!: Sequelize.HasManySetAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  addAgency_id_co_detail!: Sequelize.HasManyAddAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  addAgency_id_co_details!: Sequelize.HasManyAddAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  createAgency_id_co_detail!: Sequelize.HasManyCreateAssociationMixin<agency_id_co_detail>;
  removeAgency_id_co_detail!: Sequelize.HasManyRemoveAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  removeAgency_id_co_details!: Sequelize.HasManyRemoveAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  hasAgency_id_co_detail!: Sequelize.HasManyHasAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  hasAgency_id_co_details!: Sequelize.HasManyHasAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  countAgency_id_co_details!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_local via co_info_id
  agency_locals!: agency_local[];
  getAgency_locals!: Sequelize.HasManyGetAssociationsMixin<agency_local>;
  setAgency_locals!: Sequelize.HasManySetAssociationsMixin<agency_local, agency_localId>;
  addAgency_local!: Sequelize.HasManyAddAssociationMixin<agency_local, agency_localId>;
  addAgency_locals!: Sequelize.HasManyAddAssociationsMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.HasManyCreateAssociationMixin<agency_local>;
  removeAgency_local!: Sequelize.HasManyRemoveAssociationMixin<agency_local, agency_localId>;
  removeAgency_locals!: Sequelize.HasManyRemoveAssociationsMixin<agency_local, agency_localId>;
  hasAgency_local!: Sequelize.HasManyHasAssociationMixin<agency_local, agency_localId>;
  hasAgency_locals!: Sequelize.HasManyHasAssociationsMixin<agency_local, agency_localId>;
  countAgency_locals!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_tax_form via co_info_id
  agency_tax_forms!: agency_tax_form[];
  getAgency_tax_forms!: Sequelize.HasManyGetAssociationsMixin<agency_tax_form>;
  setAgency_tax_forms!: Sequelize.HasManySetAssociationsMixin<agency_tax_form, agency_tax_formId>;
  addAgency_tax_form!: Sequelize.HasManyAddAssociationMixin<agency_tax_form, agency_tax_formId>;
  addAgency_tax_forms!: Sequelize.HasManyAddAssociationsMixin<agency_tax_form, agency_tax_formId>;
  createAgency_tax_form!: Sequelize.HasManyCreateAssociationMixin<agency_tax_form>;
  removeAgency_tax_form!: Sequelize.HasManyRemoveAssociationMixin<agency_tax_form, agency_tax_formId>;
  removeAgency_tax_forms!: Sequelize.HasManyRemoveAssociationsMixin<agency_tax_form, agency_tax_formId>;
  hasAgency_tax_form!: Sequelize.HasManyHasAssociationMixin<agency_tax_form, agency_tax_formId>;
  hasAgency_tax_forms!: Sequelize.HasManyHasAssociationsMixin<agency_tax_form, agency_tax_formId>;
  countAgency_tax_forms!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany agency_tax_type via co_info_id
  agency_tax_types!: agency_tax_type[];
  getAgency_tax_types!: Sequelize.HasManyGetAssociationsMixin<agency_tax_type>;
  setAgency_tax_types!: Sequelize.HasManySetAssociationsMixin<agency_tax_type, agency_tax_typeId>;
  addAgency_tax_type!: Sequelize.HasManyAddAssociationMixin<agency_tax_type, agency_tax_typeId>;
  addAgency_tax_types!: Sequelize.HasManyAddAssociationsMixin<agency_tax_type, agency_tax_typeId>;
  createAgency_tax_type!: Sequelize.HasManyCreateAssociationMixin<agency_tax_type>;
  removeAgency_tax_type!: Sequelize.HasManyRemoveAssociationMixin<agency_tax_type, agency_tax_typeId>;
  removeAgency_tax_types!: Sequelize.HasManyRemoveAssociationsMixin<agency_tax_type, agency_tax_typeId>;
  hasAgency_tax_type!: Sequelize.HasManyHasAssociationMixin<agency_tax_type, agency_tax_typeId>;
  hasAgency_tax_types!: Sequelize.HasManyHasAssociationsMixin<agency_tax_type, agency_tax_typeId>;
  countAgency_tax_types!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany app_user_agency_info via co_info_id
  app_user_agency_infos!: app_user_agency_info[];
  getApp_user_agency_infos!: Sequelize.HasManyGetAssociationsMixin<app_user_agency_info>;
  setApp_user_agency_infos!: Sequelize.HasManySetAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  addApp_user_agency_info!: Sequelize.HasManyAddAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  addApp_user_agency_infos!: Sequelize.HasManyAddAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  createApp_user_agency_info!: Sequelize.HasManyCreateAssociationMixin<app_user_agency_info>;
  removeApp_user_agency_info!: Sequelize.HasManyRemoveAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  removeApp_user_agency_infos!: Sequelize.HasManyRemoveAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  hasApp_user_agency_info!: Sequelize.HasManyHasAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  hasApp_user_agency_infos!: Sequelize.HasManyHasAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  countApp_user_agency_infos!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany app_user_info via co_info_id
  app_user_infos!: app_user_info[];
  getApp_user_infos!: Sequelize.HasManyGetAssociationsMixin<app_user_info>;
  setApp_user_infos!: Sequelize.HasManySetAssociationsMixin<app_user_info, app_user_infoId>;
  addApp_user_info!: Sequelize.HasManyAddAssociationMixin<app_user_info, app_user_infoId>;
  addApp_user_infos!: Sequelize.HasManyAddAssociationsMixin<app_user_info, app_user_infoId>;
  createApp_user_info!: Sequelize.HasManyCreateAssociationMixin<app_user_info>;
  removeApp_user_info!: Sequelize.HasManyRemoveAssociationMixin<app_user_info, app_user_infoId>;
  removeApp_user_infos!: Sequelize.HasManyRemoveAssociationsMixin<app_user_info, app_user_infoId>;
  hasApp_user_info!: Sequelize.HasManyHasAssociationMixin<app_user_info, app_user_infoId>;
  hasApp_user_infos!: Sequelize.HasManyHasAssociationsMixin<app_user_info, app_user_infoId>;
  countApp_user_infos!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany co_billing via co_info_id
  co_billings!: co_billing[];
  getCo_billings!: Sequelize.HasManyGetAssociationsMixin<co_billing>;
  setCo_billings!: Sequelize.HasManySetAssociationsMixin<co_billing, co_billingId>;
  addCo_billing!: Sequelize.HasManyAddAssociationMixin<co_billing, co_billingId>;
  addCo_billings!: Sequelize.HasManyAddAssociationsMixin<co_billing, co_billingId>;
  createCo_billing!: Sequelize.HasManyCreateAssociationMixin<co_billing>;
  removeCo_billing!: Sequelize.HasManyRemoveAssociationMixin<co_billing, co_billingId>;
  removeCo_billings!: Sequelize.HasManyRemoveAssociationsMixin<co_billing, co_billingId>;
  hasCo_billing!: Sequelize.HasManyHasAssociationMixin<co_billing, co_billingId>;
  hasCo_billings!: Sequelize.HasManyHasAssociationsMixin<co_billing, co_billingId>;
  countCo_billings!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany managed_service_notes_setting via co_info_id
  managed_service_notes_settings!: managed_service_notes_setting[];
  getManaged_service_notes_settings!: Sequelize.HasManyGetAssociationsMixin<managed_service_notes_setting>;
  setManaged_service_notes_settings!: Sequelize.HasManySetAssociationsMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  addManaged_service_notes_setting!: Sequelize.HasManyAddAssociationMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  addManaged_service_notes_settings!: Sequelize.HasManyAddAssociationsMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  createManaged_service_notes_setting!: Sequelize.HasManyCreateAssociationMixin<managed_service_notes_setting>;
  removeManaged_service_notes_setting!: Sequelize.HasManyRemoveAssociationMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  removeManaged_service_notes_settings!: Sequelize.HasManyRemoveAssociationsMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  hasManaged_service_notes_setting!: Sequelize.HasManyHasAssociationMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  hasManaged_service_notes_settings!: Sequelize.HasManyHasAssociationsMixin<managed_service_notes_setting, managed_service_notes_settingId>;
  countManaged_service_notes_settings!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany mastertax_setting via co_info_id
  mastertax_settings!: mastertax_setting[];
  getMastertax_settings!: Sequelize.HasManyGetAssociationsMixin<mastertax_setting>;
  setMastertax_settings!: Sequelize.HasManySetAssociationsMixin<mastertax_setting, mastertax_settingId>;
  addMastertax_setting!: Sequelize.HasManyAddAssociationMixin<mastertax_setting, mastertax_settingId>;
  addMastertax_settings!: Sequelize.HasManyAddAssociationsMixin<mastertax_setting, mastertax_settingId>;
  createMastertax_setting!: Sequelize.HasManyCreateAssociationMixin<mastertax_setting>;
  removeMastertax_setting!: Sequelize.HasManyRemoveAssociationMixin<mastertax_setting, mastertax_settingId>;
  removeMastertax_settings!: Sequelize.HasManyRemoveAssociationsMixin<mastertax_setting, mastertax_settingId>;
  hasMastertax_setting!: Sequelize.HasManyHasAssociationMixin<mastertax_setting, mastertax_settingId>;
  hasMastertax_settings!: Sequelize.HasManyHasAssociationsMixin<mastertax_setting, mastertax_settingId>;
  countMastertax_settings!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany ocr_archived_document via co_info_id
  ocr_archived_documents!: ocr_archived_document[];
  getOcr_archived_documents!: Sequelize.HasManyGetAssociationsMixin<ocr_archived_document>;
  setOcr_archived_documents!: Sequelize.HasManySetAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  addOcr_archived_document!: Sequelize.HasManyAddAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  addOcr_archived_documents!: Sequelize.HasManyAddAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  createOcr_archived_document!: Sequelize.HasManyCreateAssociationMixin<ocr_archived_document>;
  removeOcr_archived_document!: Sequelize.HasManyRemoveAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  removeOcr_archived_documents!: Sequelize.HasManyRemoveAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  hasOcr_archived_document!: Sequelize.HasManyHasAssociationMixin<ocr_archived_document, ocr_archived_documentId>;
  hasOcr_archived_documents!: Sequelize.HasManyHasAssociationsMixin<ocr_archived_document, ocr_archived_documentId>;
  countOcr_archived_documents!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany ocr_scanned_document via co_info_id
  ocr_scanned_documents!: ocr_scanned_document[];
  getOcr_scanned_documents!: Sequelize.HasManyGetAssociationsMixin<ocr_scanned_document>;
  setOcr_scanned_documents!: Sequelize.HasManySetAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  addOcr_scanned_document!: Sequelize.HasManyAddAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  addOcr_scanned_documents!: Sequelize.HasManyAddAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  createOcr_scanned_document!: Sequelize.HasManyCreateAssociationMixin<ocr_scanned_document>;
  removeOcr_scanned_document!: Sequelize.HasManyRemoveAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  removeOcr_scanned_documents!: Sequelize.HasManyRemoveAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  hasOcr_scanned_document!: Sequelize.HasManyHasAssociationMixin<ocr_scanned_document, ocr_scanned_documentId>;
  hasOcr_scanned_documents!: Sequelize.HasManyHasAssociationsMixin<ocr_scanned_document, ocr_scanned_documentId>;
  countOcr_scanned_documents!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany sys_csr_list via co_info_id
  sys_csr_lists!: sys_csr_list[];
  getSys_csr_lists!: Sequelize.HasManyGetAssociationsMixin<sys_csr_list>;
  setSys_csr_lists!: Sequelize.HasManySetAssociationsMixin<sys_csr_list, sys_csr_listId>;
  addSys_csr_list!: Sequelize.HasManyAddAssociationMixin<sys_csr_list, sys_csr_listId>;
  addSys_csr_lists!: Sequelize.HasManyAddAssociationsMixin<sys_csr_list, sys_csr_listId>;
  createSys_csr_list!: Sequelize.HasManyCreateAssociationMixin<sys_csr_list>;
  removeSys_csr_list!: Sequelize.HasManyRemoveAssociationMixin<sys_csr_list, sys_csr_listId>;
  removeSys_csr_lists!: Sequelize.HasManyRemoveAssociationsMixin<sys_csr_list, sys_csr_listId>;
  hasSys_csr_list!: Sequelize.HasManyHasAssociationMixin<sys_csr_list, sys_csr_listId>;
  hasSys_csr_lists!: Sequelize.HasManyHasAssociationsMixin<sys_csr_list, sys_csr_listId>;
  countSys_csr_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany sys_priority_list via co_info_id
  sys_priority_lists!: sys_priority_list[];
  getSys_priority_lists!: Sequelize.HasManyGetAssociationsMixin<sys_priority_list>;
  setSys_priority_lists!: Sequelize.HasManySetAssociationsMixin<sys_priority_list, sys_priority_listId>;
  addSys_priority_list!: Sequelize.HasManyAddAssociationMixin<sys_priority_list, sys_priority_listId>;
  addSys_priority_lists!: Sequelize.HasManyAddAssociationsMixin<sys_priority_list, sys_priority_listId>;
  createSys_priority_list!: Sequelize.HasManyCreateAssociationMixin<sys_priority_list>;
  removeSys_priority_list!: Sequelize.HasManyRemoveAssociationMixin<sys_priority_list, sys_priority_listId>;
  removeSys_priority_lists!: Sequelize.HasManyRemoveAssociationsMixin<sys_priority_list, sys_priority_listId>;
  hasSys_priority_list!: Sequelize.HasManyHasAssociationMixin<sys_priority_list, sys_priority_listId>;
  hasSys_priority_lists!: Sequelize.HasManyHasAssociationsMixin<sys_priority_list, sys_priority_listId>;
  countSys_priority_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany sys_tax_service_level_list via co_info_id
  sys_tax_service_level_lists!: sys_tax_service_level_list[];
  getSys_tax_service_level_lists!: Sequelize.HasManyGetAssociationsMixin<sys_tax_service_level_list>;
  setSys_tax_service_level_lists!: Sequelize.HasManySetAssociationsMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  addSys_tax_service_level_list!: Sequelize.HasManyAddAssociationMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  addSys_tax_service_level_lists!: Sequelize.HasManyAddAssociationsMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  createSys_tax_service_level_list!: Sequelize.HasManyCreateAssociationMixin<sys_tax_service_level_list>;
  removeSys_tax_service_level_list!: Sequelize.HasManyRemoveAssociationMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  removeSys_tax_service_level_lists!: Sequelize.HasManyRemoveAssociationsMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  hasSys_tax_service_level_list!: Sequelize.HasManyHasAssociationMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  hasSys_tax_service_level_lists!: Sequelize.HasManyHasAssociationsMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  countSys_tax_service_level_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany sys_user_group_list via co_info_id
  sys_user_group_lists!: sys_user_group_list[];
  getSys_user_group_lists!: Sequelize.HasManyGetAssociationsMixin<sys_user_group_list>;
  setSys_user_group_lists!: Sequelize.HasManySetAssociationsMixin<sys_user_group_list, sys_user_group_listId>;
  addSys_user_group_list!: Sequelize.HasManyAddAssociationMixin<sys_user_group_list, sys_user_group_listId>;
  addSys_user_group_lists!: Sequelize.HasManyAddAssociationsMixin<sys_user_group_list, sys_user_group_listId>;
  createSys_user_group_list!: Sequelize.HasManyCreateAssociationMixin<sys_user_group_list>;
  removeSys_user_group_list!: Sequelize.HasManyRemoveAssociationMixin<sys_user_group_list, sys_user_group_listId>;
  removeSys_user_group_lists!: Sequelize.HasManyRemoveAssociationsMixin<sys_user_group_list, sys_user_group_listId>;
  hasSys_user_group_list!: Sequelize.HasManyHasAssociationMixin<sys_user_group_list, sys_user_group_listId>;
  hasSys_user_group_lists!: Sequelize.HasManyHasAssociationsMixin<sys_user_group_list, sys_user_group_listId>;
  countSys_user_group_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany sys_workflow via co_info_id
  sys_workflows!: sys_workflow[];
  getSys_workflows!: Sequelize.HasManyGetAssociationsMixin<sys_workflow>;
  setSys_workflows!: Sequelize.HasManySetAssociationsMixin<sys_workflow, sys_workflowId>;
  addSys_workflow!: Sequelize.HasManyAddAssociationMixin<sys_workflow, sys_workflowId>;
  addSys_workflows!: Sequelize.HasManyAddAssociationsMixin<sys_workflow, sys_workflowId>;
  createSys_workflow!: Sequelize.HasManyCreateAssociationMixin<sys_workflow>;
  removeSys_workflow!: Sequelize.HasManyRemoveAssociationMixin<sys_workflow, sys_workflowId>;
  removeSys_workflows!: Sequelize.HasManyRemoveAssociationsMixin<sys_workflow, sys_workflowId>;
  hasSys_workflow!: Sequelize.HasManyHasAssociationMixin<sys_workflow, sys_workflowId>;
  hasSys_workflows!: Sequelize.HasManyHasAssociationsMixin<sys_workflow, sys_workflowId>;
  countSys_workflows!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany wf_task_amount_due via co_info_id
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
  // co_info hasMany wf_task_closure via co_info_id
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
  // co_info hasMany wf_task_contact via co_info_id
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
  // co_info hasMany wf_task_detail via co_info_id
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
  // co_info hasMany wf_task_detail_ar via co_info_id
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
  // co_info hasMany wf_task_detail_reg via co_info_id
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
  // co_info hasMany wf_task_refund_due via co_info_id
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
  // co_info hasMany workflow_list via co_info_id
  workflow_lists!: workflow_list[];
  getWorkflow_lists!: Sequelize.HasManyGetAssociationsMixin<workflow_list>;
  setWorkflow_lists!: Sequelize.HasManySetAssociationsMixin<workflow_list, workflow_listId>;
  addWorkflow_list!: Sequelize.HasManyAddAssociationMixin<workflow_list, workflow_listId>;
  addWorkflow_lists!: Sequelize.HasManyAddAssociationsMixin<workflow_list, workflow_listId>;
  createWorkflow_list!: Sequelize.HasManyCreateAssociationMixin<workflow_list>;
  removeWorkflow_list!: Sequelize.HasManyRemoveAssociationMixin<workflow_list, workflow_listId>;
  removeWorkflow_lists!: Sequelize.HasManyRemoveAssociationsMixin<workflow_list, workflow_listId>;
  hasWorkflow_list!: Sequelize.HasManyHasAssociationMixin<workflow_list, workflow_listId>;
  hasWorkflow_lists!: Sequelize.HasManyHasAssociationsMixin<workflow_list, workflow_listId>;
  countWorkflow_lists!: Sequelize.HasManyCountAssociationsMixin;
  // co_info hasMany zendesk_setting via co_info_id
  zendesk_settings!: zendesk_setting[];
  getZendesk_settings!: Sequelize.HasManyGetAssociationsMixin<zendesk_setting>;
  setZendesk_settings!: Sequelize.HasManySetAssociationsMixin<zendesk_setting, zendesk_settingId>;
  addZendesk_setting!: Sequelize.HasManyAddAssociationMixin<zendesk_setting, zendesk_settingId>;
  addZendesk_settings!: Sequelize.HasManyAddAssociationsMixin<zendesk_setting, zendesk_settingId>;
  createZendesk_setting!: Sequelize.HasManyCreateAssociationMixin<zendesk_setting>;
  removeZendesk_setting!: Sequelize.HasManyRemoveAssociationMixin<zendesk_setting, zendesk_settingId>;
  removeZendesk_settings!: Sequelize.HasManyRemoveAssociationsMixin<zendesk_setting, zendesk_settingId>;
  hasZendesk_setting!: Sequelize.HasManyHasAssociationMixin<zendesk_setting, zendesk_settingId>;
  hasZendesk_settings!: Sequelize.HasManyHasAssociationsMixin<zendesk_setting, zendesk_settingId>;
  countZendesk_settings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof co_info {
    return sequelize.define('co_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    industry: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_industries',
        key: 'id'
      }
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email_server_host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_port: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_server_encryption: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_display_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    letter_cc_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    letter_bcc_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    international: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    countries: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aos_option_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_date_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wf_options: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filing_options: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    enabled_ask_expert: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_assignment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    auto_letters: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    is_2fa_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    docusign_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    docusign_token: {
      type: DataTypes.JSON,
      allowNull: true
    },
    caf_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    digisigner_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    override_sequential_assignment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    email_service_provider: {
      type: DataTypes.STRING(144),
      allowNull: true,
      defaultValue: "Outlook"
    },
    use_custom_mailing_provider: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salesforce_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sso_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sso_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ocr_id_format: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    sequential_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mail_alert_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    alert_time: {
      type: DataTypes.JSON,
      allowNull: true
    },
    account_options_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    digisigner_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    docusign_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    filing_type_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    workflow_options_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salesforce_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    zendesk_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ocr_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sequential_preference: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "account-agency-tax_period"
    },
    registration_information_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    company_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stock_traded: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    recently_acquired: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    incorporated_state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    formerly_known_as: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    naics_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(355),
      allowNull: true
    },
    cc_the_csr: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    sequential_use_current_id: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    account_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    master_tax_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    yardi_settings_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    cost_center_mapping_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    managed_service_notes_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    co_branding_logo_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    custom_user_color_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    tableName: 'co_info',
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
        name: "co_info_industry_foreign",
        using: "BTREE",
        fields: [
          { name: "industry" },
        ]
      },
      {
        name: "co_info_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
      {
        name: "co_info_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
    ]
  }) as typeof co_info;
  }
}
