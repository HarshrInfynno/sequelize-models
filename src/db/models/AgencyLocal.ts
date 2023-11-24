import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { agency_local_address, agency_local_addressId } from './AgencyLocalAddress';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';
import type { agency_local_contact, agency_local_contactId } from './AgencyLocalContact';
import type { agency_local_link, agency_local_linkId } from './AgencyLocalLink';
import type { agency_local_note, agency_local_noteId } from './AgencyLocalNote';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface agency_localAttributes {
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
  tax_collector_id?: number;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;
}

export type agency_localPk = "id";
export type agency_localId = agency_local[agency_localPk];
export type agency_localOptionalAttributes = "id" | "co_info_id" | "description" | "filling_type_id" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "tax_collector_id" | "old_filling_type_id" | "old_agency_tax_type_id";
export type agency_localCreationAttributes = Optional<agency_localAttributes, agency_localOptionalAttributes>;

export class agency_local extends Model<agency_localAttributes, agency_localCreationAttributes> implements agency_localAttributes {
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
  tax_collector_id?: number;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;

  // agency_local belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // agency_local hasMany account_agency via agency_local
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
  // agency_local hasMany agency_local_address via agency_local_id
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
  // agency_local hasMany agency_local_contact via agency_local_id
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
  // agency_local hasMany agency_local_link via agency_local_id
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
  // agency_local hasMany agency_local_note via agency_local_id
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
  // agency_local hasMany ocr_archived_document via agency_local_id
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
  // agency_local hasMany ocr_scanned_document via agency_local_id
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
  // agency_local hasMany wf_info via agency_local
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
  // agency_local hasMany wf_info_new via agency_local
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
  // agency_local belongsTo agency_local_collector via tax_collector_id
  tax_collector!: agency_local_collector;
  getTax_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setTax_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createTax_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;
  // agency_local belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_local belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_local belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local {
    return sequelize.define('agency_local', {
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
      type: DataTypes.MEDIUMINT.UNSIGNED,
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
    tax_collector_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local_collector',
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
    tableName: 'agency_local',
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
        name: "agency_local_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_local_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_local_tax_colletor_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tax_collector_id" },
        ]
      },
    ]
  }) as typeof agency_local;
  }
}
