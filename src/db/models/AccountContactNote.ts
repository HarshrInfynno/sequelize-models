import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_contact_info, account_contact_infoId } from './AccountContactInfo';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface account_contact_noteAttributes {
  id: number;
  account_contact_info_id: number;
  note: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_contact_notePk = "id";
export type account_contact_noteId = account_contact_note[account_contact_notePk];
export type account_contact_noteOptionalAttributes = "id" | "updated_by" | "created_at" | "updated_at";
export type account_contact_noteCreationAttributes = Optional<account_contact_noteAttributes, account_contact_noteOptionalAttributes>;

export class account_contact_note extends Model<account_contact_noteAttributes, account_contact_noteCreationAttributes> implements account_contact_noteAttributes {
  id!: number;
  account_contact_info_id!: number;
  note!: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // account_contact_note belongsTo account_contact_info via account_contact_info_id
  account_contact_info!: account_contact_info;
  getAccount_contact_info!: Sequelize.BelongsToGetAssociationMixin<account_contact_info>;
  setAccount_contact_info!: Sequelize.BelongsToSetAssociationMixin<account_contact_info, account_contact_infoId>;
  createAccount_contact_info!: Sequelize.BelongsToCreateAssociationMixin<account_contact_info>;
  // account_contact_note belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // account_contact_note belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_contact_note {
    return sequelize.define('account_contact_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_contact_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_contact_info',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'account_contact_notes',
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
        name: "account_contact_notes_account_contact_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_contact_info_id" },
        ]
      },
      {
        name: "account_contact_notes_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_contact_notes_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof account_contact_note;
  }
}
