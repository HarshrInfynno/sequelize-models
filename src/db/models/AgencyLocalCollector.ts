import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_local_collector_address, agency_local_collector_addressId } from './AgencyLocalCollectorAddress';
import type { agency_local_collector_contact, agency_local_collector_contactId } from './AgencyLocalCollectorContact';
import type { agency_local_collector_link, agency_local_collector_linkId } from './AgencyLocalCollectorLink';
import type { agency_local_collector_note, agency_local_collector_noteId } from './AgencyLocalCollectorNote';

export interface agency_local_collectorAttributes {
  id: number;
  co_info_id?: number;
  agency_info_id: number;
  name: string;
  description?: string;
  filling_type_id?: number;
  agency_tax_type_id?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;
}

export type agency_local_collectorPk = "id";
export type agency_local_collectorId = agency_local_collector[agency_local_collectorPk];
export type agency_local_collectorOptionalAttributes = "id" | "co_info_id" | "description" | "filling_type_id" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "old_filling_type_id" | "old_agency_tax_type_id";
export type agency_local_collectorCreationAttributes = Optional<agency_local_collectorAttributes, agency_local_collectorOptionalAttributes>;

export class agency_local_collector extends Model<agency_local_collectorAttributes, agency_local_collectorCreationAttributes> implements agency_local_collectorAttributes {
  id!: number;
  co_info_id?: number;
  agency_info_id!: number;
  name!: string;
  description?: string;
  filling_type_id?: number;
  agency_tax_type_id?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  old_filling_type_id?: number;
  old_agency_tax_type_id?: number;

  // agency_local_collector hasMany agency_city via tax_collector_id
  agency_cities!: agency_city[];
  getAgency_cities!: Sequelize.HasManyGetAssociationsMixin<agency_city>;
  setAgency_cities!: Sequelize.HasManySetAssociationsMixin<agency_city, agency_cityId>;
  addAgency_city!: Sequelize.HasManyAddAssociationMixin<agency_city, agency_cityId>;
  addAgency_cities!: Sequelize.HasManyAddAssociationsMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.HasManyCreateAssociationMixin<agency_city>;
  removeAgency_city!: Sequelize.HasManyRemoveAssociationMixin<agency_city, agency_cityId>;
  removeAgency_cities!: Sequelize.HasManyRemoveAssociationsMixin<agency_city, agency_cityId>;
  hasAgency_city!: Sequelize.HasManyHasAssociationMixin<agency_city, agency_cityId>;
  hasAgency_cities!: Sequelize.HasManyHasAssociationsMixin<agency_city, agency_cityId>;
  countAgency_cities!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_collector hasMany agency_local via tax_collector_id
  agency_locals!: agency_local[];
  getAgency_locals!: Sequelize.HasManyGetAssociationsMixin<agency_local>;
  setAgency_locals!: Sequelize.HasManySetAssociationsMixin<agency_local, agency_localId>;
  addAgency_local!: Sequelize.HasManyAddAssociationMixin<agency_local, agency_localId>;
  addAgency_locals!: Sequelize.HasManyAddAssociationsMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.HasManyCreateAssociationMixin<agency_local>;
  removeAgency_local!: Sequelize.HasManyRemoveAssociationMixin<agency_local, agency_localId>;
  removeAgency_locals!: Sequelize.HasManyRemoveAssociationsMixin<agency_local, agency_localId>;
  hasAgency_local!: Sequelize.HasManyHasAssociationMixin<agency_local, agency_localId>;
  hasAgency_locals!: Sequelize.HasManyHasAssociationsMixin<agency_local, agency_localId>;
  countAgency_locals!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_collector hasMany agency_local_collector_address via agency_local_collector_id
  agency_local_collector_addresses!: agency_local_collector_address[];
  getAgency_local_collector_addresses!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_address>;
  setAgency_local_collector_addresses!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_address, agency_local_collector_addressId>;
  addAgency_local_collector_address!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_address, agency_local_collector_addressId>;
  addAgency_local_collector_addresses!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_address, agency_local_collector_addressId>;
  createAgency_local_collector_address!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_address>;
  removeAgency_local_collector_address!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_address, agency_local_collector_addressId>;
  removeAgency_local_collector_addresses!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_address, agency_local_collector_addressId>;
  hasAgency_local_collector_address!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_address, agency_local_collector_addressId>;
  hasAgency_local_collector_addresses!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_address, agency_local_collector_addressId>;
  countAgency_local_collector_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_collector hasMany agency_local_collector_contact via agency_local_collector_id
  agency_local_collector_contacts!: agency_local_collector_contact[];
  getAgency_local_collector_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_contact>;
  setAgency_local_collector_contacts!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  addAgency_local_collector_contact!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  addAgency_local_collector_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  createAgency_local_collector_contact!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_contact>;
  removeAgency_local_collector_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  removeAgency_local_collector_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  hasAgency_local_collector_contact!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  hasAgency_local_collector_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_contact, agency_local_collector_contactId>;
  countAgency_local_collector_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_collector hasMany agency_local_collector_link via agency_local_collector_id
  agency_local_collector_links!: agency_local_collector_link[];
  getAgency_local_collector_links!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_link>;
  setAgency_local_collector_links!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_link, agency_local_collector_linkId>;
  addAgency_local_collector_link!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_link, agency_local_collector_linkId>;
  addAgency_local_collector_links!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_link, agency_local_collector_linkId>;
  createAgency_local_collector_link!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_link>;
  removeAgency_local_collector_link!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_link, agency_local_collector_linkId>;
  removeAgency_local_collector_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_link, agency_local_collector_linkId>;
  hasAgency_local_collector_link!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_link, agency_local_collector_linkId>;
  hasAgency_local_collector_links!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_link, agency_local_collector_linkId>;
  countAgency_local_collector_links!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_collector hasMany agency_local_collector_note via agency_local_collector_id
  agency_local_collector_notes!: agency_local_collector_note[];
  getAgency_local_collector_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_collector_note>;
  setAgency_local_collector_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_collector_note, agency_local_collector_noteId>;
  addAgency_local_collector_note!: Sequelize.HasManyAddAssociationMixin<agency_local_collector_note, agency_local_collector_noteId>;
  addAgency_local_collector_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_collector_note, agency_local_collector_noteId>;
  createAgency_local_collector_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_collector_note>;
  removeAgency_local_collector_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_collector_note, agency_local_collector_noteId>;
  removeAgency_local_collector_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_collector_note, agency_local_collector_noteId>;
  hasAgency_local_collector_note!: Sequelize.HasManyHasAssociationMixin<agency_local_collector_note, agency_local_collector_noteId>;
  hasAgency_local_collector_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_collector_note, agency_local_collector_noteId>;
  countAgency_local_collector_notes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_collector {
    return sequelize.define('agency_local_collector', {
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
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "app_usage_types.id"
    },
    agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
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
    old_filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    old_agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    tableName: 'agency_local_collector',
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
  }) as typeof agency_local_collector;
  }
}
