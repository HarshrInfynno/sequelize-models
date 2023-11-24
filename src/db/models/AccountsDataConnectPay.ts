import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface accounts_data_connectPayAttributes {
  id: number;
  account_id?: string;
  zero_id?: number;
  non_zero_id?: number;
  name?: string;
  maxid?: number;
  qty: number;
}

export type accounts_data_connectPayPk = "id";
export type accounts_data_connectPayId = accounts_data_connectPay[accounts_data_connectPayPk];
export type accounts_data_connectPayOptionalAttributes = "id" | "account_id" | "zero_id" | "non_zero_id" | "name" | "maxid" | "qty";
export type accounts_data_connectPayCreationAttributes = Optional<accounts_data_connectPayAttributes, accounts_data_connectPayOptionalAttributes>;

export class accounts_data_connectPay extends Model<accounts_data_connectPayAttributes, accounts_data_connectPayCreationAttributes> implements accounts_data_connectPayAttributes {
  id!: number;
  account_id?: string;
  zero_id?: number;
  non_zero_id?: number;
  name?: string;
  maxid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof accounts_data_connectPay {
    return sequelize.define('accounts_data_connectPay', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    non_zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'accounts_data_connectPay',
    timestamps: false
  }) as typeof accounts_data_connectPay;
  }
}
