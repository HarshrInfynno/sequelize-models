import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_number_attribute, agency_form_number_attributeId } from './AgencyFormNumberAttribute';
import type { co_info, co_infoId } from './CoInfo';

export interface agency_form_number_ruleAttributes {
  id: number;
  agency_form_number_attribute_id: number;
  name: string;
  option_1?: string;
  option_2?: string;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;
}

export type agency_form_number_rulePk = "id";
export type agency_form_number_ruleId = agency_form_number_rule[agency_form_number_rulePk];
export type agency_form_number_ruleOptionalAttributes = "id" | "option_1" | "option_2" | "created_at" | "updated_at" | "co_info_id";
export type agency_form_number_ruleCreationAttributes = Optional<agency_form_number_ruleAttributes, agency_form_number_ruleOptionalAttributes>;

export class agency_form_number_rule extends Model<agency_form_number_ruleAttributes, agency_form_number_ruleCreationAttributes> implements agency_form_number_ruleAttributes {
  id!: number;
  agency_form_number_attribute_id!: number;
  name!: string;
  option_1?: string;
  option_2?: string;
  created_at?: Date;
  updated_at?: Date;
  co_info_id?: number;

  // agency_form_number_rule belongsTo agency_form_number_attribute via agency_form_number_attribute_id
  agency_form_number_attribute!: agency_form_number_attribute;
  getAgency_form_number_attribute!: Sequelize.BelongsToGetAssociationMixin<agency_form_number_attribute>;
  setAgency_form_number_attribute!: Sequelize.BelongsToSetAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  createAgency_form_number_attribute!: Sequelize.BelongsToCreateAssociationMixin<agency_form_number_attribute>;
  // agency_form_number_rule belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_form_number_rule {
    return sequelize.define('agency_form_number_rule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agency_form_number_attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agency_form_number_attribute',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    option_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    option_2: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_form_number_rules',
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
        name: "agency_form_number_attribute_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_attribute_id" },
        ]
      },
      {
        name: "co_info_id",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof agency_form_number_rule;
  }
}
