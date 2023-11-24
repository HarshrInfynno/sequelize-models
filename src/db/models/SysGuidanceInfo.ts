import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_infoAttributes {
  id: number;
  co_info_id?: number;
  country_id?: number;
  agency_id?: number;
  agency_department_id?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  sys_workflow_id?: number;
  agency_form_number?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_infoPk = "id";
export type sys_guidance_infoId = sys_guidance_info[sys_guidance_infoPk];
export type sys_guidance_infoOptionalAttributes = "id" | "co_info_id" | "country_id" | "agency_id" | "agency_department_id" | "agency_local_id" | "agency_city_id" | "sys_workflow_id" | "agency_form_number" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_infoCreationAttributes = Optional<sys_guidance_infoAttributes, sys_guidance_infoOptionalAttributes>;

export class sys_guidance_info extends Model<sys_guidance_infoAttributes, sys_guidance_infoCreationAttributes> implements sys_guidance_infoAttributes {
  id!: number;
  co_info_id?: number;
  country_id?: number;
  agency_id?: number;
  agency_department_id?: number;
  agency_local_id?: number;
  agency_city_id?: number;
  sys_workflow_id?: number;
  agency_form_number?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_info {
    return sequelize.define('sys_guidance_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : co_info"
    },
    country_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_countries"
    },
    agency_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_info"
    },
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_department"
    },
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_local"
    },
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_city"
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : sys_workflow"
    },
    agency_form_number: {
      type: DataTypes.STRING(255),
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
    tableName: 'sys_guidance_info',
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
    ]
  }) as typeof sys_guidance_info;
  }
}
