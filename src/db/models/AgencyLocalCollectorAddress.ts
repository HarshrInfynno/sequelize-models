import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';
import type { agency_local_collector_contact, agency_local_collector_contactId } from './AgencyLocalCollectorContact';

export interface agency_local_collector_addressAttributes {
  id: number;
  co_info_id?: number;
  agency_local_collector_id: number;
  name?: string;
  email?: string;
  used_for?: string;
  address_1?: string;
  address_2?: string;
  state?: number;
  city?: string;
  zip?: string;
  phone?: string;
  fax?: string;
  is_filing_address: number;
  agency_tax_type_id?: number;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  website?: string;
  old_agency_tax_type_id?: number;
  country?: number;
}

export type agency_local_collector_addressPk = "id";
export type agency_local_collector_addressId = agency_local_collector_address[agency_local_collector_addressPk];
export type agency_local_collector_addressOptionalAttributes = "id" | "co_info_id" | "name" | "email" | "used_for" | "address_1" | "address_2" | "state" | "city" | "zip" | "phone" | "fax" | "is_filing_address" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "website" | "old_agency_tax_type_id" | "country";
export type agency_local_collector_addressCreationAttributes = Optional<agency_local_collector_addressAttributes, agency_local_collector_addressOptionalAttributes>;

export class agency_local_collector_address extends Model<agency_local_collector_addressAttributes, agency_local_collector_addressCreationAttributes> implements agency_local_collector_addressAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_collector_id!: number;
  name?: string;
  email?: string;
  used_for?: string;
  address_1?: string;
  address_2?: string;
  state?: number;
  city?: string;
  zip?: string;
  phone?: string;
  fax?: string;
  is_filing_address!: number;
  agency_tax_type_id?: number;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  website?: string;
  old_agency_tax_type_id?: number;
  country?: number;

  // agency_local_collector_address belongsTo agency_local_collector via agency_local_collector_id
  agency_local_collector!: agency_local_collector;
  getAgency_local_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setAgency_local_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createAgency_local_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;
  // agency_local_collector_address hasMany agency_local_collector_contact via address_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_collector_address {
    return sequelize.define('agency_local_collector_address', {
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
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_filing_address: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    old_agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    tableName: 'agency_local_collector_address',
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
        name: "agency_local_collector_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_collector_id" },
        ]
      },
    ]
  }) as typeof agency_local_collector_address;
  }
}
