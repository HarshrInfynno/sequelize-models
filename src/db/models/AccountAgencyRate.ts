import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface account_agency_rateAttributes {
  id: number;
  agency_info_id?: number;
  account_info_id?: number;
  account_id?: string;
  wf_info_id?: number;
  co_info_id: number;
  major_rate?: number;
  minor_rate_1?: number;
  minor_rate_2?: number;
  minor_rate_3?: number;
  total_rate?: number;
  major_rate_status?: string;
  minor_rate_1_status?: string;
  minor_rate_2_status?: string;
  minor_rate_3_status?: string;
  sdi_rate?: number;
  rate_change_reason?: string;
  start_date?: string;
  end_date?: string;
  approved_date?: Date;
  rejected_date?: Date;
  verification_date?: Date;
  status?: string;
  is_override_rate?: number;
  override_rate?: number;
  override_rate_notes_id?: number;
  is_active?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_agency_ratePk = "id";
export type account_agency_rateId = account_agency_rate[account_agency_ratePk];
export type account_agency_rateOptionalAttributes = "id" | "agency_info_id" | "account_info_id" | "account_id" | "wf_info_id" | "major_rate" | "minor_rate_1" | "minor_rate_2" | "minor_rate_3" | "total_rate" | "major_rate_status" | "minor_rate_1_status" | "minor_rate_2_status" | "minor_rate_3_status" | "sdi_rate" | "rate_change_reason" | "start_date" | "end_date" | "approved_date" | "rejected_date" | "verification_date" | "status" | "is_override_rate" | "override_rate" | "override_rate_notes_id" | "is_active" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type account_agency_rateCreationAttributes = Optional<account_agency_rateAttributes, account_agency_rateOptionalAttributes>;

export class account_agency_rate extends Model<account_agency_rateAttributes, account_agency_rateCreationAttributes> implements account_agency_rateAttributes {
  id!: number;
  agency_info_id?: number;
  account_info_id?: number;
  account_id?: string;
  wf_info_id?: number;
  co_info_id!: number;
  major_rate?: number;
  minor_rate_1?: number;
  minor_rate_2?: number;
  minor_rate_3?: number;
  total_rate?: number;
  major_rate_status?: string;
  minor_rate_1_status?: string;
  minor_rate_2_status?: string;
  minor_rate_3_status?: string;
  sdi_rate?: number;
  rate_change_reason?: string;
  start_date?: string;
  end_date?: string;
  approved_date?: Date;
  rejected_date?: Date;
  verification_date?: Date;
  status?: string;
  is_override_rate?: number;
  override_rate?: number;
  override_rate_notes_id?: number;
  is_active?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof account_agency_rate {
    return sequelize.define('account_agency_rate', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    major_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_2: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_3: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    total_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    major_rate_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_1_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_2_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_3_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    sdi_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    rate_change_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rejected_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    is_override_rate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    override_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    override_rate_notes_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    is_active: {
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
    tableName: 'account_agency_rates',
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
    ]
  }) as typeof account_agency_rate;
  }
}
