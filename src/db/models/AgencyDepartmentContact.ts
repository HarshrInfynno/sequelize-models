import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_department_address, agency_department_addressId } from './AgencyDepartmentAddress';
import type { agency_department_contact_note, agency_department_contact_noteId } from './AgencyDepartmentContactNote';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_department_contactAttributes {
  id: number;
  co_info_id?: number;
  agency_department_id: number;
  agency_info_id?: number;
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

export type agency_department_contactPk = "id";
export type agency_department_contactId = agency_department_contact[agency_department_contactPk];
export type agency_department_contactOptionalAttributes = "id" | "co_info_id" | "agency_info_id" | "used_for" | "agent_id" | "title" | "email" | "primary_phone" | "ext" | "fax" | "created_by" | "updated_by" | "created_at" | "updated_at" | "address_id";
export type agency_department_contactCreationAttributes = Optional<agency_department_contactAttributes, agency_department_contactOptionalAttributes>;

export class agency_department_contact extends Model<agency_department_contactAttributes, agency_department_contactCreationAttributes> implements agency_department_contactAttributes {
  id!: number;
  co_info_id?: number;
  agency_department_id!: number;
  agency_info_id?: number;
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

  // agency_department_contact belongsTo agency_department via agency_department_id
  agency_department!: agency_department;
  getAgency_department!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_department!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_department!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // agency_department_contact belongsTo agency_department_address via address_id
  address!: agency_department_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<agency_department_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<agency_department_address, agency_department_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<agency_department_address>;
  // agency_department_contact hasMany agency_department_contact_note via agency_department_contact_id
  agency_department_contact_notes!: agency_department_contact_note[];
  getAgency_department_contact_notes!: Sequelize.HasManyGetAssociationsMixin<agency_department_contact_note>;
  setAgency_department_contact_notes!: Sequelize.HasManySetAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addAgency_department_contact_note!: Sequelize.HasManyAddAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  addAgency_department_contact_notes!: Sequelize.HasManyAddAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  createAgency_department_contact_note!: Sequelize.HasManyCreateAssociationMixin<agency_department_contact_note>;
  removeAgency_department_contact_note!: Sequelize.HasManyRemoveAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  removeAgency_department_contact_notes!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasAgency_department_contact_note!: Sequelize.HasManyHasAssociationMixin<agency_department_contact_note, agency_department_contact_noteId>;
  hasAgency_department_contact_notes!: Sequelize.HasManyHasAssociationsMixin<agency_department_contact_note, agency_department_contact_noteId>;
  countAgency_department_contact_notes!: Sequelize.HasManyCountAssociationsMixin;
  // agency_department_contact belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_department_contact belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_department_contact {
    return sequelize.define('agency_department_contact', {
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
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_department',
        key: 'id'
      }
    },
    agency_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
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
        model: 'agency_department_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_department_contact',
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
        name: "agency_department_contact_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_department_contact_agency_department_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_department_id" },
        ]
      },
      {
        name: "agency_department_contact_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_contact_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_department_contact_address_id_foreign",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  }) as typeof agency_department_contact;
  }
}
