import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_summaryAttributes {
  id: number;
  sys_guidance_info_id: number;
  co_info_id?: number;
  summary_content?: string;
  things_to_review?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_summaryPk = "id";
export type sys_guidance_summaryId = sys_guidance_summary[sys_guidance_summaryPk];
export type sys_guidance_summaryOptionalAttributes = "id" | "co_info_id" | "summary_content" | "things_to_review" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_summaryCreationAttributes = Optional<sys_guidance_summaryAttributes, sys_guidance_summaryOptionalAttributes>;

export class sys_guidance_summary extends Model<sys_guidance_summaryAttributes, sys_guidance_summaryCreationAttributes> implements sys_guidance_summaryAttributes {
  id!: number;
  sys_guidance_info_id!: number;
  co_info_id?: number;
  summary_content?: string;
  things_to_review?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_summary {
    return sequelize.define('sys_guidance_summary', {
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
    summary_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    things_to_review: {
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
    tableName: 'sys_guidance_summary',
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
  }) as typeof sys_guidance_summary;
  }
}
