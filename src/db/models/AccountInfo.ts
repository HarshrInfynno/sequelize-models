import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { account_call_account_contact_info, account_call_account_contact_infoId } from './AccountCallAccountContactInfo';
import type { account_communication, account_communicationId } from './AccountCommunication';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { account_location_list, account_location_listId } from './AccountLocationList';
import type { account_note, account_noteId } from './AccountNote';
import type { agency_country, agency_countryId } from './AgencyCountry';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { sys_csr_list, sys_csr_listId } from './SysCsrList';
import type { sys_priority_list, sys_priority_listId } from './SysPriorityList';
import type { sys_tax_service_level_list, sys_tax_service_level_listId } from './SysTaxServiceLevelList';
import type { sys_user_group_list, sys_user_group_listId } from './SysUserGroupList';
import type { wf_bulk_notice, wf_bulk_noticeId } from './WfBulkNotice';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface account_infoAttributes {
  id: number;
  ants_client_id?: number;
  co_info_id: number;
  account_id?: string;
  parent?: number;
  name?: string;
  dba?: string;
  country?: number;
  state?: number;
  address_1?: string;
  address_2?: string;
  city?: string;
  zip?: string;
  account_location_list_id?: number;
  location_name?: string;
  phone?: string;
  fax?: string;
  fed_id?: string;
  start_date?: string;
  end_date?: string;
  sys_csr_list_id?: number;
  tax_service_start_date?: string;
  tax_service_end_date?: string;
  sys_tax_service_level_list_id?: number;
  sys_priority_list_id?: number;
  sys_user_group_list_id?: number;
  estimated_annual_revenue?: string;
  website?: string;
  company_set?: string;
  account_expected_revenue?: number;
  aos_option_1?: string;
  aos_option_2?: string;
  aos_option_3?: string;
  aos_option_4?: number;
  aos_date_1?: string;
  aos_date_2?: string;
  aos_date_3?: string;
  aos_date_4?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
  account_logo?: string;
  assignment_1?: number;
  assignment_2?: number;
  internal_id_1?: string;
  internal_id_2?: string;
  company_type?: string;
  stock_traded?: number;
  recently_acquired?: number;
  incorporated_state?: number;
  incorporation_date?: Date;
  formerly_known_as?: string;
  naics_code?: string;
  business_type?: string;
  business_description?: string;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;
}

export type account_infoPk = "id";
export type account_infoId = account_info[account_infoPk];
export type account_infoOptionalAttributes = "id" | "ants_client_id" | "account_id" | "parent" | "name" | "dba" | "country" | "state" | "address_1" | "address_2" | "city" | "zip" | "account_location_list_id" | "location_name" | "phone" | "fax" | "fed_id" | "start_date" | "end_date" | "sys_csr_list_id" | "tax_service_start_date" | "tax_service_end_date" | "sys_tax_service_level_list_id" | "sys_priority_list_id" | "sys_user_group_list_id" | "estimated_annual_revenue" | "website" | "company_set" | "account_expected_revenue" | "aos_option_1" | "aos_option_2" | "aos_option_3" | "aos_option_4" | "aos_date_1" | "aos_date_2" | "aos_date_3" | "aos_date_4" | "created_at" | "updated_at" | "created_by" | "updated_by" | "account_logo" | "assignment_1" | "assignment_2" | "internal_id_1" | "internal_id_2" | "company_type" | "stock_traded" | "recently_acquired" | "incorporated_state" | "incorporation_date" | "formerly_known_as" | "naics_code" | "business_type" | "business_description" | "cc1" | "cc2" | "cc3" | "cc4" | "cc5";
export type account_infoCreationAttributes = Optional<account_infoAttributes, account_infoOptionalAttributes>;

export class account_info extends Model<account_infoAttributes, account_infoCreationAttributes> implements account_infoAttributes {
  id!: number;
  ants_client_id?: number;
  co_info_id!: number;
  account_id?: string;
  parent?: number;
  name?: string;
  dba?: string;
  country?: number;
  state?: number;
  address_1?: string;
  address_2?: string;
  city?: string;
  zip?: string;
  account_location_list_id?: number;
  location_name?: string;
  phone?: string;
  fax?: string;
  fed_id?: string;
  start_date?: string;
  end_date?: string;
  sys_csr_list_id?: number;
  tax_service_start_date?: string;
  tax_service_end_date?: string;
  sys_tax_service_level_list_id?: number;
  sys_priority_list_id?: number;
  sys_user_group_list_id?: number;
  estimated_annual_revenue?: string;
  website?: string;
  company_set?: string;
  account_expected_revenue?: number;
  aos_option_1?: string;
  aos_option_2?: string;
  aos_option_3?: string;
  aos_option_4?: number;
  aos_date_1?: string;
  aos_date_2?: string;
  aos_date_3?: string;
  aos_date_4?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
  account_logo?: string;
  assignment_1?: number;
  assignment_2?: number;
  internal_id_1?: string;
  internal_id_2?: string;
  company_type?: string;
  stock_traded?: number;
  recently_acquired?: number;
  incorporated_state?: number;
  incorporation_date?: Date;
  formerly_known_as?: string;
  naics_code?: string;
  business_type?: string;
  business_description?: string;
  cc1?: string;
  cc2?: string;
  cc3?: string;
  cc4?: string;
  cc5?: string;

  // account_info hasMany account_agency via account_info_id
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
  // account_info hasMany account_call_account_contact_info via account_info_id
  account_call_account_contact_infos!: account_call_account_contact_info[];
  getAccount_call_account_contact_infos!: Sequelize.HasManyGetAssociationsMixin<account_call_account_contact_info>;
  setAccount_call_account_contact_infos!: Sequelize.HasManySetAssociationsMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  addAccount_call_account_contact_info!: Sequelize.HasManyAddAssociationMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  addAccount_call_account_contact_infos!: Sequelize.HasManyAddAssociationsMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  createAccount_call_account_contact_info!: Sequelize.HasManyCreateAssociationMixin<account_call_account_contact_info>;
  removeAccount_call_account_contact_info!: Sequelize.HasManyRemoveAssociationMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  removeAccount_call_account_contact_infos!: Sequelize.HasManyRemoveAssociationsMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  hasAccount_call_account_contact_info!: Sequelize.HasManyHasAssociationMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  hasAccount_call_account_contact_infos!: Sequelize.HasManyHasAssociationsMixin<account_call_account_contact_info, account_call_account_contact_infoId>;
  countAccount_call_account_contact_infos!: Sequelize.HasManyCountAssociationsMixin;
  // account_info hasMany account_communication via account_info_id
  account_communications!: account_communication[];
  getAccount_communications!: Sequelize.HasManyGetAssociationsMixin<account_communication>;
  setAccount_communications!: Sequelize.HasManySetAssociationsMixin<account_communication, account_communicationId>;
  addAccount_communication!: Sequelize.HasManyAddAssociationMixin<account_communication, account_communicationId>;
  addAccount_communications!: Sequelize.HasManyAddAssociationsMixin<account_communication, account_communicationId>;
  createAccount_communication!: Sequelize.HasManyCreateAssociationMixin<account_communication>;
  removeAccount_communication!: Sequelize.HasManyRemoveAssociationMixin<account_communication, account_communicationId>;
  removeAccount_communications!: Sequelize.HasManyRemoveAssociationsMixin<account_communication, account_communicationId>;
  hasAccount_communication!: Sequelize.HasManyHasAssociationMixin<account_communication, account_communicationId>;
  hasAccount_communications!: Sequelize.HasManyHasAssociationsMixin<account_communication, account_communicationId>;
  countAccount_communications!: Sequelize.HasManyCountAssociationsMixin;
  // account_info hasMany account_contact_info via account_info_id
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
  // account_info hasMany account_note via account_info_id
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
  // account_info hasMany ocr_archived_document via account_info_id
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
  // account_info hasMany ocr_scanned_document via account_info_id
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
  // account_info hasMany wf_bulk_notice via account_info_id
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
  // account_info belongsToMany wf_info via account_info_id and wf_info_id
  wf_info_id_wf_infos!: wf_info[];
  getWf_info_id_wf_infos!: Sequelize.BelongsToManyGetAssociationsMixin<wf_info>;
  setWf_info_id_wf_infos!: Sequelize.BelongsToManySetAssociationsMixin<wf_info, wf_infoId>;
  addWf_info_id_wf_info!: Sequelize.BelongsToManyAddAssociationMixin<wf_info, wf_infoId>;
  addWf_info_id_wf_infos!: Sequelize.BelongsToManyAddAssociationsMixin<wf_info, wf_infoId>;
  createWf_info_id_wf_info!: Sequelize.BelongsToManyCreateAssociationMixin<wf_info>;
  removeWf_info_id_wf_info!: Sequelize.BelongsToManyRemoveAssociationMixin<wf_info, wf_infoId>;
  removeWf_info_id_wf_infos!: Sequelize.BelongsToManyRemoveAssociationsMixin<wf_info, wf_infoId>;
  hasWf_info_id_wf_info!: Sequelize.BelongsToManyHasAssociationMixin<wf_info, wf_infoId>;
  hasWf_info_id_wf_infos!: Sequelize.BelongsToManyHasAssociationsMixin<wf_info, wf_infoId>;
  countWf_info_id_wf_infos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // account_info hasMany wf_info via account_info_id
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
  // account_info hasMany wf_info_new via account_info_id
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
  // account_info belongsTo account_location_list via account_location_list_id
  account_location_list!: account_location_list;
  getAccount_location_list!: Sequelize.BelongsToGetAssociationMixin<account_location_list>;
  setAccount_location_list!: Sequelize.BelongsToSetAssociationMixin<account_location_list, account_location_listId>;
  createAccount_location_list!: Sequelize.BelongsToCreateAssociationMixin<account_location_list>;
  // account_info belongsTo agency_country via country
  country_agency_country!: agency_country;
  getCountry_agency_country!: Sequelize.BelongsToGetAssociationMixin<agency_country>;
  setCountry_agency_country!: Sequelize.BelongsToSetAssociationMixin<agency_country, agency_countryId>;
  createCountry_agency_country!: Sequelize.BelongsToCreateAssociationMixin<agency_country>;
  // account_info belongsTo app_user_info via assignment_2
  assignment_2_app_user_info!: app_user_info;
  getAssignment_2_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setAssignment_2_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createAssignment_2_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_info belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_info belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_info belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // account_info belongsTo sys_csr_list via sys_csr_list_id
  sys_csr_list!: sys_csr_list;
  getSys_csr_list!: Sequelize.BelongsToGetAssociationMixin<sys_csr_list>;
  setSys_csr_list!: Sequelize.BelongsToSetAssociationMixin<sys_csr_list, sys_csr_listId>;
  createSys_csr_list!: Sequelize.BelongsToCreateAssociationMixin<sys_csr_list>;
  // account_info belongsTo sys_priority_list via sys_priority_list_id
  sys_priority_list!: sys_priority_list;
  getSys_priority_list!: Sequelize.BelongsToGetAssociationMixin<sys_priority_list>;
  setSys_priority_list!: Sequelize.BelongsToSetAssociationMixin<sys_priority_list, sys_priority_listId>;
  createSys_priority_list!: Sequelize.BelongsToCreateAssociationMixin<sys_priority_list>;
  // account_info belongsTo sys_tax_service_level_list via sys_tax_service_level_list_id
  sys_tax_service_level_list!: sys_tax_service_level_list;
  getSys_tax_service_level_list!: Sequelize.BelongsToGetAssociationMixin<sys_tax_service_level_list>;
  setSys_tax_service_level_list!: Sequelize.BelongsToSetAssociationMixin<sys_tax_service_level_list, sys_tax_service_level_listId>;
  createSys_tax_service_level_list!: Sequelize.BelongsToCreateAssociationMixin<sys_tax_service_level_list>;
  // account_info belongsTo sys_user_group_list via sys_user_group_list_id
  sys_user_group_list!: sys_user_group_list;
  getSys_user_group_list!: Sequelize.BelongsToGetAssociationMixin<sys_user_group_list>;
  setSys_user_group_list!: Sequelize.BelongsToSetAssociationMixin<sys_user_group_list, sys_user_group_listId>;
  createSys_user_group_list!: Sequelize.BelongsToCreateAssociationMixin<sys_user_group_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_info {
    return sequelize.define('account_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ants_client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dba: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    address_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    account_location_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_location_list',
        key: 'id'
      }
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fed_id: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "1900-01-01"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2100-12-31"
    },
    sys_csr_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_csr_list',
        key: 'id'
      }
    },
    tax_service_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "1900-01-01"
    },
    tax_service_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2100-12-31"
    },
    sys_tax_service_level_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_tax_service_level_list',
        key: 'id'
      }
    },
    sys_priority_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_priority_list',
        key: 'id'
      }
    },
    sys_user_group_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_user_group_list',
        key: 'id'
      }
    },
    estimated_annual_revenue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_set: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    account_expected_revenue: {
      type: DataTypes.DOUBLE(16,2),
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
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    aos_date_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_4: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    account_logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assignment_1: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    assignment_2: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    internal_id_1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(45),
      allowNull: true
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
    }
  }, {
    tableName: 'account_info',
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
        name: "account_info_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
      {
        name: "account_info_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "account_info_account_location_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_location_list_id" },
        ]
      },
      {
        name: "account_info_sys_tax_service_level_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_tax_service_level_list_id" },
        ]
      },
      {
        name: "account_info_sys_priority_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_priority_list_id" },
        ]
      },
      {
        name: "account_info_sys_user_group_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_user_group_list_id" },
        ]
      },
      {
        name: "account_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "account_info_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "account_info_account_id_index",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "account_info_assignment_2_foreign",
        using: "BTREE",
        fields: [
          { name: "assignment_2" },
        ]
      },
      {
        name: "account_info_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "account_info_fed_id_index",
        using: "BTREE",
        fields: [
          { name: "fed_id", length: 768 },
        ]
      },
      {
        name: "account_info_assignment_1_foreign",
        using: "BTREE",
        fields: [
          { name: "assignment_1" },
        ]
      },
      {
        name: "account_info_sys_csr_list_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_csr_list_id" },
        ]
      },
    ]
  }) as typeof account_info;
  }
}
