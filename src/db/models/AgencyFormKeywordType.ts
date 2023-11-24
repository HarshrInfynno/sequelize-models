import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_form_number_attribute, agency_form_number_attributeId } from './AgencyFormNumberAttribute';

export interface agency_form_keyword_typeAttributes {
  id: number;
  keyword_type: string;
  pre_notice_column?: string;
  is_required: number;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_form_keyword_typePk = "id";
export type agency_form_keyword_typeId = agency_form_keyword_type[agency_form_keyword_typePk];
export type agency_form_keyword_typeOptionalAttributes = "id" | "pre_notice_column" | "is_required" | "created_at" | "updated_at";
export type agency_form_keyword_typeCreationAttributes = Optional<agency_form_keyword_typeAttributes, agency_form_keyword_typeOptionalAttributes>;

export class agency_form_keyword_type extends Model<agency_form_keyword_typeAttributes, agency_form_keyword_typeCreationAttributes> implements agency_form_keyword_typeAttributes {
  id!: number;
  keyword_type!: string;
  pre_notice_column?: string;
  is_required!: number;
  created_at?: Date;
  updated_at?: Date;

  // agency_form_keyword_type hasMany agency_form_number_attribute via agency_form_keyword_type_id
  agency_form_number_attributes!: agency_form_number_attribute[];
  getAgency_form_number_attributes!: Sequelize.HasManyGetAssociationsMixin<agency_form_number_attribute>;
  setAgency_form_number_attributes!: Sequelize.HasManySetAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  addAgency_form_number_attribute!: Sequelize.HasManyAddAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  addAgency_form_number_attributes!: Sequelize.HasManyAddAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  createAgency_form_number_attribute!: Sequelize.HasManyCreateAssociationMixin<agency_form_number_attribute>;
  removeAgency_form_number_attribute!: Sequelize.HasManyRemoveAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  removeAgency_form_number_attributes!: Sequelize.HasManyRemoveAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  hasAgency_form_number_attribute!: Sequelize.HasManyHasAssociationMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  hasAgency_form_number_attributes!: Sequelize.HasManyHasAssociationsMixin<agency_form_number_attribute, agency_form_number_attributeId>;
  countAgency_form_number_attributes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_form_keyword_type {
    return sequelize.define('agency_form_keyword_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    keyword_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    pre_notice_column: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'agency_form_keyword_type',
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
  }) as typeof agency_form_keyword_type;
  }
}
