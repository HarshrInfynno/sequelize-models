import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';

export interface zendesk_settingAttributes {
  id: number;
  co_info_id: number;
  email: string;
  domain: string;
  api_key: string;
  sync_based_on?: string;
  sync_by?: string;
  account_id_field_id?: number;
  account_id_org_field_key?: string;
  ticket_type_field_id?: number;
  agencies_field_id?: number;
  departments_field_id?: number;
  notice_types_field_id?: number;
  locals_field_id?: number;
  cities_field_id?: number;
  tax_year_field_id?: number;
  tax_period_field_id?: number;
  issue_date_field_id?: number;
  received_date_field_id?: number;
  fields_synced_at?: Date;
  tickets_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type zendesk_settingPk = "id";
export type zendesk_settingId = zendesk_setting[zendesk_settingPk];
export type zendesk_settingOptionalAttributes = "id" | "sync_based_on" | "sync_by" | "account_id_field_id" | "account_id_org_field_key" | "ticket_type_field_id" | "agencies_field_id" | "departments_field_id" | "notice_types_field_id" | "locals_field_id" | "cities_field_id" | "tax_year_field_id" | "tax_period_field_id" | "issue_date_field_id" | "received_date_field_id" | "fields_synced_at" | "tickets_synced_at" | "created_at" | "updated_at";
export type zendesk_settingCreationAttributes = Optional<zendesk_settingAttributes, zendesk_settingOptionalAttributes>;

export class zendesk_setting extends Model<zendesk_settingAttributes, zendesk_settingCreationAttributes> implements zendesk_settingAttributes {
  id!: number;
  co_info_id!: number;
  email!: string;
  domain!: string;
  api_key!: string;
  sync_based_on?: string;
  sync_by?: string;
  account_id_field_id?: number;
  account_id_org_field_key?: string;
  ticket_type_field_id?: number;
  agencies_field_id?: number;
  departments_field_id?: number;
  notice_types_field_id?: number;
  locals_field_id?: number;
  cities_field_id?: number;
  tax_year_field_id?: number;
  tax_period_field_id?: number;
  issue_date_field_id?: number;
  received_date_field_id?: number;
  fields_synced_at?: Date;
  tickets_synced_at?: Date;
  created_at?: Date;
  updated_at?: Date;

  // zendesk_setting belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof zendesk_setting {
    return sequelize.define('zendesk_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sync_based_on: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sync_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_id_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id_org_field_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_type_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agencies_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    departments_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    notice_types_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    locals_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cities_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tax_year_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tax_period_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    issue_date_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    received_date_field_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fields_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tickets_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'zendesk_settings',
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
        name: "zendesk_settings_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof zendesk_setting;
  }
}
