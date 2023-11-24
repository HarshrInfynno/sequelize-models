import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_letters_merge_fieldAttributes {
  id: number;
  letter_type?: string;
  sys_workflow_type_id?: string;
  name?: string;
  value?: string;
  description?: string;
  table_name?: string;
  field_name?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_letters_merge_fieldPk = "id";
export type sys_letters_merge_fieldId = sys_letters_merge_field[sys_letters_merge_fieldPk];
export type sys_letters_merge_fieldOptionalAttributes = "id" | "letter_type" | "sys_workflow_type_id" | "name" | "value" | "description" | "table_name" | "field_name" | "created_at" | "updated_at";
export type sys_letters_merge_fieldCreationAttributes = Optional<sys_letters_merge_fieldAttributes, sys_letters_merge_fieldOptionalAttributes>;

export class sys_letters_merge_field extends Model<sys_letters_merge_fieldAttributes, sys_letters_merge_fieldCreationAttributes> implements sys_letters_merge_fieldAttributes {
  id!: number;
  letter_type?: string;
  sys_workflow_type_id?: string;
  name?: string;
  value?: string;
  description?: string;
  table_name?: string;
  field_name?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_letters_merge_field {
    return sequelize.define('sys_letters_merge_field', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    table_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    field_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_letters_merge_fields',
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
  }) as typeof sys_letters_merge_field;
  }
}
