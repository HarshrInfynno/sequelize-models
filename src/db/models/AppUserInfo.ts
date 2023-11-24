import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { account_contact_note, account_contact_noteId } from './AccountContactNote';
import type { account_info, account_infoId } from './AccountInfo';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_city_address, agency_city_addressId } from './AgencyCityAddress';
import type { agency_city_contact, agency_city_contactId } from './AgencyCityContact';
import type { agency_city_contact_note, agency_city_contact_noteId } from './AgencyCityContactNote';
import type { agency_city_link, agency_city_linkId } from './AgencyCityLink';
import type { agency_city_note, agency_city_noteId } from './AgencyCityNote';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_department_address, agency_department_addressId } from './AgencyDepartmentAddress';
import type { agency_department_contact, agency_department_contactId } from './AgencyDepartmentContact';
import type { agency_department_contact_note, agency_department_contact_noteId } from './AgencyDepartmentContactNote';
import type { agency_department_link, agency_department_linkId } from './AgencyDepartmentLink';
import type { agency_department_note, agency_department_noteId } from './AgencyDepartmentNote';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_local_address, agency_local_addressId } from './AgencyLocalAddress';
import type { agency_local_collector_contact_note, agency_local_collector_contact_noteId } from './AgencyLocalCollectorContactNote';
import type { agency_local_contact, agency_local_contactId } from './AgencyLocalContact';
import type { agency_local_contact_note, agency_local_contact_noteId } from './AgencyLocalContactNote';
import type { agency_local_link, agency_local_linkId } from './AgencyLocalLink';
import type { agency_local_note, agency_local_noteId } from './AgencyLocalNote';
import type { app_user_agency_info, app_user_agency_infoId } from './AppUserAgencyInfo';
import type { app_user_view, app_user_viewId } from './AppUserView';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';
import type { wf_task_detail_ar, wf_task_detail_arId } from './WfTaskDetailAr';
import type { wf_task_info, wf_task_infoId } from './WfTaskInfo';

export interface app_user_infoAttributes {
  id: number;
  co_info_id?: number;
  security_role?: string;
  is_system_admin?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  designation?: string;
  email: string;
  phone?: string;
  mobile_phone?: string;
  extension?: string;
  fax?: string;
  position?: string;
  user_group?: string;
  timezone?: string;
  profile_picture_link?: string;
  is_out_of_office: number;
  can_edit_dropdowns: number;
  can_add_departments: number;
  can_assign_workflows: number;
  can_edit_completed_tasks: number;
  can_manage_all_tasks: number;
  password?: string;
  email_verified_at?: string;
  remember_token?: string;
  user_otp?: number;
  last_login?: Date;
  last_login_ip?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  available_workflow_types?: string;
  available_filling_types?: string;
  inactive_date?: string;
  can_access_ocr?: number;
  can_access_settings?: number;
  show_delete_option?: number;
  can_edit_knowledgebase?: number;
  is_sys_admin?: number;
  is_billing_lead?: number;
  is_it_lead?: number;
  allow_login_without_sso?: number;
  manager_id?: number;
  lead_id?: number;
  sys_csr_list_id?: number;
  manager_2?: string;
  is_vendor?: number;
  can_access_co_registration?: number;
  custom_user_color_enabled?: number;
  custom_user_color: string;
}

export type app_user_infoPk = "id";
export type app_user_infoId = app_user_info[app_user_infoPk];
export type app_user_infoOptionalAttributes = "id" | "co_info_id" | "security_role" | "is_system_admin" | "first_name" | "middle_name" | "last_name" | "designation" | "phone" | "mobile_phone" | "extension" | "fax" | "position" | "user_group" | "timezone" | "profile_picture_link" | "is_out_of_office" | "can_edit_dropdowns" | "can_add_departments" | "can_assign_workflows" | "can_edit_completed_tasks" | "can_manage_all_tasks" | "password" | "email_verified_at" | "remember_token" | "user_otp" | "last_login" | "last_login_ip" | "created_by" | "updated_by" | "created_at" | "updated_at" | "available_workflow_types" | "available_filling_types" | "inactive_date" | "can_access_ocr" | "can_access_settings" | "show_delete_option" | "can_edit_knowledgebase" | "is_sys_admin" | "is_billing_lead" | "is_it_lead" | "allow_login_without_sso" | "manager_id" | "lead_id" | "sys_csr_list_id" | "manager_2" | "is_vendor" | "can_access_co_registration" | "custom_user_color_enabled" | "custom_user_color";
export type app_user_infoCreationAttributes = Optional<app_user_infoAttributes, app_user_infoOptionalAttributes>;

export class app_user_info extends Model<app_user_infoAttributes, app_user_infoCreationAttributes> implements app_user_infoAttributes {
  id!: number;
  co_info_id?: number;
  security_role?: string;
  is_system_admin?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  designation?: string;
  email!: string;
  phone?: string;
  mobile_phone?: string;
  extension?: string;
  fax?: string;
  position?: string;
  user_group?: string;
  timezone?: string;
  profile_picture_link?: string;
  is_out_of_office!: number;
  can_edit_dropdowns!: number;
  can_add_departments!: number;
  can_assign_workflows!: number;
  can_edit_completed_tasks!: number;
  can_manage_all_tasks!: number;
  password?: string;
  email_verified_at?: string;
  remember_token?: string;
  user_otp?: number;
  last_login?: Date;
  last_login_ip?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  available_workflow_types?: string;
  available_filling_types?: string;
  inactive_date?: string;
  can_access_ocr?: number;
  can_access_settings?: number;
  show_delete_option?: number;
  can_edit_knowledgebase?: number;
  is_sys_admin?: number;
  is_billing_lead?: number;
  is_it_lead?: number;
  allow_login_without_sso?: number;
  manager_id?: number;
  lead_id?: number;
  sys_csr_list_id?: number;
  manager_2?: string;
  is_vendor?: number;
  can_access_co_registration?: number;
  custom_user_color_enabled?: number;
  custom_user_color!: string;

  // app_user_info hasMany account_agency via created_by
  account_agencies!: account_agency[];
  getAccount_agencies!: Sequelize.HasManyGetAssociationsMixin<account_agency>;
  setAccount_agencies!: Sequelize.HasManySetAssociationsMixin<account_agency, account_agencyId>;
  addAccount_agency!: Sequelize.HasManyAddAssociationMixin<account_agency, account_agencyId>;
  addAccount_agencies!: Sequelize.HasManyAddAssociationsMixin<account_agency, account_agencyId>;
  createAccount_agency!: Sequelize.HasManyCreateAssociationMixin<account_agency>;
  removeAccount_agency!: Sequelize.HasManyRemoveAssociationMixin<account_agency, account_agencyId>;
  removeAccount_agencies!: Sequelize.HasManyRemoveAssociationsMixin<account_agency, account_agencyId>;
  hasAccount_agency!: Sequelize.HasManyHasAssociationMixin<account_agency, account_agencyId>;
  hasAccount_agencies!: Sequelize.HasManyHasAssociationsMixin<account_agency, account_agencyId>;
  countAccount_agencies!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_agency via updated_by
  updated_by_account_agencies!: account_agency[];
  getUpdated_by_account_agencies!: Sequelize.HasManyGetAssociationsMixin<account_agency>;
  setUpdated_by_account_agencies!: Sequelize.HasManySetAssociationsMixin<account_agency, account_agencyId>;
  addUpdated_by_account_agency!: Sequelize.HasManyAddAssociationMixin<account_agency, account_agencyId>;
  addUpdated_by_account_agencies!: Sequelize.HasManyAddAssociationsMixin<account_agency, account_agencyId>;
  createUpdated_by_account_agency!: Sequelize.HasManyCreateAssociationMixin<account_agency>;
  removeUpdated_by_account_agency!: Sequelize.HasManyRemoveAssociationMixin<account_agency, account_agencyId>;
  removeUpdated_by_account_agencies!: Sequelize.HasManyRemoveAssociationsMixin<account_agency, account_agencyId>;
  hasUpdated_by_account_agency!: Sequelize.HasManyHasAssociationMixin<account_agency, account_agencyId>;
  hasUpdated_by_account_agencies!: Sequelize.HasManyHasAssociationsMixin<account_agency, account_agencyId>;
  countUpdated_by_account_agencies!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_contact_info via created_by
  account_contact_infos!: account_contact_info[];
  getAccount_contact_infos!: Sequelize.HasManyGetAssociationsMixin<account_contact_info>;
  setAccount_contact_infos!: Sequelize.HasManySetAssociationsMixin<account_contact_info, account_contact_infoId>;
  addAccount_contact_info!: Sequelize.HasManyAddAssociationMixin<account_contact_info, account_contact_infoId>;
  addAccount_contact_infos!: Sequelize.HasManyAddAssociationsMixin<account_contact_info, account_contact_infoId>;
  createAccount_contact_info!: Sequelize.HasManyCreateAssociationMixin<account_contact_info>;
  removeAccount_contact_info!: Sequelize.HasManyRemoveAssociationMixin<account_contact_info, account_contact_infoId>;
  removeAccount_contact_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_info, account_contact_infoId>;
  hasAccount_contact_info!: Sequelize.HasManyHasAssociationMixin<account_contact_info, account_contact_infoId>;
  hasAccount_contact_infos!: Sequelize.HasManyHasAssociationsMixin<account_contact_info, account_contact_infoId>;
  countAccount_contact_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_contact_info via updated_by
  updated_by_account_contact_infos!: account_contact_info[];
  getUpdated_by_account_contact_infos!: Sequelize.HasManyGetAssociationsMixin<account_contact_info>;
  setUpdated_by_account_contact_infos!: Sequelize.HasManySetAssociationsMixin<account_contact_info, account_contact_infoId>;
  addUpdated_by_account_contact_info!: Sequelize.HasManyAddAssociationMixin<account_contact_info, account_contact_infoId>;
  addUpdated_by_account_contact_infos!: Sequelize.HasManyAddAssociationsMixin<account_contact_info, account_contact_infoId>;
  createUpdated_by_account_contact_info!: Sequelize.HasManyCreateAssociationMixin<account_contact_info>;
  removeUpdated_by_account_contact_info!: Sequelize.HasManyRemoveAssociationMixin<account_contact_info, account_contact_infoId>;
  removeUpdated_by_account_contact_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_info, account_contact_infoId>;
  hasUpdated_by_account_contact_info!: Sequelize.HasManyHasAssociationMixin<account_contact_info, account_contact_infoId>;
  hasUpdated_by_account_contact_infos!: Sequelize.HasManyHasAssociationsMixin<account_contact_info, account_contact_infoId>;
  countUpdated_by_account_contact_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_contact_note via created_by
  account_contact_notes!: account_contact_note[];
  getAccount_contact_notes!: Sequelize.HasManyGetAssociationsMixin<account_contact_note>;
  setAccount_contact_notes!: Sequelize.HasManySetAssociationsMixin<account_contact_note, account_contact_noteId>;
  addAccount_contact_note!: Sequelize.HasManyAddAssociationMixin<account_contact_note, account_contact_noteId>;
  addAccount_contact_notes!: Sequelize.HasManyAddAssociationsMixin<account_contact_note, account_contact_noteId>;
  createAccount_contact_note!: Sequelize.HasManyCreateAssociationMixin<account_contact_note>;
  removeAccount_contact_note!: Sequelize.HasManyRemoveAssociationMixin<account_contact_note, account_contact_noteId>;
  removeAccount_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_note, account_contact_noteId>;
  hasAccount_contact_note!: Sequelize.HasManyHasAssociationMixin<account_contact_note, account_contact_noteId>;
  hasAccount_contact_notes!: Sequelize.HasManyHasAssociationsMixin<account_contact_note, account_contact_noteId>;
  countAccount_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_contact_note via updated_by
  updated_by_account_contact_notes!: account_contact_note[];
  getUpdated_by_account_contact_notes!: Sequelize.HasManyGetAssociationsMixin<account_contact_note>;
  setUpdated_by_account_contact_notes!: Sequelize.HasManySetAssociationsMixin<account_contact_note, account_contact_noteId>;
  addUpdated_by_account_contact_note!: Sequelize.HasManyAddAssociationMixin<account_contact_note, account_contact_noteId>;
  addUpdated_by_account_contact_notes!: Sequelize.HasManyAddAssociationsMixin<account_contact_note, account_contact_noteId>;
  createUpdated_by_account_contact_note!: Sequelize.HasManyCreateAssociationMixin<account_contact_note>;
  removeUpdated_by_account_contact_note!: Sequelize.HasManyRemoveAssociationMixin<account_contact_note, account_contact_noteId>;
  removeUpdated_by_account_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<account_contact_note, account_contact_noteId>;
  hasUpdated_by_account_contact_note!: Sequelize.HasManyHasAssociationMixin<account_contact_note, account_contact_noteId>;
  hasUpdated_by_account_contact_notes!: Sequelize.HasManyHasAssociationsMixin<account_contact_note, account_contact_noteId>;
  countUpdated_by_account_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_info via assignment_2
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
  // app_user_info hasMany account_info via created_by
  created_by_account_infos!: account_info[];
  getCreated_by_account_infos!: Sequelize.HasManyGetAssociationsMixin<account_info>;
  setCreated_by_account_infos!: Sequelize.HasManySetAssociationsMixin<account_info, account_infoId>;
  addCreated_by_account_info!: Sequelize.HasManyAddAssociationMixin<account_info, account_infoId>;
  addCreated_by_account_infos!: Sequelize.HasManyAddAssociationsMixin<account_info, account_infoId>;
  createCreated_by_account_info!: Sequelize.HasManyCreateAssociationMixin<account_info>;
  removeCreated_by_account_info!: Sequelize.HasManyRemoveAssociationMixin<account_info, account_infoId>;
  removeCreated_by_account_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_info, account_infoId>;
  hasCreated_by_account_info!: Sequelize.HasManyHasAssociationMixin<account_info, account_infoId>;
  hasCreated_by_account_infos!: Sequelize.HasManyHasAssociationsMixin<account_info, account_infoId>;
  countCreated_by_account_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany account_info via updated_by
  updated_by_account_infos!: account_info[];
  getUpdated_by_account_infos!: Sequelize.HasManyGetAssociationsMixin<account_info>;
  setUpdated_by_account_infos!: Sequelize.HasManySetAssociationsMixin<account_info, account_infoId>;
  addUpdated_by_account_info!: Sequelize.HasManyAddAssociationMixin<account_info, account_infoId>;
  addUpdated_by_account_infos!: Sequelize.HasManyAddAssociationsMixin<account_info, account_infoId>;
  createUpdated_by_account_info!: Sequelize.HasManyCreateAssociationMixin<account_info>;
  removeUpdated_by_account_info!: Sequelize.HasManyRemoveAssociationMixin<account_info, account_infoId>;
  removeUpdated_by_account_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_info, account_infoId>;
  hasUpdated_by_account_info!: Sequelize.HasManyHasAssociationMixin<account_info, account_infoId>;
  hasUpdated_by_account_infos!: Sequelize.HasManyHasAssociationsMixin<account_info, account_infoId>;
  countUpdated_by_account_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city via created_by
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
  // app_user_info hasMany agency_city via updated_by
  updated_by_agency_cities!: agency_city[];
  getUpdated_by_agency_cities!: Sequelize.HasManyGetAssociationsMixin<agency_city>;
  setUpdated_by_agency_cities!: Sequelize.HasManySetAssociationsMixin<agency_city, agency_cityId>;
  addUpdated_by_agency_city!: Sequelize.HasManyAddAssociationMixin<agency_city, agency_cityId>;
  addUpdated_by_agency_cities!: Sequelize.HasManyAddAssociationsMixin<agency_city, agency_cityId>;
  createUpdated_by_agency_city!: Sequelize.HasManyCreateAssociationMixin<agency_city>;
  removeUpdated_by_agency_city!: Sequelize.HasManyRemoveAssociationMixin<agency_city, agency_cityId>;
  removeUpdated_by_agency_cities!: Sequelize.HasManyRemoveAssociationsMixin<agency_city, agency_cityId>;
  hasUpdated_by_agency_city!: Sequelize.HasManyHasAssociationMixin<agency_city, agency_cityId>;
  hasUpdated_by_agency_cities!: Sequelize.HasManyHasAssociationsMixin<agency_city, agency_cityId>;
  countUpdated_by_agency_cities!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_address via created_by
  agency_city_addresses!: agency_city_address[];
  getAgency_city_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_city_address>;
  setAgency_city_addresses!: Sequelize.HasManySetAssociationsMixin<agency_city_address, agency_city_addressId>;
  addAgency_city_address!: Sequelize.HasManyAddAssociationMixin<agency_city_address, agency_city_addressId>;
  addAgency_city_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_city_address, agency_city_addressId>;
  createAgency_city_address!: Sequelize.HasManyCreateAssociationMixin<agency_city_address>;
  removeAgency_city_address!: Sequelize.HasManyRemoveAssociationMixin<agency_city_address, agency_city_addressId>;
  removeAgency_city_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_address, agency_city_addressId>;
  hasAgency_city_address!: Sequelize.HasManyHasAssociationMixin<agency_city_address, agency_city_addressId>;
  hasAgency_city_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_city_address, agency_city_addressId>;
  countAgency_city_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_address via updated_by
  updated_by_agency_city_addresses!: agency_city_address[];
  getUpdated_by_agency_city_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_city_address>;
  setUpdated_by_agency_city_addresses!: Sequelize.HasManySetAssociationsMixin<agency_city_address, agency_city_addressId>;
  addUpdated_by_agency_city_address!: Sequelize.HasManyAddAssociationMixin<agency_city_address, agency_city_addressId>;
  addUpdated_by_agency_city_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_city_address, agency_city_addressId>;
  createUpdated_by_agency_city_address!: Sequelize.HasManyCreateAssociationMixin<agency_city_address>;
  removeUpdated_by_agency_city_address!: Sequelize.HasManyRemoveAssociationMixin<agency_city_address, agency_city_addressId>;
  removeUpdated_by_agency_city_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_address, agency_city_addressId>;
  hasUpdated_by_agency_city_address!: Sequelize.HasManyHasAssociationMixin<agency_city_address, agency_city_addressId>;
  hasUpdated_by_agency_city_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_city_address, agency_city_addressId>;
  countUpdated_by_agency_city_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_contact via created_by
  agency_city_contacts!: agency_city_contact[];
  getAgency_city_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact>;
  setAgency_city_contacts!: Sequelize.HasManySetAssociationsMixin<agency_city_contact, agency_city_contactId>;
  addAgency_city_contact!: Sequelize.HasManyAddAssociationMixin<agency_city_contact, agency_city_contactId>;
  addAgency_city_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact, agency_city_contactId>;
  createAgency_city_contact!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact>;
  removeAgency_city_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact, agency_city_contactId>;
  removeAgency_city_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact, agency_city_contactId>;
  hasAgency_city_contact!: Sequelize.HasManyHasAssociationMixin<agency_city_contact, agency_city_contactId>;
  hasAgency_city_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact, agency_city_contactId>;
  countAgency_city_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_contact via updated_by
  updated_by_agency_city_contacts!: agency_city_contact[];
  getUpdated_by_agency_city_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact>;
  setUpdated_by_agency_city_contacts!: Sequelize.HasManySetAssociationsMixin<agency_city_contact, agency_city_contactId>;
  addUpdated_by_agency_city_contact!: Sequelize.HasManyAddAssociationMixin<agency_city_contact, agency_city_contactId>;
  addUpdated_by_agency_city_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact, agency_city_contactId>;
  createUpdated_by_agency_city_contact!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact>;
  removeUpdated_by_agency_city_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact, agency_city_contactId>;
  removeUpdated_by_agency_city_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact, agency_city_contactId>;
  hasUpdated_by_agency_city_contact!: Sequelize.HasManyHasAssociationMixin<agency_city_contact, agency_city_contactId>;
  hasUpdated_by_agency_city_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact, agency_city_contactId>;
  countUpdated_by_agency_city_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_contact_note via created_by
  agency_city_contact_notes!: agency_city_contact_note[];
  getAgency_city_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact_note>;
  setAgency_city_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addAgency_city_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addAgency_city_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  createAgency_city_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact_note>;
  removeAgency_city_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  removeAgency_city_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasAgency_city_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasAgency_city_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  countAgency_city_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_contact_note via updated_by
  updated_by_agency_city_contact_notes!: agency_city_contact_note[];
  getUpdated_by_agency_city_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact_note>;
  setUpdated_by_agency_city_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addUpdated_by_agency_city_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addUpdated_by_agency_city_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  createUpdated_by_agency_city_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact_note>;
  removeUpdated_by_agency_city_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  removeUpdated_by_agency_city_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasUpdated_by_agency_city_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasUpdated_by_agency_city_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  countUpdated_by_agency_city_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_link via created_by
  agency_city_links!: agency_city_link[];
  getAgency_city_links!: Sequelize.HasManyGetAssociationsMixin<agency_city_link>;
  setAgency_city_links!: Sequelize.HasManySetAssociationsMixin<agency_city_link, agency_city_linkId>;
  addAgency_city_link!: Sequelize.HasManyAddAssociationMixin<agency_city_link, agency_city_linkId>;
  addAgency_city_links!: Sequelize.HasManyAddAssociationsMixin<agency_city_link, agency_city_linkId>;
  createAgency_city_link!: Sequelize.HasManyCreateAssociationMixin<agency_city_link>;
  removeAgency_city_link!: Sequelize.HasManyRemoveAssociationMixin<agency_city_link, agency_city_linkId>;
  removeAgency_city_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_link, agency_city_linkId>;
  hasAgency_city_link!: Sequelize.HasManyHasAssociationMixin<agency_city_link, agency_city_linkId>;
  hasAgency_city_links!: Sequelize.HasManyHasAssociationsMixin<agency_city_link, agency_city_linkId>;
  countAgency_city_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_link via updated_by
  updated_by_agency_city_links!: agency_city_link[];
  getUpdated_by_agency_city_links!: Sequelize.HasManyGetAssociationsMixin<agency_city_link>;
  setUpdated_by_agency_city_links!: Sequelize.HasManySetAssociationsMixin<agency_city_link, agency_city_linkId>;
  addUpdated_by_agency_city_link!: Sequelize.HasManyAddAssociationMixin<agency_city_link, agency_city_linkId>;
  addUpdated_by_agency_city_links!: Sequelize.HasManyAddAssociationsMixin<agency_city_link, agency_city_linkId>;
  createUpdated_by_agency_city_link!: Sequelize.HasManyCreateAssociationMixin<agency_city_link>;
  removeUpdated_by_agency_city_link!: Sequelize.HasManyRemoveAssociationMixin<agency_city_link, agency_city_linkId>;
  removeUpdated_by_agency_city_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_link, agency_city_linkId>;
  hasUpdated_by_agency_city_link!: Sequelize.HasManyHasAssociationMixin<agency_city_link, agency_city_linkId>;
  hasUpdated_by_agency_city_links!: Sequelize.HasManyHasAssociationsMixin<agency_city_link, agency_city_linkId>;
  countUpdated_by_agency_city_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_note via created_by
  agency_city_notes!: agency_city_note[];
  getAgency_city_notes!: Sequelize.HasManyGetAssociationsMixin<agency_city_note>;
  setAgency_city_notes!: Sequelize.HasManySetAssociationsMixin<agency_city_note, agency_city_noteId>;
  addAgency_city_note!: Sequelize.HasManyAddAssociationMixin<agency_city_note, agency_city_noteId>;
  addAgency_city_notes!: Sequelize.HasManyAddAssociationsMixin<agency_city_note, agency_city_noteId>;
  createAgency_city_note!: Sequelize.HasManyCreateAssociationMixin<agency_city_note>;
  removeAgency_city_note!: Sequelize.HasManyRemoveAssociationMixin<agency_city_note, agency_city_noteId>;
  removeAgency_city_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_note, agency_city_noteId>;
  hasAgency_city_note!: Sequelize.HasManyHasAssociationMixin<agency_city_note, agency_city_noteId>;
  hasAgency_city_notes!: Sequelize.HasManyHasAssociationsMixin<agency_city_note, agency_city_noteId>;
  countAgency_city_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_city_note via updated_by
  updated_by_agency_city_notes!: agency_city_note[];
  getUpdated_by_agency_city_notes!: Sequelize.HasManyGetAssociationsMixin<agency_city_note>;
  setUpdated_by_agency_city_notes!: Sequelize.HasManySetAssociationsMixin<agency_city_note, agency_city_noteId>;
  addUpdated_by_agency_city_note!: Sequelize.HasManyAddAssociationMixin<agency_city_note, agency_city_noteId>;
  addUpdated_by_agency_city_notes!: Sequelize.HasManyAddAssociationsMixin<agency_city_note, agency_city_noteId>;
  createUpdated_by_agency_city_note!: Sequelize.HasManyCreateAssociationMixin<agency_city_note>;
  removeUpdated_by_agency_city_note!: Sequelize.HasManyRemoveAssociationMixin<agency_city_note, agency_city_noteId>;
  removeUpdated_by_agency_city_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_note, agency_city_noteId>;
  hasUpdated_by_agency_city_note!: Sequelize.HasManyHasAssociationMixin<agency_city_note, agency_city_noteId>;
  hasUpdated_by_agency_city_notes!: Sequelize.HasManyHasAssociationsMixin<agency_city_note, agency_city_noteId>;
  countUpdated_by_agency_city_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department via created_by
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
  // app_user_info hasMany agency_department via updated_by
  updated_by_agency_departments!: agency_department[];
  getUpdated_by_agency_departments!: Sequelize.HasManyGetAssociationsMixin<agency_department>;
  setUpdated_by_agency_departments!: Sequelize.HasManySetAssociationsMixin<agency_department, agency_departmentId>;
  addUpdated_by_agency_department!: Sequelize.HasManyAddAssociationMixin<agency_department, agency_departmentId>;
  addUpdated_by_agency_departments!: Sequelize.HasManyAddAssociationsMixin<agency_department, agency_departmentId>;
  createUpdated_by_agency_department!: Sequelize.HasManyCreateAssociationMixin<agency_department>;
  removeUpdated_by_agency_department!: Sequelize.HasManyRemoveAssociationMixin<agency_department, agency_departmentId>;
  removeUpdated_by_agency_departments!: Sequelize.HasManyRemoveAssociationsMixin<agency_department, agency_departmentId>;
  hasUpdated_by_agency_department!: Sequelize.HasManyHasAssociationMixin<agency_department, agency_departmentId>;
  hasUpdated_by_agency_departments!: Sequelize.HasManyHasAssociationsMixin<agency_department, agency_departmentId>;
  countUpdated_by_agency_departments!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_address via created_by
  agency_department_addresses!: agency_department_address[];
  getAgency_department_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_department_address>;
  setAgency_department_addresses!: Sequelize.HasManySetAssociationsMixin<agency_department_address, agency_department_addressId>;
  addAgency_department_address!: Sequelize.HasManyAddAssociationMixin<agency_department_address, agency_department_addressId>;
  addAgency_department_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_department_address, agency_department_addressId>;
  createAgency_department_address!: Sequelize.HasManyCreateAssociationMixin<agency_department_address>;
  removeAgency_department_address!: Sequelize.HasManyRemoveAssociationMixin<agency_department_address, agency_department_addressId>;
  removeAgency_department_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_address, agency_department_addressId>;
  hasAgency_department_address!: Sequelize.HasManyHasAssociationMixin<agency_department_address, agency_department_addressId>;
  hasAgency_department_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_department_address, agency_department_addressId>;
  countAgency_department_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_address via updated_by
  updated_by_agency_department_addresses!: agency_department_address[];
  getUpdated_by_agency_department_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_department_address>;
  setUpdated_by_agency_department_addresses!: Sequelize.HasManySetAssociationsMixin<agency_department_address, agency_department_addressId>;
  addUpdated_by_agency_department_address!: Sequelize.HasManyAddAssociationMixin<agency_department_address, agency_department_addressId>;
  addUpdated_by_agency_department_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_department_address, agency_department_addressId>;
  createUpdated_by_agency_department_address!: Sequelize.HasManyCreateAssociationMixin<agency_department_address>;
  removeUpdated_by_agency_department_address!: Sequelize.HasManyRemoveAssociationMixin<agency_department_address, agency_department_addressId>;
  removeUpdated_by_agency_department_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_address, agency_department_addressId>;
  hasUpdated_by_agency_department_address!: Sequelize.HasManyHasAssociationMixin<agency_department_address, agency_department_addressId>;
  hasUpdated_by_agency_department_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_department_address, agency_department_addressId>;
  countUpdated_by_agency_department_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_contact via created_by
  agency_department_contacts!: agency_department_contact[];
  getAgency_department_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_department_contact>;
  setAgency_department_contacts!: Sequelize.HasManySetAssociationsMixin<agency_department_contact, agency_department_contactId>;
  addAgency_department_contact!: Sequelize.HasManyAddAssociationMixin<agency_department_contact, agency_department_contactId>;
  addAgency_department_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_department_contact, agency_department_contactId>;
  createAgency_department_contact!: Sequelize.HasManyCreateAssociationMixin<agency_department_contact>;
  removeAgency_department_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_department_contact, agency_department_contactId>;
  removeAgency_department_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_contact, agency_department_contactId>;
  hasAgency_department_contact!: Sequelize.HasManyHasAssociationMixin<agency_department_contact, agency_department_contactId>;
  hasAgency_department_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_department_contact, agency_department_contactId>;
  countAgency_department_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_contact via updated_by
  updated_by_agency_department_contacts!: agency_department_contact[];
  getUpdated_by_agency_department_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_department_contact>;
  setUpdated_by_agency_department_contacts!: Sequelize.HasManySetAssociationsMixin<agency_department_contact, agency_department_contactId>;
  addUpdated_by_agency_department_contact!: Sequelize.HasManyAddAssociationMixin<agency_department_contact, agency_department_contactId>;
  addUpdated_by_agency_department_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_department_contact, agency_department_contactId>;
  createUpdated_by_agency_department_contact!: Sequelize.HasManyCreateAssociationMixin<agency_department_contact>;
  removeUpdated_by_agency_department_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_department_contact, agency_department_contactId>;
  removeUpdated_by_agency_department_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_contact, agency_department_contactId>;
  hasUpdated_by_agency_department_contact!: Sequelize.HasManyHasAssociationMixin<agency_department_contact, agency_department_contactId>;
  hasUpdated_by_agency_department_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_department_contact, agency_department_contactId>;
  countUpdated_by_agency_department_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_contact_note via created_by
  agency_department_contact_notes!: agency_department_contact_note[];
  getAgency_department_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_department_contact_note>;
  setAgency_department_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addAgency_department_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addAgency_department_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  createAgency_department_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_department_contact_note>;
  removeAgency_department_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  removeAgency_department_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasAgency_department_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasAgency_department_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  countAgency_department_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_contact_note via updated_by
  updated_by_agency_department_contact_notes!: agency_department_contact_note[];
  getUpdated_by_agency_department_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_department_contact_note>;
  setUpdated_by_agency_department_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addUpdated_by_agency_department_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addUpdated_by_agency_department_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  createUpdated_by_agency_department_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_department_contact_note>;
  removeUpdated_by_agency_department_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  removeUpdated_by_agency_department_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasUpdated_by_agency_department_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasUpdated_by_agency_department_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  countUpdated_by_agency_department_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_link via created_by
  agency_department_links!: agency_department_link[];
  getAgency_department_links!: Sequelize.HasManyGetAssociationsMixin<agency_department_link>;
  setAgency_department_links!: Sequelize.HasManySetAssociationsMixin<agency_department_link, agency_department_linkId>;
  addAgency_department_link!: Sequelize.HasManyAddAssociationMixin<agency_department_link, agency_department_linkId>;
  addAgency_department_links!: Sequelize.HasManyAddAssociationsMixin<agency_department_link, agency_department_linkId>;
  createAgency_department_link!: Sequelize.HasManyCreateAssociationMixin<agency_department_link>;
  removeAgency_department_link!: Sequelize.HasManyRemoveAssociationMixin<agency_department_link, agency_department_linkId>;
  removeAgency_department_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_link, agency_department_linkId>;
  hasAgency_department_link!: Sequelize.HasManyHasAssociationMixin<agency_department_link, agency_department_linkId>;
  hasAgency_department_links!: Sequelize.HasManyHasAssociationsMixin<agency_department_link, agency_department_linkId>;
  countAgency_department_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_link via updated_by
  updated_by_agency_department_links!: agency_department_link[];
  getUpdated_by_agency_department_links!: Sequelize.HasManyGetAssociationsMixin<agency_department_link>;
  setUpdated_by_agency_department_links!: Sequelize.HasManySetAssociationsMixin<agency_department_link, agency_department_linkId>;
  addUpdated_by_agency_department_link!: Sequelize.HasManyAddAssociationMixin<agency_department_link, agency_department_linkId>;
  addUpdated_by_agency_department_links!: Sequelize.HasManyAddAssociationsMixin<agency_department_link, agency_department_linkId>;
  createUpdated_by_agency_department_link!: Sequelize.HasManyCreateAssociationMixin<agency_department_link>;
  removeUpdated_by_agency_department_link!: Sequelize.HasManyRemoveAssociationMixin<agency_department_link, agency_department_linkId>;
  removeUpdated_by_agency_department_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_link, agency_department_linkId>;
  hasUpdated_by_agency_department_link!: Sequelize.HasManyHasAssociationMixin<agency_department_link, agency_department_linkId>;
  hasUpdated_by_agency_department_links!: Sequelize.HasManyHasAssociationsMixin<agency_department_link, agency_department_linkId>;
  countUpdated_by_agency_department_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_note via created_by
  agency_department_notes!: agency_department_note[];
  getAgency_department_notes!: Sequelize.HasManyGetAssociationsMixin<agency_department_note>;
  setAgency_department_notes!: Sequelize.HasManySetAssociationsMixin<agency_department_note, agency_department_noteId>;
  addAgency_department_note!: Sequelize.HasManyAddAssociationMixin<agency_department_note, agency_department_noteId>;
  addAgency_department_notes!: Sequelize.HasManyAddAssociationsMixin<agency_department_note, agency_department_noteId>;
  createAgency_department_note!: Sequelize.HasManyCreateAssociationMixin<agency_department_note>;
  removeAgency_department_note!: Sequelize.HasManyRemoveAssociationMixin<agency_department_note, agency_department_noteId>;
  removeAgency_department_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_note, agency_department_noteId>;
  hasAgency_department_note!: Sequelize.HasManyHasAssociationMixin<agency_department_note, agency_department_noteId>;
  hasAgency_department_notes!: Sequelize.HasManyHasAssociationsMixin<agency_department_note, agency_department_noteId>;
  countAgency_department_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_department_note via updated_by
  updated_by_agency_department_notes!: agency_department_note[];
  getUpdated_by_agency_department_notes!: Sequelize.HasManyGetAssociationsMixin<agency_department_note>;
  setUpdated_by_agency_department_notes!: Sequelize.HasManySetAssociationsMixin<agency_department_note, agency_department_noteId>;
  addUpdated_by_agency_department_note!: Sequelize.HasManyAddAssociationMixin<agency_department_note, agency_department_noteId>;
  addUpdated_by_agency_department_notes!: Sequelize.HasManyAddAssociationsMixin<agency_department_note, agency_department_noteId>;
  createUpdated_by_agency_department_note!: Sequelize.HasManyCreateAssociationMixin<agency_department_note>;
  removeUpdated_by_agency_department_note!: Sequelize.HasManyRemoveAssociationMixin<agency_department_note, agency_department_noteId>;
  removeUpdated_by_agency_department_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_note, agency_department_noteId>;
  hasUpdated_by_agency_department_note!: Sequelize.HasManyHasAssociationMixin<agency_department_note, agency_department_noteId>;
  hasUpdated_by_agency_department_notes!: Sequelize.HasManyHasAssociationsMixin<agency_department_note, agency_department_noteId>;
  countUpdated_by_agency_department_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local via created_by
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
  // app_user_info hasMany agency_local via updated_by
  updated_by_agency_locals!: agency_local[];
  getUpdated_by_agency_locals!: Sequelize.HasManyGetAssociationsMixin<agency_local>;
  setUpdated_by_agency_locals!: Sequelize.HasManySetAssociationsMixin<agency_local, agency_localId>;
  addUpdated_by_agency_local!: Sequelize.HasManyAddAssociationMixin<agency_local, agency_localId>;
  addUpdated_by_agency_locals!: Sequelize.HasManyAddAssociationsMixin<agency_local, agency_localId>;
  createUpdated_by_agency_local!: Sequelize.HasManyCreateAssociationMixin<agency_local>;
  removeUpdated_by_agency_local!: Sequelize.HasManyRemoveAssociationMixin<agency_local, agency_localId>;
  removeUpdated_by_agency_locals!: Sequelize.HasManyRemoveAssociationsMixin<agency_local, agency_localId>;
  hasUpdated_by_agency_local!: Sequelize.HasManyHasAssociationMixin<agency_local, agency_localId>;
  hasUpdated_by_agency_locals!: Sequelize.HasManyHasAssociationsMixin<agency_local, agency_localId>;
  countUpdated_by_agency_locals!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_address via created_by
  agency_local_addresses!: agency_local_address[];
  getAgency_local_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_local_address>;
  setAgency_local_addresses!: Sequelize.HasManySetAssociationsMixin<agency_local_address, agency_local_addressId>;
  addAgency_local_address!: Sequelize.HasManyAddAssociationMixin<agency_local_address, agency_local_addressId>;
  addAgency_local_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_local_address, agency_local_addressId>;
  createAgency_local_address!: Sequelize.HasManyCreateAssociationMixin<agency_local_address>;
  removeAgency_local_address!: Sequelize.HasManyRemoveAssociationMixin<agency_local_address, agency_local_addressId>;
  removeAgency_local_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_address, agency_local_addressId>;
  hasAgency_local_address!: Sequelize.HasManyHasAssociationMixin<agency_local_address, agency_local_addressId>;
  hasAgency_local_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_local_address, agency_local_addressId>;
  countAgency_local_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_address via updated_by
  updated_by_agency_local_addresses!: agency_local_address[];
  getUpdated_by_agency_local_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_local_address>;
  setUpdated_by_agency_local_addresses!: Sequelize.HasManySetAssociationsMixin<agency_local_address, agency_local_addressId>;
  addUpdated_by_agency_local_address!: Sequelize.HasManyAddAssociationMixin<agency_local_address, agency_local_addressId>;
  addUpdated_by_agency_local_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_local_address, agency_local_addressId>;
  createUpdated_by_agency_local_address!: Sequelize.HasManyCreateAssociationMixin<agency_local_address>;
  removeUpdated_by_agency_local_address!: Sequelize.HasManyRemoveAssociationMixin<agency_local_address, agency_local_addressId>;
  removeUpdated_by_agency_local_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_address, agency_local_addressId>;
  hasUpdated_by_agency_local_address!: Sequelize.HasManyHasAssociationMixin<agency_local_address, agency_local_addressId>;
  hasUpdated_by_agency_local_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_local_address, agency_local_addressId>;
  countUpdated_by_agency_local_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_collector_contact_note via created_by
  agency_local_collector_contact_notes!: agency_local_collector_contact_note[];
  getAgency_local_collector_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_contact_note>;
  setAgency_local_collector_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addAgency_local_collector_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addAgency_local_collector_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  createAgency_local_collector_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_contact_note>;
  removeAgency_local_collector_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  removeAgency_local_collector_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasAgency_local_collector_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasAgency_local_collector_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  countAgency_local_collector_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_collector_contact_note via updated_by
  updated_by_agency_local_collector_contact_notes!: agency_local_collector_contact_note[];
  getUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_contact_note>;
  setUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addUpdated_by_agency_local_collector_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  createUpdated_by_agency_local_collector_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_contact_note>;
  removeUpdated_by_agency_local_collector_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  removeUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasUpdated_by_agency_local_collector_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  countUpdated_by_agency_local_collector_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_contact via created_by
  agency_local_contacts!: agency_local_contact[];
  getAgency_local_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact>;
  setAgency_local_contacts!: Sequelize.HasManySetAssociationsMixin<agency_local_contact, agency_local_contactId>;
  addAgency_local_contact!: Sequelize.HasManyAddAssociationMixin<agency_local_contact, agency_local_contactId>;
  addAgency_local_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact, agency_local_contactId>;
  createAgency_local_contact!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact>;
  removeAgency_local_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact, agency_local_contactId>;
  removeAgency_local_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact, agency_local_contactId>;
  hasAgency_local_contact!: Sequelize.HasManyHasAssociationMixin<agency_local_contact, agency_local_contactId>;
  hasAgency_local_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact, agency_local_contactId>;
  countAgency_local_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_contact via updated_by
  updated_by_agency_local_contacts!: agency_local_contact[];
  getUpdated_by_agency_local_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact>;
  setUpdated_by_agency_local_contacts!: Sequelize.HasManySetAssociationsMixin<agency_local_contact, agency_local_contactId>;
  addUpdated_by_agency_local_contact!: Sequelize.HasManyAddAssociationMixin<agency_local_contact, agency_local_contactId>;
  addUpdated_by_agency_local_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact, agency_local_contactId>;
  createUpdated_by_agency_local_contact!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact>;
  removeUpdated_by_agency_local_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact, agency_local_contactId>;
  removeUpdated_by_agency_local_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact, agency_local_contactId>;
  hasUpdated_by_agency_local_contact!: Sequelize.HasManyHasAssociationMixin<agency_local_contact, agency_local_contactId>;
  hasUpdated_by_agency_local_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact, agency_local_contactId>;
  countUpdated_by_agency_local_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_contact_note via created_by
  agency_local_contact_notes!: agency_local_contact_note[];
  getAgency_local_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact_note>;
  setAgency_local_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addAgency_local_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addAgency_local_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  createAgency_local_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact_note>;
  removeAgency_local_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  removeAgency_local_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasAgency_local_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasAgency_local_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  countAgency_local_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_contact_note via updated_by
  updated_by_agency_local_contact_notes!: agency_local_contact_note[];
  getUpdated_by_agency_local_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact_note>;
  setUpdated_by_agency_local_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addUpdated_by_agency_local_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addUpdated_by_agency_local_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  createUpdated_by_agency_local_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact_note>;
  removeUpdated_by_agency_local_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  removeUpdated_by_agency_local_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasUpdated_by_agency_local_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasUpdated_by_agency_local_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  countUpdated_by_agency_local_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_link via created_by
  agency_local_links!: agency_local_link[];
  getAgency_local_links!: Sequelize.HasManyGetAssociationsMixin<agency_local_link>;
  setAgency_local_links!: Sequelize.HasManySetAssociationsMixin<agency_local_link, agency_local_linkId>;
  addAgency_local_link!: Sequelize.HasManyAddAssociationMixin<agency_local_link, agency_local_linkId>;
  addAgency_local_links!: Sequelize.HasManyAddAssociationsMixin<agency_local_link, agency_local_linkId>;
  createAgency_local_link!: Sequelize.HasManyCreateAssociationMixin<agency_local_link>;
  removeAgency_local_link!: Sequelize.HasManyRemoveAssociationMixin<agency_local_link, agency_local_linkId>;
  removeAgency_local_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_link, agency_local_linkId>;
  hasAgency_local_link!: Sequelize.HasManyHasAssociationMixin<agency_local_link, agency_local_linkId>;
  hasAgency_local_links!: Sequelize.HasManyHasAssociationsMixin<agency_local_link, agency_local_linkId>;
  countAgency_local_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_link via updated_by
  updated_by_agency_local_links!: agency_local_link[];
  getUpdated_by_agency_local_links!: Sequelize.HasManyGetAssociationsMixin<agency_local_link>;
  setUpdated_by_agency_local_links!: Sequelize.HasManySetAssociationsMixin<agency_local_link, agency_local_linkId>;
  addUpdated_by_agency_local_link!: Sequelize.HasManyAddAssociationMixin<agency_local_link, agency_local_linkId>;
  addUpdated_by_agency_local_links!: Sequelize.HasManyAddAssociationsMixin<agency_local_link, agency_local_linkId>;
  createUpdated_by_agency_local_link!: Sequelize.HasManyCreateAssociationMixin<agency_local_link>;
  removeUpdated_by_agency_local_link!: Sequelize.HasManyRemoveAssociationMixin<agency_local_link, agency_local_linkId>;
  removeUpdated_by_agency_local_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_link, agency_local_linkId>;
  hasUpdated_by_agency_local_link!: Sequelize.HasManyHasAssociationMixin<agency_local_link, agency_local_linkId>;
  hasUpdated_by_agency_local_links!: Sequelize.HasManyHasAssociationsMixin<agency_local_link, agency_local_linkId>;
  countUpdated_by_agency_local_links!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_note via created_by
  agency_local_notes!: agency_local_note[];
  getAgency_local_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_note>;
  setAgency_local_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_note, agency_local_noteId>;
  addAgency_local_note!: Sequelize.HasManyAddAssociationMixin<agency_local_note, agency_local_noteId>;
  addAgency_local_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_note, agency_local_noteId>;
  createAgency_local_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_note>;
  removeAgency_local_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_note, agency_local_noteId>;
  removeAgency_local_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_note, agency_local_noteId>;
  hasAgency_local_note!: Sequelize.HasManyHasAssociationMixin<agency_local_note, agency_local_noteId>;
  hasAgency_local_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_note, agency_local_noteId>;
  countAgency_local_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany agency_local_note via updated_by
  updated_by_agency_local_notes!: agency_local_note[];
  getUpdated_by_agency_local_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_note>;
  setUpdated_by_agency_local_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_note, agency_local_noteId>;
  addUpdated_by_agency_local_note!: Sequelize.HasManyAddAssociationMixin<agency_local_note, agency_local_noteId>;
  addUpdated_by_agency_local_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_note, agency_local_noteId>;
  createUpdated_by_agency_local_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_note>;
  removeUpdated_by_agency_local_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_note, agency_local_noteId>;
  removeUpdated_by_agency_local_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_note, agency_local_noteId>;
  hasUpdated_by_agency_local_note!: Sequelize.HasManyHasAssociationMixin<agency_local_note, agency_local_noteId>;
  hasUpdated_by_agency_local_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_note, agency_local_noteId>;
  countUpdated_by_agency_local_notes!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany app_user_agency_info via app_user_info_id
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
  // app_user_info hasMany app_user_agency_info via created_by
  created_by_app_user_agency_infos!: app_user_agency_info[];
  getCreated_by_app_user_agency_infos!: Sequelize.HasManyGetAssociationsMixin<app_user_agency_info>;
  setCreated_by_app_user_agency_infos!: Sequelize.HasManySetAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  addCreated_by_app_user_agency_info!: Sequelize.HasManyAddAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  addCreated_by_app_user_agency_infos!: Sequelize.HasManyAddAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  createCreated_by_app_user_agency_info!: Sequelize.HasManyCreateAssociationMixin<app_user_agency_info>;
  removeCreated_by_app_user_agency_info!: Sequelize.HasManyRemoveAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  removeCreated_by_app_user_agency_infos!: Sequelize.HasManyRemoveAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  hasCreated_by_app_user_agency_info!: Sequelize.HasManyHasAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  hasCreated_by_app_user_agency_infos!: Sequelize.HasManyHasAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  countCreated_by_app_user_agency_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany app_user_agency_info via updated_by
  updated_by_app_user_agency_infos!: app_user_agency_info[];
  getUpdated_by_app_user_agency_infos!: Sequelize.HasManyGetAssociationsMixin<app_user_agency_info>;
  setUpdated_by_app_user_agency_infos!: Sequelize.HasManySetAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  addUpdated_by_app_user_agency_info!: Sequelize.HasManyAddAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  addUpdated_by_app_user_agency_infos!: Sequelize.HasManyAddAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  createUpdated_by_app_user_agency_info!: Sequelize.HasManyCreateAssociationMixin<app_user_agency_info>;
  removeUpdated_by_app_user_agency_info!: Sequelize.HasManyRemoveAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  removeUpdated_by_app_user_agency_infos!: Sequelize.HasManyRemoveAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  hasUpdated_by_app_user_agency_info!: Sequelize.HasManyHasAssociationMixin<app_user_agency_info, app_user_agency_infoId>;
  hasUpdated_by_app_user_agency_infos!: Sequelize.HasManyHasAssociationsMixin<app_user_agency_info, app_user_agency_infoId>;
  countUpdated_by_app_user_agency_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany app_user_view via user_id
  app_user_views!: app_user_view[];
  getApp_user_views!: Sequelize.HasManyGetAssociationsMixin<app_user_view>;
  setApp_user_views!: Sequelize.HasManySetAssociationsMixin<app_user_view, app_user_viewId>;
  addApp_user_view!: Sequelize.HasManyAddAssociationMixin<app_user_view, app_user_viewId>;
  addApp_user_views!: Sequelize.HasManyAddAssociationsMixin<app_user_view, app_user_viewId>;
  createApp_user_view!: Sequelize.HasManyCreateAssociationMixin<app_user_view>;
  removeApp_user_view!: Sequelize.HasManyRemoveAssociationMixin<app_user_view, app_user_viewId>;
  removeApp_user_views!: Sequelize.HasManyRemoveAssociationsMixin<app_user_view, app_user_viewId>;
  hasApp_user_view!: Sequelize.HasManyHasAssociationMixin<app_user_view, app_user_viewId>;
  hasApp_user_views!: Sequelize.HasManyHasAssociationsMixin<app_user_view, app_user_viewId>;
  countApp_user_views!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany ocr_archived_document via created_by
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
  // app_user_info hasMany ocr_scanned_document via created_by
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
  // app_user_info hasMany wf_info via created_by
  wf_infos!: wf_info[];
  getWf_infos!: Sequelize.HasManyGetAssociationsMixin<wf_info>;
  setWf_infos!: Sequelize.HasManySetAssociationsMixin<wf_info, wf_infoId>;
  addWf_info!: Sequelize.HasManyAddAssociationMixin<wf_info, wf_infoId>;
  addWf_infos!: Sequelize.HasManyAddAssociationsMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.HasManyCreateAssociationMixin<wf_info>;
  removeWf_info!: Sequelize.HasManyRemoveAssociationMixin<wf_info, wf_infoId>;
  removeWf_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_info, wf_infoId>;
  hasWf_info!: Sequelize.HasManyHasAssociationMixin<wf_info, wf_infoId>;
  hasWf_infos!: Sequelize.HasManyHasAssociationsMixin<wf_info, wf_infoId>;
  countWf_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany wf_info via updated_by
  updated_by_wf_infos!: wf_info[];
  getUpdated_by_wf_infos!: Sequelize.HasManyGetAssociationsMixin<wf_info>;
  setUpdated_by_wf_infos!: Sequelize.HasManySetAssociationsMixin<wf_info, wf_infoId>;
  addUpdated_by_wf_info!: Sequelize.HasManyAddAssociationMixin<wf_info, wf_infoId>;
  addUpdated_by_wf_infos!: Sequelize.HasManyAddAssociationsMixin<wf_info, wf_infoId>;
  createUpdated_by_wf_info!: Sequelize.HasManyCreateAssociationMixin<wf_info>;
  removeUpdated_by_wf_info!: Sequelize.HasManyRemoveAssociationMixin<wf_info, wf_infoId>;
  removeUpdated_by_wf_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_info, wf_infoId>;
  hasUpdated_by_wf_info!: Sequelize.HasManyHasAssociationMixin<wf_info, wf_infoId>;
  hasUpdated_by_wf_infos!: Sequelize.HasManyHasAssociationsMixin<wf_info, wf_infoId>;
  countUpdated_by_wf_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany wf_info_new via updated_by
  wf_info_news!: wf_info_new[];
  getWf_info_news!: Sequelize.HasManyGetAssociationsMixin<wf_info_new>;
  setWf_info_news!: Sequelize.HasManySetAssociationsMixin<wf_info_new, wf_info_newId>;
  addWf_info_new!: Sequelize.HasManyAddAssociationMixin<wf_info_new, wf_info_newId>;
  addWf_info_news!: Sequelize.HasManyAddAssociationsMixin<wf_info_new, wf_info_newId>;
  createWf_info_new!: Sequelize.HasManyCreateAssociationMixin<wf_info_new>;
  removeWf_info_new!: Sequelize.HasManyRemoveAssociationMixin<wf_info_new, wf_info_newId>;
  removeWf_info_news!: Sequelize.HasManyRemoveAssociationsMixin<wf_info_new, wf_info_newId>;
  hasWf_info_new!: Sequelize.HasManyHasAssociationMixin<wf_info_new, wf_info_newId>;
  hasWf_info_news!: Sequelize.HasManyHasAssociationsMixin<wf_info_new, wf_info_newId>;
  countWf_info_news!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany wf_info_new via created_by
  created_by_wf_info_news!: wf_info_new[];
  getCreated_by_wf_info_news!: Sequelize.HasManyGetAssociationsMixin<wf_info_new>;
  setCreated_by_wf_info_news!: Sequelize.HasManySetAssociationsMixin<wf_info_new, wf_info_newId>;
  addCreated_by_wf_info_new!: Sequelize.HasManyAddAssociationMixin<wf_info_new, wf_info_newId>;
  addCreated_by_wf_info_news!: Sequelize.HasManyAddAssociationsMixin<wf_info_new, wf_info_newId>;
  createCreated_by_wf_info_new!: Sequelize.HasManyCreateAssociationMixin<wf_info_new>;
  removeCreated_by_wf_info_new!: Sequelize.HasManyRemoveAssociationMixin<wf_info_new, wf_info_newId>;
  removeCreated_by_wf_info_news!: Sequelize.HasManyRemoveAssociationsMixin<wf_info_new, wf_info_newId>;
  hasCreated_by_wf_info_new!: Sequelize.HasManyHasAssociationMixin<wf_info_new, wf_info_newId>;
  hasCreated_by_wf_info_news!: Sequelize.HasManyHasAssociationsMixin<wf_info_new, wf_info_newId>;
  countCreated_by_wf_info_news!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info hasMany wf_task_detail_ar via ar_review_by
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
  // app_user_info hasMany wf_task_info via assigned_to
  wf_task_infos!: wf_task_info[];
  getWf_task_infos!: Sequelize.HasManyGetAssociationsMixin<wf_task_info>;
  setWf_task_infos!: Sequelize.HasManySetAssociationsMixin<wf_task_info, wf_task_infoId>;
  addWf_task_info!: Sequelize.HasManyAddAssociationMixin<wf_task_info, wf_task_infoId>;
  addWf_task_infos!: Sequelize.HasManyAddAssociationsMixin<wf_task_info, wf_task_infoId>;
  createWf_task_info!: Sequelize.HasManyCreateAssociationMixin<wf_task_info>;
  removeWf_task_info!: Sequelize.HasManyRemoveAssociationMixin<wf_task_info, wf_task_infoId>;
  removeWf_task_infos!: Sequelize.HasManyRemoveAssociationsMixin<wf_task_info, wf_task_infoId>;
  hasWf_task_info!: Sequelize.HasManyHasAssociationMixin<wf_task_info, wf_task_infoId>;
  hasWf_task_infos!: Sequelize.HasManyHasAssociationsMixin<wf_task_info, wf_task_infoId>;
  countWf_task_infos!: Sequelize.HasManyCountAssociationsMixin;
  // app_user_info belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_info {
    return sequelize.define('app_user_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    security_role: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_system_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middle_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_group: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_picture_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_out_of_office: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_edit_dropdowns: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_add_departments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_assign_workflows: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_edit_completed_tasks: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_manage_all_tasks: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_verified_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_otp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_ip: {
      type: DataTypes.STRING(45),
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
    available_workflow_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    available_filling_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inactive_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    can_access_ocr: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    can_access_settings: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    show_delete_option: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    can_edit_knowledgebase: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_sys_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_billing_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_it_lead: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    allow_login_without_sso: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    lead_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_csr_list_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    manager_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_vendor: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    can_access_co_registration: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    custom_user_color_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    custom_user_color: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "#f16630"
    }
  }, {
    tableName: 'app_user_info',
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
        name: "app_user_info_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "app_user_info_first_name_index",
        using: "BTREE",
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "app_user_info_middle_name_index",
        using: "BTREE",
        fields: [
          { name: "middle_name" },
        ]
      },
      {
        name: "app_user_info_last_name_index",
        using: "BTREE",
        fields: [
          { name: "last_name" },
        ]
      },
      {
        name: "app_user_info_email_index",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "app_user_info_phone_index",
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "app_user_info_position_index",
        using: "BTREE",
        fields: [
          { name: "position" },
        ]
      },
      {
        name: "app_user_info_designation_index",
        using: "BTREE",
        fields: [
          { name: "designation" },
        ]
      },
      {
        name: "app_user_info_extension_index",
        using: "BTREE",
        fields: [
          { name: "extension" },
        ]
      },
    ]
  }) as typeof app_user_info;
  }
}
