import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_multiple_tax_periodAttributes {
  id: number;
  workflow_notice_info_id: number;
  year: number;
  qtr1: number;
  qtr2: number;
  qtr3: number;
  qtr4: number;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
  annual: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_multiple_tax_periodPk = "id";
export type wf_multiple_tax_periodId = wf_multiple_tax_period[wf_multiple_tax_periodPk];
export type wf_multiple_tax_periodOptionalAttributes = "id" | "qtr1" | "qtr2" | "qtr3" | "qtr4" | "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec" | "annual" | "updated_by" | "created_at" | "updated_at";
export type wf_multiple_tax_periodCreationAttributes = Optional<wf_multiple_tax_periodAttributes, wf_multiple_tax_periodOptionalAttributes>;

export class wf_multiple_tax_period extends Model<wf_multiple_tax_periodAttributes, wf_multiple_tax_periodCreationAttributes> implements wf_multiple_tax_periodAttributes {
  id!: number;
  workflow_notice_info_id!: number;
  year!: number;
  qtr1!: number;
  qtr2!: number;
  qtr3!: number;
  qtr4!: number;
  jan!: number;
  feb!: number;
  mar!: number;
  apr!: number;
  may!: number;
  jun!: number;
  jul!: number;
  aug!: number;
  sep!: number;
  oct!: number;
  nov!: number;
  dec!: number;
  annual!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // wf_multiple_tax_period belongsTo wf_info via workflow_notice_info_id
  workflow_notice_info!: wf_info;
  getWorkflow_notice_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWorkflow_notice_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWorkflow_notice_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_multiple_tax_period {
    return sequelize.define('wf_multiple_tax_period', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_notice_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtr1: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr2: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr3: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr4: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jan: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    feb: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    apr: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    may: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jun: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jul: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aug: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sep: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    oct: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    nov: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dec: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    annual: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'wf_multiple_tax_periods',
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
        name: "workflow_notice_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_notice_info_id" },
        ]
      },
    ]
  }) as typeof wf_multiple_tax_period;
  }
}
