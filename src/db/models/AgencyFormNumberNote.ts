import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';

export interface agency_form_number_noteAttributes {
  id: number;
  content: string;
  agency_form_number_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_form_number_notePk = "id";
export type agency_form_number_noteId = agency_form_number_note[agency_form_number_notePk];
export type agency_form_number_noteOptionalAttributes = "id" | "created_at" | "updated_at";
export type agency_form_number_noteCreationAttributes = Optional<agency_form_number_noteAttributes, agency_form_number_noteOptionalAttributes>;

export class agency_form_number_note extends Model<agency_form_number_noteAttributes, agency_form_number_noteCreationAttributes> implements agency_form_number_noteAttributes {
  id!: number;
  content!: string;
  agency_form_number_id!: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_form_number_note belongsTo agency_form_number via agency_form_number_id
  agency_form_number!: agency_form_number;
  getAgency_form_number!: Sequelize.BelongsToGetAssociationMixin<agency_form_number>;
  setAgency_form_number!: Sequelize.BelongsToSetAssociationMixin<agency_form_number, agency_form_numberId>;
  createAgency_form_number!: Sequelize.BelongsToCreateAssociationMixin<agency_form_number>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_form_number_note {
    return sequelize.define('agency_form_number_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agency_form_number_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_form_numbers',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_form_number_note',
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
        name: "agency_form_number_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_id" },
        ]
      },
    ]
  }) as typeof agency_form_number_note;
  }
}
