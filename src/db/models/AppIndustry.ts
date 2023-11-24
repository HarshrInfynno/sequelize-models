import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { co_info, co_infoId } from './CoInfo';

export interface app_industryAttributes {
  id: number;
  name: string;
}

export type app_industryPk = "id";
export type app_industryId = app_industry[app_industryPk];
export type app_industryOptionalAttributes = "id";
export type app_industryCreationAttributes = Optional<app_industryAttributes, app_industryOptionalAttributes>;

export class app_industry extends Model<app_industryAttributes, app_industryCreationAttributes> implements app_industryAttributes {
  id!: number;
  name!: string;

  // app_industry hasMany co_info via industry
  co_infos!: co_info[];
  getCo_infos!: Sequelize.HasManyGetAssociationsMixin<co_info>;
  setCo_infos!: Sequelize.HasManySetAssociationsMixin<co_info, co_infoId>;
  addCo_info!: Sequelize.HasManyAddAssociationMixin<co_info, co_infoId>;
  addCo_infos!: Sequelize.HasManyAddAssociationsMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.HasManyCreateAssociationMixin<co_info>;
  removeCo_info!: Sequelize.HasManyRemoveAssociationMixin<co_info, co_infoId>;
  removeCo_infos!: Sequelize.HasManyRemoveAssociationsMixin<co_info, co_infoId>;
  hasCo_info!: Sequelize.HasManyHasAssociationMixin<co_info, co_infoId>;
  hasCo_infos!: Sequelize.HasManyHasAssociationsMixin<co_info, co_infoId>;
  countCo_infos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof app_industry {
    return sequelize.define('app_industry', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'app_industries',
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
  }) as typeof app_industry;
  }
}
