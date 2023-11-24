import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_info, agency_infoId } from './AgencyInfo';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';
import type { wf_info_new, wf_info_newId } from './WfInfoNew';

export interface agency_tax_formAttributes {
  id: number;
  co_info_id?: number;
  agency_info_id: number;
  tax_form: string;
  filling_type?: string;
  description?: string;
  rev_number?: string;
  rev_date?: string;
  year?: string;
  notes?: string;
  document_type?: string;
  file?: string;
  required_to_file?: string;
  required_to_contact?: string;
  use_fed_form?: string;
  used_for?: string;
  expires_after?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  form_fields?: object;
  sign_settings?: object;
  submission_site?: string;
  form_site?: string;
  submission_type?: string;
  tax_type_id?: number;
  old_tax_type?: string;
  address?: string;
  country?: number;
  state?: number;
  city?: string;
  zip?: string;
  phone?: string;
  fax?: string;
  notary_req?: string;
  email?: string;
}

export type agency_tax_formPk = "id";
export type agency_tax_formId = agency_tax_form[agency_tax_formPk];
export type agency_tax_formOptionalAttributes = "id" | "co_info_id" | "filling_type" | "description" | "rev_number" | "rev_date" | "year" | "notes" | "document_type" | "file" | "required_to_file" | "required_to_contact" | "use_fed_form" | "used_for" | "expires_after" | "updated_by" | "created_at" | "updated_at" | "form_fields" | "sign_settings" | "submission_site" | "form_site" | "submission_type" | "tax_type_id" | "old_tax_type" | "address" | "country" | "state" | "city" | "zip" | "phone" | "fax" | "notary_req" | "email";
export type agency_tax_formCreationAttributes = Optional<agency_tax_formAttributes, agency_tax_formOptionalAttributes>;

export class agency_tax_form extends Model<agency_tax_formAttributes, agency_tax_formCreationAttributes> implements agency_tax_formAttributes {
  id!: number;
  co_info_id?: number;
  agency_info_id!: number;
  tax_form!: string;
  filling_type?: string;
  description?: string;
  rev_number?: string;
  rev_date?: string;
  year?: string;
  notes?: string;
  document_type?: string;
  file?: string;
  required_to_file?: string;
  required_to_contact?: string;
  use_fed_form?: string;
  used_for?: string;
  expires_after?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  form_fields?: object;
  sign_settings?: object;
  submission_site?: string;
  form_site?: string;
  submission_type?: string;
  tax_type_id?: number;
  old_tax_type?: string;
  address?: string;
  country?: number;
  state?: number;
  city?: string;
  zip?: string;
  phone?: string;
  fax?: string;
  notary_req?: string;
  email?: string;

  // agency_tax_form belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;
  // agency_tax_form hasMany wf_info via poa_form
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
  // agency_tax_form hasMany wf_info_new via poa_form
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
  // agency_tax_form belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_tax_form {
    return sequelize.define('agency_tax_form', {
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
    tax_form: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rev_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rev_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required_to_file: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    required_to_contact: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    use_fed_form: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    used_for: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expires_after: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "In Years"
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    form_fields: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sign_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    submission_site: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    form_site: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submission_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    old_tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notary_req: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_tax_forms',
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
        name: "agency_tax_forms_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_tax_forms_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  }) as typeof agency_tax_form;
  }
}
