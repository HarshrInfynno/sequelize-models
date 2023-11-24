import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_moved_payment_infoAttributes {
  id: number;
  wf_info_id?: number;
  workflow_task_info_id: number;
  is_payment_moved?: string;
  amount_moved?: number;
  reason_for_moved_payment?: string;
  moved_from?: string;
  moved_to?: string;
  date_moved?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_moved_payment_infoPk = "id";
export type wf_task_moved_payment_infoId = wf_task_moved_payment_info[wf_task_moved_payment_infoPk];
export type wf_task_moved_payment_infoOptionalAttributes = "id" | "wf_info_id" | "is_payment_moved" | "amount_moved" | "reason_for_moved_payment" | "moved_from" | "moved_to" | "date_moved" | "updated_by" | "created_at" | "updated_at";
export type wf_task_moved_payment_infoCreationAttributes = Optional<wf_task_moved_payment_infoAttributes, wf_task_moved_payment_infoOptionalAttributes>;

export class wf_task_moved_payment_info extends Model<wf_task_moved_payment_infoAttributes, wf_task_moved_payment_infoCreationAttributes> implements wf_task_moved_payment_infoAttributes {
  id!: number;
  wf_info_id?: number;
  workflow_task_info_id!: number;
  is_payment_moved?: string;
  amount_moved?: number;
  reason_for_moved_payment?: string;
  moved_from?: string;
  moved_to?: string;
  date_moved?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_task_moved_payment_info belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_moved_payment_info {
    return sequelize.define('wf_task_moved_payment_info', {
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
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_payment_moved: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_moved: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    reason_for_moved_payment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    moved_from: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    moved_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_moved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_moved_payment_info',
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
        name: "wf_task_moved_payment_info_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_moved_payment_info;
  }
}
