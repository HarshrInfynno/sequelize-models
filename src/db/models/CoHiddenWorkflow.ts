import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_hidden_workflowAttributes {
  id: number;
  co_info_id: number;
  sys_workflow_id: number;
  redirect_sys_workflow_id: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type co_hidden_workflowPk = "id";
export type co_hidden_workflowId = co_hidden_workflow[co_hidden_workflowPk];
export type co_hidden_workflowOptionalAttributes = "id" | "updated_by" | "created_at" | "updated_at";
export type co_hidden_workflowCreationAttributes = Optional<co_hidden_workflowAttributes, co_hidden_workflowOptionalAttributes>;

export class co_hidden_workflow extends Model<co_hidden_workflowAttributes, co_hidden_workflowCreationAttributes> implements co_hidden_workflowAttributes {
  id!: number;
  co_info_id!: number;
  sys_workflow_id!: number;
  redirect_sys_workflow_id!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_hidden_workflow {
    return sequelize.define('co_hidden_workflow', {
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
    sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    redirect_sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'co_hidden_workflows',
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
  }) as typeof co_hidden_workflow;
  }
}
