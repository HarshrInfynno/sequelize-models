import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_city_link, agency_city_linkId } from './AgencyCityLink';
import type { agency_department_link, agency_department_linkId } from './AgencyDepartmentLink';
import type { agency_local_link, agency_local_linkId } from './AgencyLocalLink';

export interface agency_link_typeAttributes {
  id: number;
  name: string;
}

export type agency_link_typePk = "id";
export type agency_link_typeId = agency_link_type[agency_link_typePk];
export type agency_link_typeOptionalAttributes = "id";
export type agency_link_typeCreationAttributes = Optional<agency_link_typeAttributes, agency_link_typeOptionalAttributes>;

export class agency_link_type extends Model<agency_link_typeAttributes, agency_link_typeCreationAttributes> implements agency_link_typeAttributes {
  id!: number;
  name!: string;

  // agency_link_type hasMany agency_city_link via agency_link_type_id
  agency_city_links!: agency_city_link[];
  getAgency_city_links!: Sequelize.HasManyGetAssociationsMixin<agency_city_link>;
  setAgency_city_links!: Sequelize.HasManySetAssociationsMixin<agency_city_link, agency_city_linkId>;
  addAgency_city_link!: Sequelize.HasManyAddAssociationMixin<agency_city_link, agency_city_linkId>;
  addAgency_city_links!: Sequelize.HasManyAddAssociationsMixin<agency_city_link, agency_city_linkId>;
  createAgency_city_link!: Sequelize.HasManyCreateAssociationMixin<agency_city_link>;
  removeAgency_city_link!: Sequelize.HasManyRemoveAssociationMixin<agency_city_link, agency_city_linkId>;
  removeAgency_city_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_city_link, agency_city_linkId>;
  hasAgency_city_link!: Sequelize.HasManyHasAssociationMixin<agency_city_link, agency_city_linkId>;
  hasAgency_city_links!: Sequelize.HasManyHasAssociationsMixin<agency_city_link, agency_city_linkId>;
  countAgency_city_links!: Sequelize.HasManyCountAssociationsMixin;
  // agency_link_type hasMany agency_department_link via agency_link_type_id
  agency_department_links!: agency_department_link[];
  getAgency_department_links!: Sequelize.HasManyGetAssociationsMixin<agency_department_link>;
  setAgency_department_links!: Sequelize.HasManySetAssociationsMixin<agency_department_link, agency_department_linkId>;
  addAgency_department_link!: Sequelize.HasManyAddAssociationMixin<agency_department_link, agency_department_linkId>;
  addAgency_department_links!: Sequelize.HasManyAddAssociationsMixin<agency_department_link, agency_department_linkId>;
  createAgency_department_link!: Sequelize.HasManyCreateAssociationMixin<agency_department_link>;
  removeAgency_department_link!: Sequelize.HasManyRemoveAssociationMixin<agency_department_link, agency_department_linkId>;
  removeAgency_department_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_department_link, agency_department_linkId>;
  hasAgency_department_link!: Sequelize.HasManyHasAssociationMixin<agency_department_link, agency_department_linkId>;
  hasAgency_department_links!: Sequelize.HasManyHasAssociationsMixin<agency_department_link, agency_department_linkId>;
  countAgency_department_links!: Sequelize.HasManyCountAssociationsMixin;
  // agency_link_type hasMany agency_local_link via agency_link_type_id
  agency_local_links!: agency_local_link[];
  getAgency_local_links!: Sequelize.HasManyGetAssociationsMixin<agency_local_link>;
  setAgency_local_links!: Sequelize.HasManySetAssociationsMixin<agency_local_link, agency_local_linkId>;
  addAgency_local_link!: Sequelize.HasManyAddAssociationMixin<agency_local_link, agency_local_linkId>;
  addAgency_local_links!: Sequelize.HasManyAddAssociationsMixin<agency_local_link, agency_local_linkId>;
  createAgency_local_link!: Sequelize.HasManyCreateAssociationMixin<agency_local_link>;
  removeAgency_local_link!: Sequelize.HasManyRemoveAssociationMixin<agency_local_link, agency_local_linkId>;
  removeAgency_local_links!: Sequelize.HasManyRemoveAssociationsMixin<agency_local_link, agency_local_linkId>;
  hasAgency_local_link!: Sequelize.HasManyHasAssociationMixin<agency_local_link, agency_local_linkId>;
  hasAgency_local_links!: Sequelize.HasManyHasAssociationsMixin<agency_local_link, agency_local_linkId>;
  countAgency_local_links!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_link_type {
    return sequelize.define('agency_link_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'agency_link_type',
    timestamps: false,
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
  }) as typeof agency_link_type;
  }
}
