import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_noteAttributes {
  id: number;
  co_info_id?: number;
  sys_guidance_info_id: number;
  note?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_notePk = "id";
export type sys_guidance_noteId = sys_guidance_note[sys_guidance_notePk];
export type sys_guidance_noteOptionalAttributes = "id" | "co_info_id" | "note" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_noteCreationAttributes = Optional<sys_guidance_noteAttributes, sys_guidance_noteOptionalAttributes>;

export class sys_guidance_note extends Model<sys_guidance_noteAttributes, sys_guidance_noteCreationAttributes> implements sys_guidance_noteAttributes {
  id!: number;
  co_info_id?: number;
  sys_guidance_info_id!: number;
  note?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_note {
    return sequelize.define('sys_guidance_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sys_guidance_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Reference Table : sys_guidance_info"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'sys_guidance_notes',
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
  }) as typeof sys_guidance_note;
  }
}
