import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';

export interface co_billingAttributes {
  id: number;
  co_info_id: number;
  notice_p?: number;
  notice_v?: number;
  poa_p?: number;
  poa_v?: number;
  ar_p?: number;
  ar_v?: number;
  user_p?: number;
  user_v?: number;
  created_at?: Date;
  updated_at?: Date;
  afc_v?: number;
  afc_p?: number;
  ocr_v?: number;
  ocr_p?: number;
  reg_v?: number;
  reg_p?: number;
  setup_fee?: number;
  platform_fee?: number;
  mrg_service?: number;
}

export type co_billingPk = "id";
export type co_billingId = co_billing[co_billingPk];
export type co_billingOptionalAttributes = "id" | "notice_p" | "notice_v" | "poa_p" | "poa_v" | "ar_p" | "ar_v" | "user_p" | "user_v" | "created_at" | "updated_at" | "afc_v" | "afc_p" | "ocr_v" | "ocr_p" | "reg_v" | "reg_p" | "setup_fee" | "platform_fee" | "mrg_service";
export type co_billingCreationAttributes = Optional<co_billingAttributes, co_billingOptionalAttributes>;

export class co_billing extends Model<co_billingAttributes, co_billingCreationAttributes> implements co_billingAttributes {
  id!: number;
  co_info_id!: number;
  notice_p?: number;
  notice_v?: number;
  poa_p?: number;
  poa_v?: number;
  ar_p?: number;
  ar_v?: number;
  user_p?: number;
  user_v?: number;
  created_at?: Date;
  updated_at?: Date;
  afc_v?: number;
  afc_p?: number;
  ocr_v?: number;
  ocr_p?: number;
  reg_v?: number;
  reg_p?: number;
  setup_fee?: number;
  platform_fee?: number;
  mrg_service?: number;

  // co_billing belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof co_billing {
    return sequelize.define('co_billing', {
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
    notice_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    notice_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    poa_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    poa_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    ar_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    user_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    user_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    afc_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    afc_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ocr_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    ocr_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    reg_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    reg_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    setup_fee: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    platform_fee: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    mrg_service: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    tableName: 'co_billing',
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
        name: "co_billing_co_info",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof co_billing;
  }
}
