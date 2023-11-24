import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_task_round_robin_assignmentAttributes {
  id: number;
  index: number;
  type?: string;
  account_info_id?: number;
  co_info_id: number;
  group_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_task_round_robin_assignmentPk = "id";
export type wf_task_round_robin_assignmentId = wf_task_round_robin_assignment[wf_task_round_robin_assignmentPk];
export type wf_task_round_robin_assignmentOptionalAttributes = "id" | "type" | "account_info_id" | "created_at" | "updated_at";
export type wf_task_round_robin_assignmentCreationAttributes = Optional<wf_task_round_robin_assignmentAttributes, wf_task_round_robin_assignmentOptionalAttributes>;

export class wf_task_round_robin_assignment extends Model<wf_task_round_robin_assignmentAttributes, wf_task_round_robin_assignmentCreationAttributes> implements wf_task_round_robin_assignmentAttributes {
  id!: number;
  index!: number;
  type?: string;
  account_info_id?: number;
  co_info_id!: number;
  group_id!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_task_round_robin_assignment {
    return sequelize.define('wf_task_round_robin_assignment', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    index: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "system"
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'wf_task_round_robin_assignment',
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
  }) as typeof wf_task_round_robin_assignment;
  }
}
