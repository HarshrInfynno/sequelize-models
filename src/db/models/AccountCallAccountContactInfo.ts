import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';

export interface account_call_account_contact_infoAttributes {
  id: number;
  account_info_id: number;
  account_contact_info_id?: number;
  call_start?: Date;
  call_end?: Date;
  duration_seconds: number;
  call_note_ids?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_call_account_contact_infoPk = "id";
export type account_call_account_contact_infoId = account_call_account_contact_info[account_call_account_contact_infoPk];
export type account_call_account_contact_infoOptionalAttributes = "id" | "account_contact_info_id" | "call_start" | "call_end" | "duration_seconds" | "call_note_ids" | "updated_by" | "created_at" | "updated_at";
export type account_call_account_contact_infoCreationAttributes = Optional<account_call_account_contact_infoAttributes, account_call_account_contact_infoOptionalAttributes>;

export class account_call_account_contact_info extends Model<account_call_account_contact_infoAttributes, account_call_account_contact_infoCreationAttributes> implements account_call_account_contact_infoAttributes {
  id!: number;
  account_info_id!: number;
  account_contact_info_id?: number;
  call_start?: Date;
  call_end?: Date;
  duration_seconds!: number;
  call_note_ids?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // account_call_account_contact_info belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_call_account_contact_info {
    return sequelize.define('account_call_account_contact_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    account_contact_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
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
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_call_account_contact_info',
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
        name: "account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
    ]
  }) as typeof account_call_account_contact_info;
  }
}
