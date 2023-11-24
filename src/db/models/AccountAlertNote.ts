import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface account_alert_noteAttributes {
  id: number;
  co_info_id?: number;
  account_info_id: number;
  active?: number;
  notes?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type account_alert_notePk = "id";
export type account_alert_noteId = account_alert_note[account_alert_notePk];
export type account_alert_noteOptionalAttributes = "id" | "co_info_id" | "active" | "notes" | "updated_by" | "created_at" | "updated_at";
export type account_alert_noteCreationAttributes = Optional<account_alert_noteAttributes, account_alert_noteOptionalAttributes>;

export class account_alert_note extends Model<account_alert_noteAttributes, account_alert_noteCreationAttributes> implements account_alert_noteAttributes {
  id!: number;
  co_info_id?: number;
  account_info_id!: number;
  active?: number;
  notes?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof account_alert_note {
    return sequelize.define('account_alert_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_info_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'account_alert_notes',
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
    ]
  }) as typeof account_alert_note;
  }
}
