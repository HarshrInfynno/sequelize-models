import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_agency_insightAttributes {
  id: number;
  sys_guidance_info_id: number;
  co_info_id?: number;
  agency_insight_content?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_agency_insightPk = "id";
export type sys_guidance_agency_insightId = sys_guidance_agency_insight[sys_guidance_agency_insightPk];
export type sys_guidance_agency_insightOptionalAttributes = "id" | "co_info_id" | "agency_insight_content" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_agency_insightCreationAttributes = Optional<sys_guidance_agency_insightAttributes, sys_guidance_agency_insightOptionalAttributes>;

export class sys_guidance_agency_insight extends Model<sys_guidance_agency_insightAttributes, sys_guidance_agency_insightCreationAttributes> implements sys_guidance_agency_insightAttributes {
  id!: number;
  sys_guidance_info_id!: number;
  co_info_id?: number;
  agency_insight_content?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_agency_insight {
    return sequelize.define('sys_guidance_agency_insight', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sys_guidance_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Reference : sys_guidance_info"
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : co_info"
    },
    agency_insight_content: {
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
    tableName: 'sys_guidance_agency_insight',
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
  }) as typeof sys_guidance_agency_insight;
  }
}
