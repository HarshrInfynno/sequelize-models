import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_local_contact, agency_local_contactId } from './AgencyLocalContact';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_local_addressAttributes {
  id: number;
  co_info_id?: number;
  agency_local_id: number;
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

export type agency_local_addressPk = "id";
export type agency_local_addressId = agency_local_address[agency_local_addressPk];
export type agency_local_addressOptionalAttributes = "id" | "co_info_id" | "name" | "email" | "used_for" | "address_1" | "address_2" | "state" | "city" | "zip" | "phone" | "fax" | "is_filing_address" | "agency_tax_type_id" | "updated_by" | "created_at" | "updated_at" | "website" | "old_agency_tax_type_id" | "country";
export type agency_local_addressCreationAttributes = Optional<agency_local_addressAttributes, agency_local_addressOptionalAttributes>;

export class agency_local_address extends Model<agency_local_addressAttributes, agency_local_addressCreationAttributes> implements agency_local_addressAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_id!: number;
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

  // agency_local_address belongsTo agency_local via agency_local_id
  agency_local!: agency_local;
  getAgency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // agency_local_address hasMany agency_local_contact via address_id
  agency_local_contacts!: agency_local_contact[];
  getAgency_local_contacts!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact>;
  setAgency_local_contacts!: Sequelize.HasManySetAssociationsMixin<agency_local_contact, agency_local_contactId>;
  addAgency_local_contact!: Sequelize.HasManyAddAssociationMixin<agency_local_contact, agency_local_contactId>;
  addAgency_local_contacts!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact, agency_local_contactId>;
  createAgency_local_contact!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact>;
  removeAgency_local_contact!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact, agency_local_contactId>;
  removeAgency_local_contacts!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact, agency_local_contactId>;
  hasAgency_local_contact!: Sequelize.HasManyHasAssociationMixin<agency_local_contact, agency_local_contactId>;
  hasAgency_local_contacts!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact, agency_local_contactId>;
  countAgency_local_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_address belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_local_address belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_address {
    return sequelize.define('agency_local_address', {
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
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_local',
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
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
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
    tableName: 'agency_local_address',
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
        name: "agency_local_address_agency_local_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_local_address_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "agency_local_address_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_address_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_address_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof agency_local_address;
  }
}
