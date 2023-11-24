import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_contactAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  workflow_type?: string;
  workflow_task_info_id?: number;
  account_contact_info_id?: number;
  call_start?: Date;
  call_end?: Date;
  duration_seconds: number;
  call_note_ids?: string;
  contact_to_call?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  type?: string;
  agency_type?: string;
}

export type wf_task_contactPk = "id";
export type wf_task_contactId = wf_task_contact[wf_task_contactPk];
export type wf_task_contactOptionalAttributes = "id" | "workflow_type" | "workflow_task_info_id" | "account_contact_info_id" | "call_start" | "call_end" | "duration_seconds" | "call_note_ids" | "contact_to_call" | "created_by" | "updated_by" | "created_at" | "updated_at" | "type" | "agency_type";
export type wf_task_contactCreationAttributes = Optional<wf_task_contactAttributes, wf_task_contactOptionalAttributes>;

export class wf_task_contact extends Model<wf_task_contactAttributes, wf_task_contactCreationAttributes> implements wf_task_contactAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  workflow_type?: string;
  workflow_task_info_id?: number;
  account_contact_info_id?: number;
  call_start?: Date;
  call_end?: Date;
  duration_seconds!: number;
  call_note_ids?: string;
  contact_to_call?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  type?: string;
  agency_type?: string;

  // wf_task_contact belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_contact belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_contact {
    return sequelize.define('wf_task_contact', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_contact_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    call_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    call_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration_seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    call_note_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_to_call: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_contacts',
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
        name: "wf_task_contacts_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_contacts_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_contact;
  }
}
