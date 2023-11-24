import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_agency, account_agencyId } from './AccountAgency';
import type { co_info, co_infoId } from './CoInfo';

export interface agency_deposit_frequency_listAttributes {
  id: number;
  co_info_id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type agency_deposit_frequency_listPk = "id";
export type agency_deposit_frequency_listId = agency_deposit_frequency_list[agency_deposit_frequency_listPk];
export type agency_deposit_frequency_listOptionalAttributes = "id" | "co_info_id" | "created_at" | "updated_at";
export type agency_deposit_frequency_listCreationAttributes = Optional<agency_deposit_frequency_listAttributes, agency_deposit_frequency_listOptionalAttributes>;

export class agency_deposit_frequency_list extends Model<agency_deposit_frequency_listAttributes, agency_deposit_frequency_listCreationAttributes> implements agency_deposit_frequency_listAttributes {
  id!: number;
  co_info_id?: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;

  // agency_deposit_frequency_list hasMany account_agency via agency_deposit_frequency_list_id
  account_agencies!: account_agency[];
  getAccount_agencies!: Sequelize.HasManyGetAssociationsMixin<account_agency>;
  setAccount_agencies!: Sequelize.HasManySetAssociationsMixin<account_agency, account_agencyId>;
  addAccount_agency!: Sequelize.HasManyAddAssociationMixin<account_agency, account_agencyId>;
  addAccount_agencies!: Sequelize.HasManyAddAssociationsMixin<account_agency, account_agencyId>;
  createAccount_agency!: Sequelize.HasManyCreateAssociationMixin<account_agency>;
  removeAccount_agency!: Sequelize.HasManyRemoveAssociationMixin<account_agency, account_agencyId>;
  removeAccount_agencies!: Sequelize.HasManyRemoveAssociationsMixin<account_agency, account_agencyId>;
  hasAccount_agency!: Sequelize.HasManyHasAssociationMixin<account_agency, account_agencyId>;
  hasAccount_agencies!: Sequelize.HasManyHasAssociationsMixin<account_agency, account_agencyId>;
  countAccount_agencies!: Sequelize.HasManyCountAssociationsMixin;
  // agency_deposit_frequency_list belongsTo co_info via co_info_id
  co_info!: co_info;
  getCo_info!: Sequelize.BelongsToGetAssociationMixin<co_info>;
  setCo_info!: Sequelize.BelongsToSetAssociationMixin<co_info, co_infoId>;
  createCo_info!: Sequelize.BelongsToCreateAssociationMixin<co_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_deposit_frequency_list {
    return sequelize.define('agency_deposit_frequency_list', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'agency_deposit_frequency_list',
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
        name: "agency_deposit_frequency_list_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  }) as typeof agency_deposit_frequency_list;
  }
}
