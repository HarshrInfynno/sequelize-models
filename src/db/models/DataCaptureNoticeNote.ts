import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface data_capture_notice_noteAttributes {
  id: number;
  ocr_scanned_document_id?: number;
  co_info_id?: number;
  created_by?: number;
  updated_by?: number;
  note?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type data_capture_notice_notePk = "id";
export type data_capture_notice_noteId = data_capture_notice_note[data_capture_notice_notePk];
export type data_capture_notice_noteOptionalAttributes = "id" | "ocr_scanned_document_id" | "co_info_id" | "created_by" | "updated_by" | "note" | "created_at" | "updated_at";
export type data_capture_notice_noteCreationAttributes = Optional<data_capture_notice_noteAttributes, data_capture_notice_noteOptionalAttributes>;

export class data_capture_notice_note extends Model<data_capture_notice_noteAttributes, data_capture_notice_noteCreationAttributes> implements data_capture_notice_noteAttributes {
  id!: number;
  ocr_scanned_document_id?: number;
  co_info_id?: number;
  created_by?: number;
  updated_by?: number;
  note?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof data_capture_notice_note {
    return sequelize.define('data_capture_notice_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ocr_scanned_document_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
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
    tableName: 'data_capture_notice_notes',
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
  }) as typeof data_capture_notice_note;
  }
}
