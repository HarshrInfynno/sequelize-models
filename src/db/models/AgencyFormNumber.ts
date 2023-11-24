import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_number_attribute, agency_form_number_attributeId } from './AgencyFormNumberAttribute';
import type { agency_form_number_note, agency_form_number_noteId } from './AgencyFormNumberNote';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { ocr_archived_document, ocr_archived_documentId } from './OcrArchivedDocument';
import type { ocr_scanned_document, ocr_scanned_documentId } from './OcrScannedDocument';
import type { sys_workflow, sys_workflowId } from './SysWorkflow';

export interface agency_form_numberAttributes {
  id: number;
  document_id?: string;
  co_info_id?: number;
  agency_countries_id?: number;
  agency_info_id: number;
  agency_type?: string;
  agency_dept_id?: number;
  form_number: string;
  filling_type?: string;
  description?: string;
  notice_type?: number;
  notes?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  s3_path?: string;
  s3_name?: string;
  csv_files_locations?: object;
  document_processed?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  file_text?: string;
  date_conversion?: number;
  last_four?: number;
  form_configured?: number;
  tax_type?: string;
  filing_type_id?: number;
  tax_type_id?: number;
  old_filling_type?: string;
}

export type agency_form_numberPk = "id";
export type agency_form_numberId = agency_form_number[agency_form_numberPk];
export type agency_form_numberOptionalAttributes = "id" | "document_id" | "co_info_id" | "agency_countries_id" | "agency_type" | "agency_dept_id" | "filling_type" | "description" | "notice_type" | "notes" | "updated_by" | "created_at" | "updated_at" | "s3_path" | "s3_name" | "csv_files_locations" | "document_processed" | "agency_local_id" | "agency_city_id" | "file_text" | "date_conversion" | "last_four" | "form_configured" | "tax_type" | "filing_type_id" | "tax_type_id" | "old_filling_type";
export type agency_form_numberCreationAttributes = Optional<agency_form_numberAttributes, agency_form_numberOptionalAttributes>;

export class agency_form_number extends Model<agency_form_numberAttributes, agency_form_numberCreationAttributes> implements agency_form_numberAttributes {
  id!: number;
  document_id?: string;
  co_info_id?: number;
  agency_countries_id?: number;
  agency_info_id!: number;
  agency_type?: string;
  agency_dept_id?: number;
  form_number!: string;
  filling_type?: string;
  description?: string;
  notice_type?: number;
  notes?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  s3_path?: string;
  s3_name?: string;
  csv_files_locations?: object;
  document_processed?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  file_text?: string;
  date_conversion?: number;
  last_four?: number;
  form_configured?: number;
  tax_type?: string;
  filing_type_id?: number;
  tax_type_id?: number;
  old_filling_type?: string;

  // agency_form_number hasMany agency_form_number_attribute via agency_form_number_id
  agency_form_number_attributes!: agency_form_number_attribute[];
  getAgency_form_number_attributes!: Sequelize.HasManyGetAssociationsMixin<agency_form_number_attribute>;
  setAgency_form_number_attributes!: Sequelize.HasManySetAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  addAgency_form_number_attribute!: Sequelize.HasManyAddAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  addAgency_form_number_attributes!: Sequelize.HasManyAddAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  createAgency_form_number_attribute!: Sequelize.HasManyCreateAssociationMixin<agency_form_number_attribute>;
  removeAgency_form_number_attribute!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  removeAgency_form_number_attributes!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  hasAgency_form_number_attribute!: Sequelize.HasManyHasAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  hasAgency_form_number_attributes!: Sequelize.HasManyHasAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  countAgency_form_number_attributes!: Sequelize.HasManyCountAssociationsMixin;
  // agency_form_number hasMany agency_form_number_note via agency_form_number_id
  agency_form_number_notes!: agency_form_number_note[];
  getAgency_form_number_notes!: Sequelize.HasManyGetAssociationsMixin<agency_form_number_note>;
  setAgency_form_number_notes!: Sequelize.HasManySetAssociationsMixin<agency_form_number_note, agency_form_number_noteId>;
  addAgency_form_number_note!: Sequelize.HasManyAddAssociationMixin<agency_form_number_note, agency_form_number_noteId>;
  addAgency_form_number_notes!: Sequelize.HasManyAddAssociationsMixin<agency_form_number_note, agency_form_number_noteId>;
  createAgency_form_number_note!: Sequelize.HasManyCreateAssociationMixin<agency_form_number_note>;
  removeAgency_form_number_note!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number_note, agency_form_number_noteId>;
  removeAgency_form_number_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number_note, agency_form_number_noteId>;
  hasAgency_form_number_note!: Sequelize.HasManyHasAssociationMixin<agency_form_number_note, agency_form_number_noteId>;
  hasAgency_form_number_notes!: Sequelize.HasManyHasAssociationsMixin<agency_form_number_note, agency_form_number_noteId>;
  countAgency_form_number_notes!: Sequelize.HasManyCountAssociationsMixin;
  // agency_form_number hasMany ocr_archived_document via agency_form_number_id
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
  // agency_form_number hasMany ocr_scanned_document via agency_form_number_id
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
  // agency_form_number belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // agency_form_number belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // agency_form_number belongsTo sys_workflow via notice_type
  notice_type_sys_workflow!: sys_workflow;
  getNotice_type_sys_workflow!: Sequelize.BelongsToGetAssociationMixin<sys_workflow>;
  setNotice_type_sys_workflow!: Sequelize.BelongsToSetAssociationMixin<sys_workflow, sys_workflowId>;
  createNotice_type_sys_workflow!: Sequelize.BelongsToCreateAssociationMixin<sys_workflow>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_form_number {
    return sequelize.define('agency_form_number', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    agency_countries_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_dept_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    form_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "agency_form_numbers_form_bumber_unique"
    },
    filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    s3_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    s3_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    csv_files_locations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    document_processed: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_local_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agency_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_conversion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    last_four: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    form_configured: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filing_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    old_filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_form_numbers',
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
        name: "agency_form_numbers_form_bumber_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_number" },
        ]
      },
      {
        name: "agency_form_numbers_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_form_numbers_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_form_numbers_notice_type_foreign",
        using: "BTREE",
        fields: [
          { name: "notice_type" },
        ]
      },
      {
        name: "agency_form_numbers_form_number_index",
        using: "BTREE",
        fields: [
          { name: "form_number" },
        ]
      },
    ]
  }) as typeof agency_form_number;
  }
}
