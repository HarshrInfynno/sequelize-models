import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_letterAttributes {
  id: number;
  sys_guidance_info_id: number;
  co_info_id?: number;
  name?: string;
  description?: string;
  recipient?: string;
  used_for?: string;
  letter_name?: string;
  letter_type?: string;
  letter_id?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_letterPk = "id";
export type sys_guidance_letterId = sys_guidance_letter[sys_guidance_letterPk];
export type sys_guidance_letterOptionalAttributes = "id" | "co_info_id" | "name" | "description" | "recipient" | "used_for" | "letter_name" | "letter_type" | "letter_id" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_letterCreationAttributes = Optional<sys_guidance_letterAttributes, sys_guidance_letterOptionalAttributes>;

export class sys_guidance_letter extends Model<sys_guidance_letterAttributes, sys_guidance_letterCreationAttributes> implements sys_guidance_letterAttributes {
  id!: number;
  sys_guidance_info_id!: number;
  co_info_id?: number;
  name?: string;
  description?: string;
  recipient?: string;
  used_for?: string;
  letter_name?: string;
  letter_type?: string;
  letter_id?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_letter {
    return sequelize.define('sys_guidance_letter', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sys_guidance_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Reference : sys_guidance_info"
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : co_info"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recipient: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    used_for: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    letter_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    letter_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    letter_id: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'sys_guidance_letters',
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
  }) as typeof sys_guidance_letter;
  }
}
