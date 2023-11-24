import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_task_agency_follow_upAttributes {
  id: number;
  co_info_id: number;
  wf_info_id: number;
  wf_task_info_id: number;
  fu_is_agency_follow_up_done?: string;
  fu_is_agency_more_follow_up_needed?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_agency_follow_upPk = "id";
export type wf_task_agency_follow_upId = wf_task_agency_follow_up[wf_task_agency_follow_upPk];
export type wf_task_agency_follow_upOptionalAttributes = "id" | "fu_is_agency_follow_up_done" | "fu_is_agency_more_follow_up_needed" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type wf_task_agency_follow_upCreationAttributes = Optional<wf_task_agency_follow_upAttributes, wf_task_agency_follow_upOptionalAttributes>;

export class wf_task_agency_follow_up extends Model<wf_task_agency_follow_upAttributes, wf_task_agency_follow_upCreationAttributes> implements wf_task_agency_follow_upAttributes {
  id!: number;
  co_info_id!: number;
  wf_info_id!: number;
  wf_task_info_id!: number;
  fu_is_agency_follow_up_done?: string;
  fu_is_agency_more_follow_up_needed?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_agency_follow_up {
    return sequelize.define('wf_task_agency_follow_up', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    wf_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    fu_is_agency_follow_up_done: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fu_is_agency_more_follow_up_needed: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_agency_follow_up',
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
        name: "wf_task_agency_follow_up_co_info_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "wf_task_agency_follow_up_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "wf_task_agency_follow_up_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "wf_task_agency_follow_up_wf_info_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_agency_follow_up_wf_task_info_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_task_info_id" },
        ]
      },
    ]
  }) as typeof wf_task_agency_follow_up;
  }
}
