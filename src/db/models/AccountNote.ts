import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_info, account_infoId } from './AccountInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface account_noteAttributes {
  id: number;
  co_info_id?: number;
  account_info_id: number;
  note_type: string;
  note: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_notePk = "id";
export type account_noteId = account_note[account_notePk];
export type account_noteOptionalAttributes = "id" | "co_info_id" | "updated_by" | "created_at" | "updated_at";
export type account_noteCreationAttributes = Optional<account_noteAttributes, account_noteOptionalAttributes>;

export class account_note extends Model<account_noteAttributes, account_noteCreationAttributes> implements account_noteAttributes {
  id!: number;
  co_info_id?: number;
  account_info_id!: number;
  note_type!: string;
  note!: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // account_note belongsTo account_info via account_info_id
  account_info!: account_info;
  getAccount_info!: Sequelize.BelongsToGetAssociationMixin<account_info>;
  setAccount_info!: Sequelize.BelongsToSetAssociationMixin<account_info, account_infoId>;
  createAccount_info!: Sequelize.BelongsToCreateAssociationMixin<account_info>;
  // account_note belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_note {
    return sequelize.define('account_note', {
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
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    note_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'account_notes',
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
        name: "account_notes_account_info_id_index",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "account_notes_created_by_index",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_notes_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof account_note;
  }
}
