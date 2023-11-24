import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface activity_logAttributes {
  id: number;
  co_info_id: number;
  account_info_id?: number;
  wf_info_id?: number;
  activity_by: number;
  activity_modal?: string;
  activity_modal_id?: string;
  activity_screen?: string;
  activity_type?: string;
  item?: string;
  old?: string;
  new?: string;
  ip?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type activity_logPk = "id";
export type activity_logId = activity_log[activity_logPk];
export type activity_logOptionalAttributes = "id" | "account_info_id" | "wf_info_id" | "activity_modal" | "activity_modal_id" | "activity_screen" | "activity_type" | "item" | "old" | "new" | "ip" | "created_at" | "updated_at";
export type activity_logCreationAttributes = Optional<activity_logAttributes, activity_logOptionalAttributes>;

export class activity_log extends Model<activity_logAttributes, activity_logCreationAttributes> implements activity_logAttributes {
  id!: number;
  co_info_id!: number;
  account_info_id?: number;
  wf_info_id?: number;
  activity_by!: number;
  activity_modal?: string;
  activity_modal_id?: string;
  activity_screen?: string;
  activity_type?: string;
  item?: string;
  old?: string;
  new?: string;
  ip?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof activity_log {
    return sequelize.define('activity_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activity_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    activity_modal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_modal_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_screen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    old: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    new: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'activity_logs',
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
  }) as typeof activity_log;
  }
}
