import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_city_contact, agency_city_contactId } from './AgencyCityContact';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_city_addressAttributes {
  id: number;
  co_info_id?: number;
  agency_city_id: number;
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
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  website?: string;
  old_agency_tax_type_id?: number;
  country?: number;
}

export type agency_city_addressPk = "id";
export type agency_city_addressId = agency_city_address[agency_city_addressPk];
export type agency_city_addressOptionalAttributes = "id" | "co_info_id" | "name" | "email" | "used_for" | "address_1" | "address_2" | "state" | "city" | "zip" | "phone" | "fax" | "is_filing_address" | "agency_tax_type_id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "website" | "old_agency_tax_type_id" | "country";
export type agency_city_addressCreationAttributes = Optional<agency_city_addressAttributes, agency_city_addressOptionalAttributes>;

export class agency_city_address extends Model<agency_city_addressAttributes, agency_city_addressCreationAttributes> implements agency_city_addressAttributes {
  id!: number;
  co_info_id?: number;
  agency_city_id!: number;
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
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  website?: string;
  old_agency_tax_type_id?: number;
  country?: number;

  // agency_city_address belongsTo agency_city via agency_city_id
  agency_city!: agency_city;
  getAgency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // agency_city_address hasMany agency_city_contact via address_id
  agency_city_contacts!: agency_city_contact[];
  getAgency_city_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact>;
  setAgency_city_contacts!: Sequelize.HasManySetAssociationsMixin<agency_city_contact, agency_city_contactId>;
  addAgency_city_contact!: Sequelize.HasManyAddAssociationMixin<agency_city_contact, agency_city_contactId>;
  addAgency_city_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact, agency_city_contactId>;
  createAgency_city_contact!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact>;
  removeAgency_city_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact, agency_city_contactId>;
  removeAgency_city_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact, agency_city_contactId>;
  hasAgency_city_contact!: Sequelize.HasManyHasAssociationMixin<agency_city_contact, agency_city_contactId>;
  hasAgency_city_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact, agency_city_contactId>;
  countAgency_city_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // agency_city_address belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_city_address belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_city_address {
    return sequelize.define('agency_city_address', {
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
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_city',
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
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
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
    tableName: 'agency_city_address',
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
        name: "agency_city_address_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_city_address_agency_city_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_city_id" },
        ]
      },
      {
        name: "agency_city_address_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_city_address_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "agency_city_address_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof agency_city_address;
  }
}
