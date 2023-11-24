import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_letterAttributes {
  id: number;
  name: string;
  description?: string;
  type: string;
  sys_workflow_type_id?: number;
  filling_type_id?: number;
  show_in_list: number;
  recipient: string;
  html_content: string;
  is_service_provider: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  tax_type_id?: number;
  old_tax_type_id?: number;
}

export type sys_letterPk = "id";
export type sys_letterId = sys_letter[sys_letterPk];
export type sys_letterOptionalAttributes = "id" | "description" | "sys_workflow_type_id" | "filling_type_id" | "show_in_list" | "is_service_provider" | "updated_by" | "created_at" | "updated_at" | "tax_type_id" | "old_tax_type_id";
export type sys_letterCreationAttributes = Optional<sys_letterAttributes, sys_letterOptionalAttributes>;

export class sys_letter extends Model<sys_letterAttributes, sys_letterCreationAttributes> implements sys_letterAttributes {
  id!: number;
  name!: string;
  description?: string;
  type!: string;
  sys_workflow_type_id?: number;
  filling_type_id?: number;
  show_in_list!: number;
  recipient!: string;
  html_content!: string;
  is_service_provider!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  tax_type_id?: number;
  old_tax_type_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_letter {
    return sequelize.define('sys_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Type = Workflow, sys_workflow_type.id"
    },
    filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type = Workflow, app_usage_types.id"
    },
    show_in_list: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    recipient: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    html_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_service_provider: {
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
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    old_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    tableName: 'sys_letters',
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
  }) as typeof sys_letter;
  }
}
