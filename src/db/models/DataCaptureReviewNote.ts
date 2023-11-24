import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface data_capture_review_noteAttributes {
  id: number;
  co_info_id?: number;
  created_by?: number;
  updated_by?: number;
  note?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type data_capture_review_notePk = "id";
export type data_capture_review_noteId = data_capture_review_note[data_capture_review_notePk];
export type data_capture_review_noteOptionalAttributes = "id" | "co_info_id" | "created_by" | "updated_by" | "note" | "created_at" | "updated_at";
export type data_capture_review_noteCreationAttributes = Optional<data_capture_review_noteAttributes, data_capture_review_noteOptionalAttributes>;

export class data_capture_review_note extends Model<data_capture_review_noteAttributes, data_capture_review_noteCreationAttributes> implements data_capture_review_noteAttributes {
  id!: number;
  co_info_id?: number;
  created_by?: number;
  updated_by?: number;
  note?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof data_capture_review_note {
    return sequelize.define('data_capture_review_note', {
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
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'data_capture_review_notes',
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
  }) as typeof data_capture_review_note;
  }
}
