import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_bulk_noticeAttributes {
  wf_info_id: number;
  account_info_id: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_bulk_noticePk = "wf_info_id" | "account_info_id";
export type wf_bulk_noticeId = wf_bulk_notice[wf_bulk_noticePk];
export type wf_bulk_noticeOptionalAttributes = "updated_by" | "created_at" | "updated_at";
export type wf_bulk_noticeCreationAttributes = Optional<wf_bulk_noticeAttributes, wf_bulk_noticeOptionalAttributes>;

export class wf_bulk_notice extends Model<wf_bulk_noticeAttributes, wf_bulk_noticeCreationAttributes> implements wf_bulk_noticeAttributes {
  wf_info_id!: number;
  account_info_id!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_bulk_notice belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // wf_bulk_notice belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_bulk_notice {
    return sequelize.define('wf_bulk_notice', {
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'wf_bulk_notice',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_info_account_info_uniqye",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
          { name: "account_info_id" },
        ]
      },
    ]
  }) as typeof wf_bulk_notice;
  }
}
