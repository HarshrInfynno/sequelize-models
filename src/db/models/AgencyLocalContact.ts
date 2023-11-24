import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { agency_local_address, agency_local_addressId } from './AgencyLocalAddress';
import type { agency_local_contact_note, agency_local_contact_noteId } from './AgencyLocalContactNote';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_local_contactAttributes {
  id: number;
  co_info_id?: number;
  agency_local_id: number;
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

export type agency_local_contactPk = "id";
export type agency_local_contactId = agency_local_contact[agency_local_contactPk];
export type agency_local_contactOptionalAttributes = "id" | "co_info_id" | "used_for" | "agent_id" | "title" | "email" | "primary_phone" | "ext" | "fax" | "updated_by" | "created_at" | "updated_at" | "address_id";
export type agency_local_contactCreationAttributes = Optional<agency_local_contactAttributes, agency_local_contactOptionalAttributes>;

export class agency_local_contact extends Model<agency_local_contactAttributes, agency_local_contactCreationAttributes> implements agency_local_contactAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_id!: number;
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

  // agency_local_contact belongsTo agency_local via agency_local_id
  agency_local!: agency_local;
  getAgency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // agency_local_contact belongsTo agency_local_address via address_id
  address!: agency_local_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<agency_local_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<agency_local_address, agency_local_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<agency_local_address>;
  // agency_local_contact hasMany agency_local_contact_note via agency_local_contact_id
  agency_local_contact_notes!: agency_local_contact_note[];
  getAgency_local_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_local_contact_note>;
  setAgency_local_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addAgency_local_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  addAgency_local_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  createAgency_local_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_local_contact_note>;
  removeAgency_local_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  removeAgency_local_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasAgency_local_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_local_contact_note, agency_local_contact_noteId>;
  hasAgency_local_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_local_contact_note, agency_local_contact_noteId>;
  countAgency_local_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // agency_local_contact belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_local_contact belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_contact {
    return sequelize.define('agency_local_contact', {
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
    address_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_local_contact',
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
        name: "agency_local_contact_agency_local_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_local_contact_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_contact_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_contact_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_local_contact_address_id_foreign",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  }) as typeof agency_local_contact;
  }
}
