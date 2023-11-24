import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_department, agency_departmentId } from './AgencyDepartment';
import type { agency_link_type, agency_link_typeId } from './AgencyLinkType';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_department_linkAttributes {
  id: number;
  co_info_id?: number;
  agency_department_id: number;
  description?: string;
  agency_link_type_id?: number;
  used_for?: string;
  url?: string;
  username?: string;
  password?: string;
  expire_on?: string;
  note?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_department_linkPk = "id";
export type agency_department_linkId = agency_department_link[agency_department_linkPk];
export type agency_department_linkOptionalAttributes = "id" | "co_info_id" | "description" | "agency_link_type_id" | "used_for" | "url" | "username" | "password" | "expire_on" | "note" | "created_by" | "updated_by" | "created_at" | "updated_at";
export type agency_department_linkCreationAttributes = Optional<agency_department_linkAttributes, agency_department_linkOptionalAttributes>;

export class agency_department_link extends Model<agency_department_linkAttributes, agency_department_linkCreationAttributes> implements agency_department_linkAttributes {
  id!: number;
  co_info_id?: number;
  agency_department_id!: number;
  description?: string;
  agency_link_type_id?: number;
  used_for?: string;
  url?: string;
  username?: string;
  password?: string;
  expire_on?: string;
  note?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_department_link belongsTo agency_department via agency_department_id
  agency_department!: agency_department;
  getAgency_department!: Sequelize.BelongsToGetAssociationMixin<agency_department>;
  setAgency_department!: Sequelize.BelongsToSetAssociationMixin<agency_department, agency_departmentId>;
  createAgency_department!: Sequelize.BelongsToCreateAssociationMixin<agency_department>;
  // agency_department_link belongsTo agency_link_type via agency_link_type_id
  agency_link_type!: agency_link_type;
  getAgency_link_type!: Sequelize.BelongsToGetAssociationMixin<agency_link_type>;
  setAgency_link_type!: Sequelize.BelongsToSetAssociationMixin<agency_link_type, agency_link_typeId>;
  createAgency_link_type!: Sequelize.BelongsToCreateAssociationMixin<agency_link_type>;
  // agency_department_link belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_department_link belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_department_link {
    return sequelize.define('agency_department_link', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
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
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agency_link_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_link_type',
        key: 'id'
      }
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expire_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
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
    }
  }, {
    tableName: 'agency_department_link',
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
        name: "agency_department_link_agency_department_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_department_id" },
        ]
      },
      {
        name: "agency_department_link_agency_link_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_link_type_id" },
        ]
      },
      {
        name: "agency_department_link_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_link_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  }) as typeof agency_department_link;
  }
}
