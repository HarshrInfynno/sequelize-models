import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_letters_autoAttributes {
  id: number;
  co_info_id?: number;
  sys_workflow_type_id: number;
  sys_workflow_id?: number;
  letter_option?: string;
  letter_type?: string;
  letter_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type co_letters_autoPk = "id";
export type co_letters_autoId = co_letters_auto[co_letters_autoPk];
export type co_letters_autoOptionalAttributes = "id" | "co_info_id" | "sys_workflow_id" | "letter_option" | "letter_type" | "letter_id" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type co_letters_autoCreationAttributes = Optional<co_letters_autoAttributes, co_letters_autoOptionalAttributes>;

export class co_letters_auto extends Model<co_letters_autoAttributes, co_letters_autoCreationAttributes> implements co_letters_autoAttributes {
  id!: number;
  co_info_id?: number;
  sys_workflow_type_id!: number;
  sys_workflow_id?: number;
  letter_option?: string;
  letter_type?: string;
  letter_id?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_letters_auto {
    return sequelize.define('co_letters_auto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    letter_option: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    letter_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'co_letters_auto',
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
  }) as typeof co_letters_auto;
  }
}
