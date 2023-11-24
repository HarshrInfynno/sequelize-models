import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_keyword_type, agency_form_keyword_typeId } from './AgencyFormKeywordType';
import type { agency_form_number_rule, agency_form_number_ruleId } from './AgencyFormNumberRule';
import type { agency_form_number, agency_form_numberId } from './AgencyFormNumber';

export interface agency_form_number_attributeAttributes {
  id: number;
  agency_form_number_id: number;
  agency_form_keyword_type_id: number;
  attribute: string;
  starts_after: number;
  word_count: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_form_number_attributePk = "id";
export type agency_form_number_attributeId = agency_form_number_attribute[agency_form_number_attributePk];
export type agency_form_number_attributeOptionalAttributes = "id" | "starts_after" | "word_count" | "created_at" | "updated_at";
export type agency_form_number_attributeCreationAttributes = Optional<agency_form_number_attributeAttributes, agency_form_number_attributeOptionalAttributes>;

export class agency_form_number_attribute extends Model<agency_form_number_attributeAttributes, agency_form_number_attributeCreationAttributes> implements agency_form_number_attributeAttributes {
  id!: number;
  agency_form_number_id!: number;
  agency_form_keyword_type_id!: number;
  attribute!: string;
  starts_after!: number;
  word_count!: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_form_number_attribute belongsTo agency_form_keyword_type via agency_form_keyword_type_id
  agency_form_keyword_type!: agency_form_keyword_type;
  getAgency_form_keyword_type!: Sequelize.BelongsToGetAssociationMixin<agency_form_keyword_type>;
  setAgency_form_keyword_type!: Sequelize.BelongsToSetAssociationMixin<agency_form_keyword_type, agency_form_keyword_typeId>;
  createAgency_form_keyword_type!: Sequelize.BelongsToCreateAssociationMixin<agency_form_keyword_type>;
  // agency_form_number_attribute hasMany agency_form_number_rule via agency_form_number_attribute_id
  agency_form_number_rules!: agency_form_number_rule[];
  getAgency_form_number_rules!: Sequelize.HasManyGetAssociationsMixin<agency_form_number_rule>;
  setAgency_form_number_rules!: Sequelize.HasManySetAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  addAgency_form_number_rule!: Sequelize.HasManyAddAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  addAgency_form_number_rules!: Sequelize.HasManyAddAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  createAgency_form_number_rule!: Sequelize.HasManyCreateAssociationMixin<agency_form_number_rule>;
  removeAgency_form_number_rule!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  removeAgency_form_number_rules!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  hasAgency_form_number_rule!: Sequelize.HasManyHasAssociationMixin<agency_form_number_rule, agency_form_number_ruleId>;
  hasAgency_form_number_rules!: Sequelize.HasManyHasAssociationsMixin<agency_form_number_rule, agency_form_number_ruleId>;
  countAgency_form_number_rules!: Sequelize.HasManyCountAssociationsMixin;
  // agency_form_number_attribute belongsTo agency_form_number via agency_form_number_id
  agency_form_number!: agency_form_number;
  getAgency_form_number!: Sequelize.BelongsToGetAssociationMixin<agency_form_number>;
  setAgency_form_number!: Sequelize.BelongsToSetAssociationMixin<agency_form_number, agency_form_numberId>;
  createAgency_form_number!: Sequelize.BelongsToCreateAssociationMixin<agency_form_number>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_form_number_attribute {
    return sequelize.define('agency_form_number_attribute', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agency_form_number_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_form_numbers',
        key: 'id'
      }
    },
    agency_form_keyword_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agency_form_keyword_type',
        key: 'id'
      }
    },
    attribute: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    starts_after: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    word_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'agency_form_number_attribute',
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
        name: "agency_form_number_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_id" },
        ]
      },
      {
        name: "agency_form_keyword_type_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_keyword_type_id" },
        ]
      },
    ]
  }) as typeof agency_form_number_attribute;
  }
}
