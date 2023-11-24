import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_wf_assignment_ruleAttributes {
  id: number;
  co_info_id: number;
  workflow_type?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  rule_type_id_2?: number;
  rule_type_option_value_2?: string;
  rule_type_id_3?: number;
  rule_type_option_value_3?: string;
  assignment_type: string;
  assignment_id: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  active?: number;
  priority: number;
}

export type co_wf_assignment_rulePk = "id";
export type co_wf_assignment_ruleId = co_wf_assignment_rule[co_wf_assignment_rulePk];
export type co_wf_assignment_ruleOptionalAttributes = "id" | "workflow_type" | "rule_type_id_1" | "rule_type_option_value_1" | "rule_type_id_2" | "rule_type_option_value_2" | "rule_type_id_3" | "rule_type_option_value_3" | "created_by" | "updated_by" | "created_at" | "updated_at" | "active" | "priority";
export type co_wf_assignment_ruleCreationAttributes = Optional<co_wf_assignment_ruleAttributes, co_wf_assignment_ruleOptionalAttributes>;

export class co_wf_assignment_rule extends Model<co_wf_assignment_ruleAttributes, co_wf_assignment_ruleCreationAttributes> implements co_wf_assignment_ruleAttributes {
  id!: number;
  co_info_id!: number;
  workflow_type?: number;
  rule_type_id_1?: number;
  rule_type_option_value_1?: string;
  rule_type_id_2?: number;
  rule_type_option_value_2?: string;
  rule_type_id_3?: number;
  rule_type_option_value_3?: string;
  assignment_type!: string;
  assignment_id!: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  active?: number;
  priority!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_wf_assignment_rule {
    return sequelize.define('co_wf_assignment_rule', {
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
    workflow_type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    rule_type_id_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rule_type_option_value_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rule_type_id_2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    rule_type_option_value_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rule_type_id_3: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    rule_type_option_value_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignment_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assignment_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    priority: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'co_wf_assignment_rule',
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
        name: "rule_type_id_1_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_1" },
        ]
      },
      {
        name: "rule_type_id_2_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_2" },
        ]
      },
      {
        name: "rule_type_id_3_foreign",
        using: "BTREE",
        fields: [
          { name: "rule_type_id_3" },
        ]
      },
    ]
  }) as typeof co_wf_assignment_rule;
  }
}
