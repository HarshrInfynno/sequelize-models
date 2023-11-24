import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_letterAttributes {
  id: number;
  co_info_id?: number;
  sys_letters_id: number;
  name: string;
  description?: string;
  type: string;
  sys_workflow_type_id?: number;
  filling_type_id?: number;
  show_in_list: number;
  recipient: string;
  html_content?: string;
  is_service_provider: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  tax_type_id?: number;
  old_tax_type_id?: number;
}

export type co_letterPk = "id";
export type co_letterId = co_letter[co_letterPk];
export type co_letterOptionalAttributes = "id" | "co_info_id" | "sys_letters_id" | "description" | "sys_workflow_type_id" | "filling_type_id" | "show_in_list" | "html_content" | "is_service_provider" | "updated_by" | "created_at" | "updated_at" | "tax_type_id" | "old_tax_type_id";
export type co_letterCreationAttributes = Optional<co_letterAttributes, co_letterOptionalAttributes>;

export class co_letter extends Model<co_letterAttributes, co_letterCreationAttributes> implements co_letterAttributes {
  id!: number;
  co_info_id?: number;
  sys_letters_id!: number;
  name!: string;
  description?: string;
  type!: string;
  sys_workflow_type_id?: number;
  filling_type_id?: number;
  show_in_list!: number;
  recipient!: string;
  html_content?: string;
  is_service_provider!: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  tax_type_id?: number;
  old_tax_type_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_letter {
    return sequelize.define('co_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    sys_letters_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
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
      allowNull: true
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
    tableName: 'co_letters',
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
        name: "co_letters_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "co_letters_sys_letters_id_index",
        using: "BTREE",
        fields: [
          { name: "sys_letters_id" },
        ]
      },
    ]
  }) as typeof co_letter;
  }
}
