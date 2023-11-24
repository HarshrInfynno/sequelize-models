import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface co_wf_options_letterAttributes {
  id: number;
  co_info_id?: number;
  sys_workflow_id: number;
  letter_type?: string;
  letter_id: number;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;
}

export type co_wf_options_letterPk = "id";
export type co_wf_options_letterId = co_wf_options_letter[co_wf_options_letterPk];
export type co_wf_options_letterOptionalAttributes = "id" | "co_info_id" | "letter_type" | "created_at" | "created_by" | "updated_at";
export type co_wf_options_letterCreationAttributes = Optional<co_wf_options_letterAttributes, co_wf_options_letterOptionalAttributes>;

export class co_wf_options_letter extends Model<co_wf_options_letterAttributes, co_wf_options_letterCreationAttributes> implements co_wf_options_letterAttributes {
  id!: number;
  co_info_id?: number;
  sys_workflow_id!: number;
  letter_type?: string;
  letter_id!: number;
  created_at?: Date;
  created_by?: number;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof co_wf_options_letter {
    return sequelize.define('co_wf_options_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_workflow_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    letter_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    letter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'co_wf_options_letters',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof co_wf_options_letter;
  }
}
