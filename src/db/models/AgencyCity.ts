import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { agency_city_address, agency_city_addressId } from './AgencyCityAddress';
import type { agency_city_contact, agency_city_contactId } from './AgencyCityContact';
import type { agency_city_link, agency_city_linkId } from './AgencyCityLink';
import type { agency_city_note, agency_city_noteId } from './AgencyCityNote';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';
import type { app_user_info, app_user_infoId } from './AppUserInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface agency_cityAttributes {
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

export type agency_cityPk = "id";
export type agency_cityId = agency_city[agency_cityPk];
export type agency_cityOptionalAttributes = "id" | "co_info_id" | "description" | "filling_type_id" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "tax_collector_id" | "old_filling_type_id" | "old_agency_tax_type_id";
export type agency_cityCreationAttributes = Optional<agency_cityAttributes, agency_cityOptionalAttributes>;

export class agency_city extends Model<agency_cityAttributes, agency_cityCreationAttributes> implements agency_cityAttributes {
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

  // agency_city hasMany account_agency via agency_city
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
  // agency_city hasMany agency_city_address via agency_city_id
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
  // agency_city hasMany agency_city_contact via agency_city_id
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
  // agency_city hasMany agency_city_link via agency_city_id
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
  // agency_city hasMany agency_city_note via agency_city_id
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
  // agency_city hasMany ocr_archived_document via agency_city_id
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
  // agency_city hasMany ocr_scanned_document via agency_city_id
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
  // agency_city hasMany wf_info via agency_city
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
  // agency_city hasMany wf_info_new via agency_city
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
  // agency_city belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // agency_city belongsTo agency_local_collector via tax_collector_id
  tax_collector!: agency_local_collector;
  getTax_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setTax_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createTax_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;
  // agency_city belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_city belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_city belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_city {
    return sequelize.define('agency_city', {
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
    tableName: 'agency_city',
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
        name: "agency_city_co_info_id_agency_info_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
          { name: "agency_info_id" },
          { name: "name" },
        ]
      },
      {
        name: "agency_city_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_city_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_city_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_city_tax_collector_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tax_collector_id" },
        ]
      },
    ]
  }) as typeof agency_city;
  }
}
