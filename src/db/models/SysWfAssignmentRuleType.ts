import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_wf_assignment_rule_typeAttributes {
  id: number;
  title: string;
  rule_input_type?: string;
  description?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  slug?: string;
}

export type sys_wf_assignment_rule_typePk = "id";
export type sys_wf_assignment_rule_typeId = sys_wf_assignment_rule_type[sys_wf_assignment_rule_typePk];
export type sys_wf_assignment_rule_typeOptionalAttributes = "id" | "rule_input_type" | "description" | "created_by" | "updated_by" | "created_at" | "updated_at" | "slug";
export type sys_wf_assignment_rule_typeCreationAttributes = Optional<sys_wf_assignment_rule_typeAttributes, sys_wf_assignment_rule_typeOptionalAttributes>;

export class sys_wf_assignment_rule_type extends Model<sys_wf_assignment_rule_typeAttributes, sys_wf_assignment_rule_typeCreationAttributes> implements sys_wf_assignment_rule_typeAttributes {
  id!: number;
  title!: string;
  rule_input_type?: string;
  description?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  slug?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_wf_assignment_rule_type {
    return sequelize.define('sys_wf_assignment_rule_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rule_input_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_wf_assignment_rule_type',
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
  }) as typeof sys_wf_assignment_rule_type;
  }
}
