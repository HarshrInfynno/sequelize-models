import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_ocr_sync_settingAttributes {
  id: number;
  co_info_id?: number;
  auto_sync?: number;
  account?: number;
  notice_type?: number;
  agency_dept_local_city?: number;
  tax_year?: number;
  tax_period?: number;
  agency_type?: number;
  agency?: number;
  tax_amount?: number;
  agency_due_date?: number;
  agency_id_to_use?: number;
  issue_date?: number;
  notice_form?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type co_ocr_sync_settingPk = "id";
export type co_ocr_sync_settingId = co_ocr_sync_setting[co_ocr_sync_settingPk];
export type co_ocr_sync_settingOptionalAttributes = "id" | "co_info_id" | "auto_sync" | "account" | "notice_type" | "agency_dept_local_city" | "tax_year" | "tax_period" | "agency_type" | "agency" | "tax_amount" | "agency_due_date" | "agency_id_to_use" | "issue_date" | "notice_form" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type co_ocr_sync_settingCreationAttributes = Optional<co_ocr_sync_settingAttributes, co_ocr_sync_settingOptionalAttributes>;

export class co_ocr_sync_setting extends Model<co_ocr_sync_settingAttributes, co_ocr_sync_settingCreationAttributes> implements co_ocr_sync_settingAttributes {
  id!: number;
  co_info_id?: number;
  auto_sync?: number;
  account?: number;
  notice_type?: number;
  agency_dept_local_city?: number;
  tax_year?: number;
  tax_period?: number;
  agency_type?: number;
  agency?: number;
  tax_amount?: number;
  agency_due_date?: number;
  agency_id_to_use?: number;
  issue_date?: number;
  notice_form?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_ocr_sync_setting {
    return sequelize.define('co_ocr_sync_setting', {
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
    auto_sync: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    account: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    notice_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_dept_local_city: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_year: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_period: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_amount: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_due_date: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_id_to_use: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    issue_date: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    notice_form: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'co_ocr_sync_settings',
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
  }) as typeof co_ocr_sync_setting;
  }
}
