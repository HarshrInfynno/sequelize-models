import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wf_round_robin_assignmentAttributes {
  id: number;
  app_user_info_id?: number;
  co_info_id?: number;
  rule_id?: number;
  group_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type wf_round_robin_assignmentPk = "id";
export type wf_round_robin_assignmentId = wf_round_robin_assignment[wf_round_robin_assignmentPk];
export type wf_round_robin_assignmentOptionalAttributes = "id" | "app_user_info_id" | "co_info_id" | "rule_id" | "group_id" | "created_at" | "updated_at";
export type wf_round_robin_assignmentCreationAttributes = Optional<wf_round_robin_assignmentAttributes, wf_round_robin_assignmentOptionalAttributes>;

export class wf_round_robin_assignment extends Model<wf_round_robin_assignmentAttributes, wf_round_robin_assignmentCreationAttributes> implements wf_round_robin_assignmentAttributes {
  id!: number;
  app_user_info_id?: number;
  co_info_id?: number;
  rule_id?: number;
  group_id?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof wf_round_robin_assignment {
    return sequelize.define('wf_round_robin_assignment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rule_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'wf_round_robin_assignment',
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
  }) as typeof wf_round_robin_assignment;
  }
}
