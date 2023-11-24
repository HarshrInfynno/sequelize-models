import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_reportAttributes {
  id: number;
  name?: string;
  description?: string;
  type?: string;
  grouped_by?: string;
  date_range?: string;
  report_structure_json?: string;
  last_run?: Date;
  synopsis_url?: string;
  created_at?: Date;
  updated_at?: Date;
  is_system_level?: number;
}

export type app_reportPk = "id";
export type app_reportId = app_report[app_reportPk];
export type app_reportOptionalAttributes = "id" | "name" | "description" | "type" | "grouped_by" | "date_range" | "report_structure_json" | "last_run" | "synopsis_url" | "created_at" | "updated_at" | "is_system_level";
export type app_reportCreationAttributes = Optional<app_reportAttributes, app_reportOptionalAttributes>;

export class app_report extends Model<app_reportAttributes, app_reportCreationAttributes> implements app_reportAttributes {
  id!: number;
  name?: string;
  description?: string;
  type?: string;
  grouped_by?: string;
  date_range?: string;
  report_structure_json?: string;
  last_run?: Date;
  synopsis_url?: string;
  created_at?: Date;
  updated_at?: Date;
  is_system_level?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_report {
    return sequelize.define('app_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grouped_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_range: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    report_structure_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    },
    synopsis_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_system_level: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'app_reports',
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
  }) as typeof app_report;
  }
}
