import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_city, agency_cityId } from './AgencyCity';
import type { agency_city_address, agency_city_addressId } from './AgencyCityAddress';
import type { agency_city_contact_note, agency_city_contact_noteId } from './AgencyCityContactNote';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_city_contactAttributes {
  id: number;
  co_info_id?: number;
  agency_city_id: number;
  name: string;
  used_for?: string;
  agent_id?: string;
  title?: string;
  email?: string;
  primary_phone?: string;
  ext?: string;
  fax?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  address_id?: number;
}

export type agency_city_contactPk = "id";
export type agency_city_contactId = agency_city_contact[agency_city_contactPk];
export type agency_city_contactOptionalAttributes = "id" | "co_info_id" | "used_for" | "agent_id" | "title" | "email" | "primary_phone" | "ext" | "fax" | "created_by" | "updated_by" | "created_at" | "updated_at" | "address_id";
export type agency_city_contactCreationAttributes = Optional<agency_city_contactAttributes, agency_city_contactOptionalAttributes>;

export class agency_city_contact extends Model<agency_city_contactAttributes, agency_city_contactCreationAttributes> implements agency_city_contactAttributes {
  id!: number;
  co_info_id?: number;
  agency_city_id!: number;
  name!: string;
  used_for?: string;
  agent_id?: string;
  title?: string;
  email?: string;
  primary_phone?: string;
  ext?: string;
  fax?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  address_id?: number;

  // agency_city_contact belongsTo agency_city via agency_city_id
  agency_city!: agency_city;
  getAgency_city!: Sequelize.BelongsToGetAssociationMixin<agency_city>;
  setAgency_city!: Sequelize.BelongsToSetAssociationMixin<agency_city, agency_cityId>;
  createAgency_city!: Sequelize.BelongsToCreateAssociationMixin<agency_city>;
  // agency_city_contact belongsTo agency_city_address via address_id
  address!: agency_city_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<agency_city_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<agency_city_address, agency_city_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<agency_city_address>;
  // agency_city_contact hasMany agency_city_contact_note via agency_city_contact_id
  agency_city_contact_notes!: agency_city_contact_note[];
  getAgency_city_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_city_contact_note>;
  setAgency_city_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addAgency_city_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  addAgency_city_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  createAgency_city_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_city_contact_note>;
  removeAgency_city_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  removeAgency_city_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasAgency_city_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_city_contact_note, agency_city_contact_noteId>;
  hasAgency_city_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_city_contact_note, agency_city_contact_noteId>;
  countAgency_city_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // agency_city_contact belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_city_contact belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_city_contact {
    return sequelize.define('agency_city_contact', {
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
    address_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_city_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_city_contact',
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
        name: "agency_city_contact_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_city_contact_agency_city_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_city_id" },
        ]
      },
      {
        name: "agency_city_contact_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_city_contact_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_city_contact_address_id_foreign",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  }) as typeof agency_city_contact;
  }
}
