import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_country, agency_countryId } from './AgencyCountry';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';
import type { agency_id_info, agency_id_infoId } from './AgencyIdInfo';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_tax_form, agency_tax_formId } from './AgencyTaxForm';
import type { app_user_agency_info, app_user_agency_infoId } from './AppUserAgencyInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';

export interface agency_infoAttributes {
  id: number;
  country: number;
  name: string;
  description?: string;
  abbreviation: string;
  iso_3166_2_code?: string;
  expiration_date?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_infoPk = "id";
export type agency_infoId = agency_info[agency_infoPk];
export type agency_infoOptionalAttributes = "id" | "description" | "iso_3166_2_code" | "expiration_date" | "created_at" | "updated_at";
export type agency_infoCreationAttributes = Optional<agency_infoAttributes, agency_infoOptionalAttributes>;

export class agency_info extends Model<agency_infoAttributes, agency_infoCreationAttributes> implements agency_infoAttributes {
  id!: number;
  country!: number;
  name!: string;
  description?: string;
  abbreviation!: string;
  iso_3166_2_code?: string;
  expiration_date?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_info belongsTo agency_country via country
  country_agency_country!: agency_country;
  getCountry_agency_country!: Sequelize.BelongsToGetAssociationMixin<agency_country>;
  setCountry_agency_country!: Sequelize.BelongsToSetAssociationMixin<agency_country, agency_countryId>;
  createCountry_agency_country!: Sequelize.BelongsToCreateAssociationMixin<agency_country>;
  // agency_info hasMany account_agency via agency_info_id
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
  // agency_info hasMany agency_city via agency_info_id
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
  // agency_info hasMany agency_department via agency_info_id
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
  // agency_info hasMany agency_form_number via agency_info_id
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
  // agency_info hasMany agency_id_info via agency_info_id
  agency_id_infos!: agency_id_info[];
  getAgency_id_infos!: Sequelize.HasManyGetAssociationsMixin<agency_id_info>;
  setAgency_id_infos!: Sequelize.HasManySetAssociationsMixin<agency_id_info, agency_id_infoId>;
  addAgency_id_info!: Sequelize.HasManyAddAssociationMixin<agency_id_info, agency_id_infoId>;
  addAgency_id_infos!: Sequelize.HasManyAddAssociationsMixin<agency_id_info, agency_id_infoId>;
  createAgency_id_info!: Sequelize.HasManyCreateAssociationMixin<agency_id_info>;
  removeAgency_id_info!: Sequelize.HasManyRemoveAssociationMixin<agency_id_info, agency_id_infoId>;
  removeAgency_id_infos!: Sequelize.HasManyRemoveAssociationsMixin<agency_id_info, agency_id_infoId>;
  hasAgency_id_info!: Sequelize.HasManyHasAssociationMixin<agency_id_info, agency_id_infoId>;
  hasAgency_id_infos!: Sequelize.HasManyHasAssociationsMixin<agency_id_info, agency_id_infoId>;
  countAgency_id_infos!: Sequelize.HasManyCountAssociationsMixin;
  // agency_info hasMany agency_local via agency_info_id
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
  // agency_info hasMany agency_tax_form via agency_info_id
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
  // agency_info hasMany app_user_agency_info via agency_info_id
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
  // agency_info hasMany ocr_archived_document via agency_info_id
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
  // agency_info hasMany ocr_scanned_document via agency_info_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_info {
    return sequelize.define('agency_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abbreviation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iso_3166_2_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'agency_info',
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
        name: "agency_info_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
    ]
  }) as typeof agency_info;
  }
}
