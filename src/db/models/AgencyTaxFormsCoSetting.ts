import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface agency_tax_forms_co_settingAttributes {
  id: number;
  co_info_id?: number;
  agency_tax_forms_id: number;
  assignee_contact_person?: string;
  assignee_contact_phone?: string;
  assignee_contact_fax?: string;
  assignee_co_name?: string;
  assignee_co_fein?: string;
  assignee_co_address_1?: string;
  assignee_co_address_2?: string;
  assignee_city?: string;
  assignee_state?: string;
  assignee_zip?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by: number;
  updated_by?: number;
  assignee_email?: string;
  account_email?: string;
  assignee_title?: string;
  title_date_appointed?: Date;
}

export type agency_tax_forms_co_settingPk = "id";
export type agency_tax_forms_co_settingId = agency_tax_forms_co_setting[agency_tax_forms_co_settingPk];
export type agency_tax_forms_co_settingOptionalAttributes = "id" | "co_info_id" | "assignee_contact_person" | "assignee_contact_phone" | "assignee_contact_fax" | "assignee_co_name" | "assignee_co_fein" | "assignee_co_address_1" | "assignee_co_address_2" | "assignee_city" | "assignee_state" | "assignee_zip" | "created_at" | "updated_at" | "updated_by" | "assignee_email" | "account_email" | "assignee_title" | "title_date_appointed";
export type agency_tax_forms_co_settingCreationAttributes = Optional<agency_tax_forms_co_settingAttributes, agency_tax_forms_co_settingOptionalAttributes>;

export class agency_tax_forms_co_setting extends Model<agency_tax_forms_co_settingAttributes, agency_tax_forms_co_settingCreationAttributes> implements agency_tax_forms_co_settingAttributes {
  id!: number;
  co_info_id?: number;
  agency_tax_forms_id!: number;
  assignee_contact_person?: string;
  assignee_contact_phone?: string;
  assignee_contact_fax?: string;
  assignee_co_name?: string;
  assignee_co_fein?: string;
  assignee_co_address_1?: string;
  assignee_co_address_2?: string;
  assignee_city?: string;
  assignee_state?: string;
  assignee_zip?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by!: number;
  updated_by?: number;
  assignee_email?: string;
  account_email?: string;
  assignee_title?: string;
  title_date_appointed?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof agency_tax_forms_co_setting {
    return sequelize.define('agency_tax_forms_co_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_tax_forms_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    assignee_contact_person: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_contact_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_contact_fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_fein: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_zip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assignee_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title_date_appointed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'agency_tax_forms_co_settings',
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
    ]
  }) as typeof agency_tax_forms_co_setting;
  }
}
