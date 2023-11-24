import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';
import type { wf_info, wf_infoId } from './WfInfo';

export interface wf_task_detail_regAttributes {
  id: number;
  wf_info_id: number;
  co_info_id: number;
  what_caused_the_issue?: string;
  what_corrective_actions_taken?: string;
  submitted_date?: Date;
  submitted_by?: number;
  tax_system_update_date?: Date;
  payroll_system_update_date?: Date;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  is_registration_completed?: number;
  username?: string;
  pin?: string;
}

export type wf_task_detail_regPk = "id";
export type wf_task_detail_regId = wf_task_detail_reg[wf_task_detail_regPk];
export type wf_task_detail_regOptionalAttributes = "id" | "what_caused_the_issue" | "what_corrective_actions_taken" | "submitted_date" | "submitted_by" | "tax_system_update_date" | "payroll_system_update_date" | "updated_by" | "created_at" | "updated_at" | "is_registration_completed" | "username" | "pin";
export type wf_task_detail_regCreationAttributes = Optional<wf_task_detail_regAttributes, wf_task_detail_regOptionalAttributes>;

export class wf_task_detail_reg extends Model<wf_task_detail_regAttributes, wf_task_detail_regCreationAttributes> implements wf_task_detail_regAttributes {
  id!: number;
  wf_info_id!: number;
  co_info_id!: number;
  what_caused_the_issue?: string;
  what_corrective_actions_taken?: string;
  submitted_date?: Date;
  submitted_by?: number;
  tax_system_update_date?: Date;
  payroll_system_update_date?: Date;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  is_registration_completed?: number;
  username?: string;
  pin?: string;

  // wf_task_detail_reg belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;
  // wf_task_detail_reg belongsTo wf_info via wf_info_id
  wf_info!: wf_info;
  getWf_info!: Sequelize.BelongsToGetAssociationMixin<wf_info>;
  setWf_info!: Sequelize.BelongsToSetAssociationMixin<wf_info, wf_infoId>;
  createWf_info!: Sequelize.BelongsToCreateAssociationMixin<wf_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_detail_reg {
    return sequelize.define('wf_task_detail_reg', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    what_caused_the_issue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    what_corrective_actions_taken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submitted_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    submitted_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    tax_system_update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payroll_system_update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    is_registration_completed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_detail_reg',
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
        name: "wf_info_wf_task_detail_reg_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "co_info_wf_task_detail_reg_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_detail_reg;
  }
}
