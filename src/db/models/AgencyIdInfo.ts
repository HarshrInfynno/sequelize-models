import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_id_co_detail, agency_id_co_detailId } from './AgencyIdCoDetail';
import type { agency_info, agency_infoId } from './AgencyInfo';

export interface agency_id_infoAttributes {
  id: number;
  agency_info_id: number;
  agency_id_types_id?: number;
  tax_type_id?: number;
  name?: string;
  key?: string;
  format?: string;
  description?: string;
  website?: string;
  required?: number;
  created_at?: Date;
  updated_at?: Date;
  submittal_type?: string;
}

export type agency_id_infoPk = "id";
export type agency_id_infoId = agency_id_info[agency_id_infoPk];
export type agency_id_infoOptionalAttributes = "id" | "agency_id_types_id" | "tax_type_id" | "name" | "key" | "format" | "description" | "website" | "required" | "created_at" | "updated_at" | "submittal_type";
export type agency_id_infoCreationAttributes = Optional<agency_id_infoAttributes, agency_id_infoOptionalAttributes>;

export class agency_id_info extends Model<agency_id_infoAttributes, agency_id_infoCreationAttributes> implements agency_id_infoAttributes {
  id!: number;
  agency_info_id!: number;
  agency_id_types_id?: number;
  tax_type_id?: number;
  name?: string;
  key?: string;
  format?: string;
  description?: string;
  website?: string;
  required?: number;
  created_at?: Date;
  updated_at?: Date;
  submittal_type?: string;

  // agency_id_info hasMany agency_id_co_detail via agency_id_info_id
  agency_id_co_details!: agency_id_co_detail[];
  getAgency_id_co_details!: Sequelize.HasManyGetAssociationsMixin<agency_id_co_detail>;
  setAgency_id_co_details!: Sequelize.HasManySetAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  addAgency_id_co_detail!: Sequelize.HasManyAddAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  addAgency_id_co_details!: Sequelize.HasManyAddAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  createAgency_id_co_detail!: Sequelize.HasManyCreateAssociationMixin<agency_id_co_detail>;
  removeAgency_id_co_detail!: Sequelize.HasManyRemoveAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  removeAgency_id_co_details!: Sequelize.HasManyRemoveAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  hasAgency_id_co_detail!: Sequelize.HasManyHasAssociationMixin<agency_id_co_detail, agency_id_co_detailId>;
  hasAgency_id_co_details!: Sequelize.HasManyHasAssociationsMixin<agency_id_co_detail, agency_id_co_detailId>;
  countAgency_id_co_details!: Sequelize.HasManyCountAssociationsMixin;
  // agency_id_info belongsTo agency_info via agency_info_id
  agency_info!: agency_info;
  getAgency_info!: Sequelize.BelongsToGetAssociationMixin<agency_info>;
  setAgency_info!: Sequelize.BelongsToSetAssociationMixin<agency_info, agency_infoId>;
  createAgency_info!: Sequelize.BelongsToCreateAssociationMixin<agency_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_id_info {
    return sequelize.define('agency_id_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    agency_id_types_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    format: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    submittal_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_id_info',
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
        name: "agency_info_agency_id_foreign_key",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  }) as typeof agency_id_info;
  }
}
