import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_department_address, agency_department_addressId } from './AgencyDepartmentAddress';
import type { agency_department_contact, agency_department_contactId } from './AgencyDepartmentContact';
import type { agency_department_link, agency_department_linkId } from './AgencyDepartmentLink';
import type { agency_department_note, agency_department_noteId } from './AgencyDepartmentNote';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface agency_departmentAttributes {
  id: number;
  co_info_id?: number;
  agency_info_id: number;
  name: string;
  description?: string;
  filling_type_id?: number;
  agency_tax_type_id?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;
}

export type agency_departmentPk = "id";
export type agency_departmentId = agency_department[agency_departmentPk];
export type agency_departmentOptionalAttributes = "id" | "co_info_id" | "description" | "filling_type_id" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "old_filling_type_id" | "old_agency_tax_type_id";
export type agency_departmentCreationAttributes = Optional<agency_departmentAttributes, agency_departmentOptionalAttributes>;

export class agency_department extends Model<agency_departmentAttributes, agency_departmentCreationAttributes> implements agency_departmentAttributes {
  id!: number;
  co_info_id?: number;
  agency_info_id!: number;
  name!: string;
  description?: string;
  filling_type_id?: number;
  agency_tax_type_id?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;

  // agency_department hasMany agency_department_address via agency_department_id
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
  // agency_department hasMany agency_department_contact via agency_department_id
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
  // agency_department hasMany agency_department_link via agency_department_id
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
  // agency_department hasMany agency_department_note via agency_department_id
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
  // agency_department hasMany ocr_archived_document via agency_dept_id
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
  // agency_department hasMany ocr_scanned_document via agency_dept_id
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
  // agency_department hasMany wf_info via agency_dept
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
  // agency_department hasMany wf_info_new via agency_dept
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
  // agency_department belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // agency_department belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_department belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_department belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_department {
    return sequelize.define('agency_department', {
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
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "app_usage_types.id"
    },
    agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
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
    old_filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    old_agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    tableName: 'agency_department',
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
        name: "agency_department_co_info_id_agency_info_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
          { name: "agency_info_id" },
          { name: "name" },
        ]
      },
      {
        name: "agency_department_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_department_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof agency_department;
  }
}
