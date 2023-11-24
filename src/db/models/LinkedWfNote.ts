import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface linked_wf_noteAttributes {
  id: number;
  wf_info_id: number;
  wf_display_id: number;
  wf_notes_id: number;
  created_by: number;
  created_at?: Date;
  updated_at?: Date;
}

export type linked_wf_notePk = "id";
export type linked_wf_noteId = linked_wf_note[linked_wf_notePk];
export type linked_wf_noteOptionalAttributes = "id" | "created_at" | "updated_at";
export type linked_wf_noteCreationAttributes = Optional<linked_wf_noteAttributes, linked_wf_noteOptionalAttributes>;

export class linked_wf_note extends Model<linked_wf_noteAttributes, linked_wf_noteCreationAttributes> implements linked_wf_noteAttributes {
  id!: number;
  wf_info_id!: number;
  wf_display_id!: number;
  wf_notes_id!: number;
  created_by!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof linked_wf_note {
    return sequelize.define('linked_wf_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    wf_display_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    wf_notes_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'linked_wf_notes',
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
  }) as typeof linked_wf_note;
  }
}
