import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';

export interface managed_service_notes_settingAttributes {
  id: number;
  co_info_id?: number;
  use_default_settings?: number;
  tax_period?: string;
  payment_type?: string;
  tax_type_id?: number;
  filing_type_id?: number;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type managed_service_notes_settingPk = "id";
export type managed_service_notes_settingId = managed_service_notes_setting[managed_service_notes_settingPk];
export type managed_service_notes_settingOptionalAttributes = "id" | "co_info_id" | "use_default_settings" | "tax_period" | "payment_type" | "tax_type_id" | "filing_type_id" | "notes" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type managed_service_notes_settingCreationAttributes = Optional<managed_service_notes_settingAttributes, managed_service_notes_settingOptionalAttributes>;

export class managed_service_notes_setting extends Model<managed_service_notes_settingAttributes, managed_service_notes_settingCreationAttributes> implements managed_service_notes_settingAttributes {
  id!: number;
  co_info_id?: number;
  use_default_settings?: number;
  tax_period?: string;
  payment_type?: string;
  tax_type_id?: number;
  filing_type_id?: number;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // managed_service_notes_setting belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof managed_service_notes_setting {
    return sequelize.define('managed_service_notes_setting', {
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
    use_default_settings: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    tax_period: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    filing_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'managed_service_notes_settings',
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
        name: "co_info_id",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof managed_service_notes_setting;
  }
}
