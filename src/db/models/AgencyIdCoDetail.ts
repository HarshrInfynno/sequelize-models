import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_id_info, agency_id_infoId } from './AgencyIdInfo';
import type { co_info, co_infoId } from './CoInfo';

export interface agency_id_co_detailAttributes {
  id: number;
  agency_id_info_id: number;
  co_info_id: number;
  verification_exception?: string;
  notes?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_id_co_detailPk = "id";
export type agency_id_co_detailId = agency_id_co_detail[agency_id_co_detailPk];
export type agency_id_co_detailOptionalAttributes = "id" | "verification_exception" | "notes" | "updated_by" | "created_at" | "updated_at";
export type agency_id_co_detailCreationAttributes = Optional<agency_id_co_detailAttributes, agency_id_co_detailOptionalAttributes>;

export class agency_id_co_detail extends Model<agency_id_co_detailAttributes, agency_id_co_detailCreationAttributes> implements agency_id_co_detailAttributes {
  id!: number;
  agency_id_info_id!: number;
  co_info_id!: number;
  verification_exception?: string;
  notes?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_id_co_detail belongsTo agency_id_info via agency_id_info_id
  agency_id_info!: agency_id_info;
  getAgency_id_info!: Sequelize.BelongsToGetAssociationMixin<agency_id_info>;
  setAgency_id_info!: Sequelize.BelongsToSetAssociationMixin<agency_id_info, agency_id_infoId>;
  createAgency_id_info!: Sequelize.BelongsToCreateAssociationMixin<agency_id_info>;
  // agency_id_co_detail belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_id_co_detail {
    return sequelize.define('agency_id_co_detail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_id_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_id_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    verification_exception: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notes: {
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
    tableName: 'agency_id_co_details',
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
        name: "co_info_agency_id_co_details_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_id_info_agency_id_co_details_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_id_info_id" },
        ]
      },
    ]
  }) as typeof agency_id_co_detail;
  }
}
