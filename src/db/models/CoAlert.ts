import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_alertAttributes {
  id: number;
  co_info_id?: number;
  alert_type?: string;
  is_active?: number;
  condition?: string;
  option?: string;
  parent?: number;
  action?: string;
  notes?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type co_alertPk = "id";
export type co_alertId = co_alert[co_alertPk];
export type co_alertOptionalAttributes = "id" | "co_info_id" | "alert_type" | "is_active" | "condition" | "option" | "parent" | "action" | "notes" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type co_alertCreationAttributes = Optional<co_alertAttributes, co_alertOptionalAttributes>;

export class co_alert extends Model<co_alertAttributes, co_alertCreationAttributes> implements co_alertAttributes {
  id!: number;
  co_info_id?: number;
  alert_type?: string;
  is_active?: number;
  condition?: string;
  option?: string;
  parent?: number;
  action?: string;
  notes?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_alert {
    return sequelize.define('co_alert', {
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
    alert_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    condition: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    option: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'co_alert',
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
  }) as typeof co_alert;
  }
}
