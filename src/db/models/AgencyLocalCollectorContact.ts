import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';
import type { agency_local_collector_address, agency_local_collector_addressId } from './AgencyLocalCollectorAddress';
import type { agency_local_collector_contact_note, agency_local_collector_contact_noteId } from './AgencyLocalCollectorContactNote';

export interface agency_local_collector_contactAttributes {
  id: number;
  co_info_id?: number;
  agency_local_collector_id: number;
  name: string;
  used_for?: string;
  agent_id?: string;
  title?: string;
  email?: string;
  primary_phone?: string;
  ext?: string;
  fax?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  address_id?: number;
}

export type agency_local_collector_contactPk = "id";
export type agency_local_collector_contactId = agency_local_collector_contact[agency_local_collector_contactPk];
export type agency_local_collector_contactOptionalAttributes = "id" | "co_info_id" | "used_for" | "agent_id" | "title" | "email" | "primary_phone" | "ext" | "fax" | "updated_by" | "created_at" | "updated_at" | "address_id";
export type agency_local_collector_contactCreationAttributes = Optional<agency_local_collector_contactAttributes, agency_local_collector_contactOptionalAttributes>;

export class agency_local_collector_contact extends Model<agency_local_collector_contactAttributes, agency_local_collector_contactCreationAttributes> implements agency_local_collector_contactAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_collector_id!: number;
  name!: string;
  used_for?: string;
  agent_id?: string;
  title?: string;
  email?: string;
  primary_phone?: string;
  ext?: string;
  fax?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  address_id?: number;

  // agency_local_collector_contact belongsTo agency_local_collector via agency_local_collector_id
  agency_local_collector!: agency_local_collector;
  getAgency_local_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setAgency_local_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createAgency_local_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;
  // agency_local_collector_contact belongsTo agency_local_collector_address via address_id
  address!: agency_local_collector_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector_address, agency_local_collector_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector_address>;
  // agency_local_collector_contact hasMany agency_local_collector_contact_note via agency_local_collector_contact_id
  agency_local_collector_contact_notes!: agency_local_collector_contact_note[];
  getAgency_local_collector_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_contact_note>;
  setAgency_local_collector_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addAgency_local_collector_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  addAgency_local_collector_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  createAgency_local_collector_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_contact_note>;
  removeAgency_local_collector_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  removeAgency_local_collector_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasAgency_local_collector_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  hasAgency_local_collector_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_contact_note, agency_local_collector_contact_noteId>;
  countAgency_local_collector_contact_notes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_collector_contact {
    return sequelize.define('agency_local_collector_contact', {
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
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agent_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ext: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    address_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local_collector_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_local_collector_contact',
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
        name: "agency_local_collector_id_contact_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_collector_id" },
        ]
      },
      {
        name: "agency_local_collector_address_id_foreign",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  }) as typeof agency_local_collector_contact;
  }
}
