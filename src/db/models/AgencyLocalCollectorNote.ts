import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';

export interface agency_local_collector_noteAttributes {
  id: number;
  co_info_id?: number;
  agency_local_collector_id: number;
  note: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_local_collector_notePk = "id";
export type agency_local_collector_noteId = agency_local_collector_note[agency_local_collector_notePk];
export type agency_local_collector_noteOptionalAttributes = "id" | "co_info_id" | "updated_by" | "created_at" | "updated_at";
export type agency_local_collector_noteCreationAttributes = Optional<agency_local_collector_noteAttributes, agency_local_collector_noteOptionalAttributes>;

export class agency_local_collector_note extends Model<agency_local_collector_noteAttributes, agency_local_collector_noteCreationAttributes> implements agency_local_collector_noteAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_collector_id!: number;
  note!: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_local_collector_note belongsTo agency_local_collector via agency_local_collector_id
  agency_local_collector!: agency_local_collector;
  getAgency_local_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setAgency_local_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createAgency_local_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_collector_note {
    return sequelize.define('agency_local_collector_note', {
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
    agency_local_collector_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_local_collector',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.TEXT,
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
    tableName: 'agency_local_collector_note',
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
        name: "agency_local_collector_id_note_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_collector_id" },
        ]
      },
    ]
  }) as typeof agency_local_collector_note;
  }
}
