import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_guidance_relevant_tax_authAttributes {
  id: number;
  sys_guidance_info_id: number;
  co_info_id?: number;
  name?: string;
  description?: string;
  instructions?: string;
  link_to_agency_website?: string;
  created_by: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type sys_guidance_relevant_tax_authPk = "id";
export type sys_guidance_relevant_tax_authId = sys_guidance_relevant_tax_auth[sys_guidance_relevant_tax_authPk];
export type sys_guidance_relevant_tax_authOptionalAttributes = "id" | "co_info_id" | "name" | "description" | "instructions" | "link_to_agency_website" | "updated_by" | "created_at" | "updated_at";
export type sys_guidance_relevant_tax_authCreationAttributes = Optional<sys_guidance_relevant_tax_authAttributes, sys_guidance_relevant_tax_authOptionalAttributes>;

export class sys_guidance_relevant_tax_auth extends Model<sys_guidance_relevant_tax_authAttributes, sys_guidance_relevant_tax_authCreationAttributes> implements sys_guidance_relevant_tax_authAttributes {
  id!: number;
  sys_guidance_info_id!: number;
  co_info_id?: number;
  name?: string;
  description?: string;
  instructions?: string;
  link_to_agency_website?: string;
  created_by!: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_guidance_relevant_tax_auth {
    return sequelize.define('sys_guidance_relevant_tax_auth', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_to_agency_website: {
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
    tableName: 'sys_guidance_relevant_tax_auth',
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
  }) as typeof sys_guidance_relevant_tax_auth;
  }
}
