import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_local_collector, agency_local_collectorId } from './AgencyLocalCollector';

export interface agency_local_collector_linkAttributes {
  id: number;
  co_info_id?: number;
  agency_local_collector_id: number;
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

export type agency_local_collector_linkPk = "id";
export type agency_local_collector_linkId = agency_local_collector_link[agency_local_collector_linkPk];
export type agency_local_collector_linkOptionalAttributes = "id" | "co_info_id" | "description" | "agency_link_type_id" | "used_for" | "url" | "username" | "password" | "expire_on" | "note" | "updated_by" | "created_at" | "updated_at";
export type agency_local_collector_linkCreationAttributes = Optional<agency_local_collector_linkAttributes, agency_local_collector_linkOptionalAttributes>;

export class agency_local_collector_link extends Model<agency_local_collector_linkAttributes, agency_local_collector_linkCreationAttributes> implements agency_local_collector_linkAttributes {
  id!: number;
  co_info_id?: number;
  agency_local_collector_id!: number;
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

  // agency_local_collector_link belongsTo agency_local_collector via agency_local_collector_id
  agency_local_collector!: agency_local_collector;
  getAgency_local_collector!: Sequelize.BelongsToGetAssociationMixin<agency_local_collector>;
  setAgency_local_collector!: Sequelize.BelongsToSetAssociationMixin<agency_local_collector, agency_local_collectorId>;
  createAgency_local_collector!: Sequelize.BelongsToCreateAssociationMixin<agency_local_collector>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_local_collector_link {
    return sequelize.define('agency_local_collector_link', {
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
    agency_local_collector_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_local_collector',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agency_link_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
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
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'agency_local_collector_link',
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
        name: "agency_local_collector_id_link_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_collector_id" },
        ]
      },
    ]
  }) as typeof agency_local_collector_link;
  }
}
