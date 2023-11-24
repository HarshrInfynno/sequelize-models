import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { agency_state, agency_stateId } from './AgencyState';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';

export interface agency_countryAttributes {
  id: number;
  name: string;
  country_code: string;
  iso_code: string;
  alpha2_code?: string;
  numeric_code?: string;
  calling_code: string;
}

export type agency_countryPk = "id";
export type agency_countryId = agency_country[agency_countryPk];
export type agency_countryOptionalAttributes = "id" | "alpha2_code" | "numeric_code";
export type agency_countryCreationAttributes = Optional<agency_countryAttributes, agency_countryOptionalAttributes>;

export class agency_country extends Model<agency_countryAttributes, agency_countryCreationAttributes> implements agency_countryAttributes {
  id!: number;
  name!: string;
  country_code!: string;
  iso_code!: string;
  alpha2_code?: string;
  numeric_code?: string;
  calling_code!: string;

  // agency_country hasMany account_info via country
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
  // agency_country hasMany agency_info via country
  agency_infos!: agency_info[];
  getAgency_infos!: Sequelize.HasManyGetAssociationsMixin<agency_info>;
  setAgency_infos!: Sequelize.HasManySetAssociationsMixin<agency_info, agency_infoId>;
  addAgency_info!: Sequelize.HasManyAddAssociationMixin<agency_info, agency_infoId>;
  addAgency_infos!: Sequelize.HasManyAddAssociationsMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.HasManyCreateAssociationMixin<agency_info>;
  removeAgency_info!: Sequelize.HasManyRemoveAssociationMixin<agency_info, agency_infoId>;
  removeAgency_infos!: Sequelize.HasManyRemoveAssociationsMixin<agency_info, agency_infoId>;
  hasAgency_info!: Sequelize.HasManyHasAssociationMixin<agency_info, agency_infoId>;
  hasAgency_infos!: Sequelize.HasManyHasAssociationsMixin<agency_info, agency_infoId>;
  countAgency_infos!: Sequelize.HasManyCountAssociationsMixin;
  // agency_country hasMany agency_state via country
  agency_states!: agency_state[];
  getAgency_states!: Sequelize.HasManyGetAssociationsMixin<agency_state>;
  setAgency_states!: Sequelize.HasManySetAssociationsMixin<agency_state, agency_stateId>;
  addAgency_state!: Sequelize.HasManyAddAssociationMixin<agency_state, agency_stateId>;
  addAgency_states!: Sequelize.HasManyAddAssociationsMixin<agency_state, agency_stateId>;
  createAgency_state!: Sequelize.HasManyCreateAssociationMixin<agency_state>;
  removeAgency_state!: Sequelize.HasManyRemoveAssociationMixin<agency_state, agency_stateId>;
  removeAgency_states!: Sequelize.HasManyRemoveAssociationsMixin<agency_state, agency_stateId>;
  hasAgency_state!: Sequelize.HasManyHasAssociationMixin<agency_state, agency_stateId>;
  hasAgency_states!: Sequelize.HasManyHasAssociationsMixin<agency_state, agency_stateId>;
  countAgency_states!: Sequelize.HasManyCountAssociationsMixin;
  // agency_country hasMany co_info via country
  co_infos!: co_info[];
  getCo_infos!: Sequelize.HasManyGetAssociationsMixin<co_info>;
  setCo_infos!: Sequelize.HasManySetAssociationsMixin<co_info, co_infoId>;
  addCo_info!: Sequelize.HasManyAddAssociationMixin<co_info, co_infoId>;
  addCo_infos!: Sequelize.HasManyAddAssociationsMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.HasManyCreateAssociationMixin<co_info>;
  removeCo_info!: Sequelize.HasManyRemoveAssociationMixin<co_info, co_infoId>;
  removeCo_infos!: Sequelize.HasManyRemoveAssociationsMixin<co_info, co_infoId>;
  hasCo_info!: Sequelize.HasManyHasAssociationMixin<co_info, co_infoId>;
  hasCo_infos!: Sequelize.HasManyHasAssociationsMixin<co_info, co_infoId>;
  countCo_infos!: Sequelize.HasManyCountAssociationsMixin;
  // agency_country hasMany ocr_archived_document via agency_countries_id
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
  // agency_country hasMany ocr_scanned_document via agency_countries_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_country {
    return sequelize.define('agency_country', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    iso_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    alpha2_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    numeric_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    calling_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'agency_countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof agency_country;
  }
}
