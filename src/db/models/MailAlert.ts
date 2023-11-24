import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mail_alertAttributes {
  id: number;
  co_info_id: number;
  wf_info_id?: number;
  wf_task_info_id?: number;
  alert_type?: string;
  alert_time: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type mail_alertPk = "id";
export type mail_alertId = mail_alert[mail_alertPk];
export type mail_alertOptionalAttributes = "id" | "wf_info_id" | "wf_task_info_id" | "alert_type" | "created_at" | "updated_at";
export type mail_alertCreationAttributes = Optional<mail_alertAttributes, mail_alertOptionalAttributes>;

export class mail_alert extends Model<mail_alertAttributes, mail_alertCreationAttributes> implements mail_alertAttributes {
  id!: number;
  co_info_id!: number;
  wf_info_id?: number;
  wf_task_info_id?: number;
  alert_type?: string;
  alert_time!: Date;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof mail_alert {
    return sequelize.define('mail_alert', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    wf_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wf_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    alert_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alert_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'mail_alert',
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
        name: "ALERT_TIME_INDEX",
        using: "BTREE",
        fields: [
          { name: "alert_time" },
        ]
      },
    ]
  }) as typeof mail_alert;
  }
}
