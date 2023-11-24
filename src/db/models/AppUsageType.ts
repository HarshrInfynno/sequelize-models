import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_usage_type, account_usage_typeId } from './AccountUsageType';

export interface app_usage_typeAttributes {
  id: number;
  name: string;
}

export type app_usage_typePk = "id";
export type app_usage_typeId = app_usage_type[app_usage_typePk];
export type app_usage_typeOptionalAttributes = "id";
export type app_usage_typeCreationAttributes = Optional<app_usage_typeAttributes, app_usage_typeOptionalAttributes>;

export class app_usage_type extends Model<app_usage_typeAttributes, app_usage_typeCreationAttributes> implements app_usage_typeAttributes {
  id!: number;
  name!: string;

  // app_usage_type hasMany account_usage_type via app_usage_type_id
  account_usage_types!: account_usage_type[];
  getAccount_usage_types!: Sequelize.HasManyGetAssociationsMixin<account_usage_type>;
  setAccount_usage_types!: Sequelize.HasManySetAssociationsMixin<account_usage_type, account_usage_typeId>;
  addAccount_usage_type!: Sequelize.HasManyAddAssociationMixin<account_usage_type, account_usage_typeId>;
  addAccount_usage_types!: Sequelize.HasManyAddAssociationsMixin<account_usage_type, account_usage_typeId>;
  createAccount_usage_type!: Sequelize.HasManyCreateAssociationMixin<account_usage_type>;
  removeAccount_usage_type!: Sequelize.HasManyRemoveAssociationMixin<account_usage_type, account_usage_typeId>;
  removeAccount_usage_types!: Sequelize.HasManyRemoveAssociationsMixin<account_usage_type, account_usage_typeId>;
  hasAccount_usage_type!: Sequelize.HasManyHasAssociationMixin<account_usage_type, account_usage_typeId>;
  hasAccount_usage_types!: Sequelize.HasManyHasAssociationsMixin<account_usage_type, account_usage_typeId>;
  countAccount_usage_types!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof app_usage_type {
    return sequelize.define('app_usage_type', {
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
    tableName: 'app_usage_types',
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
  }) as typeof app_usage_type;
  }
}
