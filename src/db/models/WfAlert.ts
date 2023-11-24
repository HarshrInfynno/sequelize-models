import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_alertAttributes {
  wf_info_id?: number;
  co_info_id: number;
  notice_manager?: number;
  alert_type: string;
  created_at?: Date;
}

export type wf_alertOptionalAttributes = "wf_info_id" | "notice_manager" | "created_at";
export type wf_alertCreationAttributes = Optional<wf_alertAttributes, wf_alertOptionalAttributes>;

export class wf_alert extends Model<wf_alertAttributes, wf_alertCreationAttributes> implements wf_alertAttributes {
  wf_info_id?: number;
  co_info_id!: number;
  notice_manager?: number;
  alert_type!: string;
  created_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_alert {
    return sequelize.define('wf_alert', {
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    notice_manager: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    alert_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'wf_alerts',
    timestamps: true,
    indexes: [
      {
        name: "unique_alert",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
          { name: "co_info_id" },
          { name: "alert_type" },
        ]
      },
    ]
  }) as typeof wf_alert;
  }
}
