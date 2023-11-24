import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_wf_options_ccAttributes {
  id: number;
  co_info_id?: number;
  workflow_list_type?: string;
  sys_workflow_id: number;
  workflow_list_id?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type co_wf_options_ccPk = "id";
export type co_wf_options_ccId = co_wf_options_cc[co_wf_options_ccPk];
export type co_wf_options_ccOptionalAttributes = "id" | "co_info_id" | "workflow_list_type" | "workflow_list_id" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type co_wf_options_ccCreationAttributes = Optional<co_wf_options_ccAttributes, co_wf_options_ccOptionalAttributes>;

export class co_wf_options_cc extends Model<co_wf_options_ccAttributes, co_wf_options_ccCreationAttributes> implements co_wf_options_ccAttributes {
  id!: number;
  co_info_id?: number;
  workflow_list_type?: string;
  sys_workflow_id!: number;
  workflow_list_id?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_wf_options_cc {
    return sequelize.define('co_wf_options_cc', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_list_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    workflow_list_id: {
      type: DataTypes.STRING(100),
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
    tableName: 'co_wf_options_cc',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof co_wf_options_cc;
  }
}
