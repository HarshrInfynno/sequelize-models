import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_deposit_refundAttributes {
  id: number;
  wf_info_id?: number;
  wf_task_info_id?: number;
  afc_expired_date?: string;
  afc_release_date?: string;
  afc_deposit_date?: string;
  released_by?: string;
  deposited_by?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_deposit_refundPk = "id";
export type wf_task_deposit_refundId = wf_task_deposit_refund[wf_task_deposit_refundPk];
export type wf_task_deposit_refundOptionalAttributes = "id" | "wf_info_id" | "wf_task_info_id" | "afc_expired_date" | "afc_release_date" | "afc_deposit_date" | "released_by" | "deposited_by" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type wf_task_deposit_refundCreationAttributes = Optional<wf_task_deposit_refundAttributes, wf_task_deposit_refundOptionalAttributes>;

export class wf_task_deposit_refund extends Model<wf_task_deposit_refundAttributes, wf_task_deposit_refundCreationAttributes> implements wf_task_deposit_refundAttributes {
  id!: number;
  wf_info_id?: number;
  wf_task_info_id?: number;
  afc_expired_date?: string;
  afc_release_date?: string;
  afc_deposit_date?: string;
  released_by?: string;
  deposited_by?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_deposit_refund belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_deposit_refund {
    return sequelize.define('wf_task_deposit_refund', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    wf_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    afc_expired_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afc_release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    afc_deposit_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    released_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposited_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_deposit_refund',
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
        name: "wf_task_deposit_refund_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_deposit_refund;
  }
}
