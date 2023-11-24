import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_link_type, agency_link_typeId } from './AgencyLinkType';
import type { agency_local, agency_localId } from './AgencyLocal';
import type { app_user_info, app_user_infoId } from './AppUserInfo';

export interface agency_local_linkAttributes {
  id: number;
  co_info_id?: number;
  agency_local_id: number;
  description?: string;
  agency_link_type_id?: number;
  used_for?: string;
  url?: string;
  username?: string;
  password?: string;
  expire_on?: string;
  note?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_local_linkPk = "id";
export type agency_local_linkId = agency_local_link[agency_local_linkPk];
export type agency_local_linkOptionalAttributes = "id" | "co_info_id" | "description" | "agency_link_type_id" | "used_for" | "url" | "username" | "password" | "expire_on" | "note" | "updated_by" | "created_at" | "updated_at";
export type agency_local_linkCreationAttributes = Optional<agency_local_linkAttributes, agency_local_linkOptionalAttributes>;

export class agency_local_link extends Model<agency_local_linkAttributes, agency_local_linkCreationAttributes> implements agency_local_linkAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_id!: number;
  description?: string;
  agency_link_type_id?: number;
  used_for?: string;
  url?: string;
  username?: string;
  password?: string;
  expire_on?: string;
  note?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_local_link belongsTo agency_link_type via agency_link_type_id
  agency_link_type!: agency_link_type;
  getAgency_link_type!: Sequelize.BelongsToGetAssociationMixin<agency_link_type>;
  setAgency_link_type!: Sequelize.BelongsToSetAssociationMixin<agency_link_type, agency_link_typeId>;
  createAgency_link_type!: Sequelize.BelongsToCreateAssociationMixin<agency_link_type>;
  // agency_local_link belongsTo agency_local via agency_local_id
  agency_local!: agency_local;
  getAgency_local!: Sequelize.BelongsToGetAssociationMixin<agency_local>;
  setAgency_local!: Sequelize.BelongsToSetAssociationMixin<agency_local, agency_localId>;
  createAgency_local!: Sequelize.BelongsToCreateAssociationMixin<agency_local>;
  // agency_local_link belongsTo app_user_info via created_by
  created_by_app_user_info!: app_user_info;
  getCreated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setCreated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createCreated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;
  // agency_local_link belongsTo app_user_info via updated_by
  updated_by_app_user_info!: app_user_info;
  getUpdated_by_app_user_info!: Sequelize.BelongsToGetAssociationMixin<app_user_info>;
  setUpdated_by_app_user_info!: Sequelize.BelongsToSetAssociationMixin<app_user_info, app_user_infoId>;
  createUpdated_by_app_user_info!: Sequelize.BelongsToCreateAssociationMixin<app_user_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_link {
    return sequelize.define('agency_local_link', {
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
    }
  }, {
    tableName: 'agency_local_link',
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
        name: "agency_local_link_agency_local_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_local_link_agency_link_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_link_type_id" },
        ]
      },
      {
        name: "agency_local_link_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_link_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_link_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof agency_local_link;
  }
}
