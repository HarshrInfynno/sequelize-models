import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_letters_email_propertyAttributes {
  id: number;
  co_info_id?: number;
  letter_type: string;
  sys_workflow_type_id?: number;
  subject_line: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_letters_email_propertyPk = "id";
export type sys_letters_email_propertyId = sys_letters_email_property[sys_letters_email_propertyPk];
export type sys_letters_email_propertyOptionalAttributes = "id" | "co_info_id" | "sys_workflow_type_id" | "updated_by" | "created_at" | "updated_at";
export type sys_letters_email_propertyCreationAttributes = Optional<sys_letters_email_propertyAttributes, sys_letters_email_propertyOptionalAttributes>;

export class sys_letters_email_property extends Model<sys_letters_email_propertyAttributes, sys_letters_email_propertyCreationAttributes> implements sys_letters_email_propertyAttributes {
  id!: number;
  co_info_id?: number;
  letter_type!: string;
  sys_workflow_type_id?: number;
  subject_line!: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_letters_email_property {
    return sequelize.define('sys_letters_email_property', {
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
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Type = Workflow, sys_workflow_type.id"
    },
    subject_line: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'sys_letters_email_properties',
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
        name: "sys_letters_email_properties_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "sys_letters_email_properties_sys_workflow_type_id_index",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_type_id" },
        ]
      },
    ]
  }) as typeof sys_letters_email_property;
  }
}
