import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface accounts_data_connectPay_datumAttributes {
  account_id?: string;
  name?: string;
  non_zero_id: number;
  zero_id?: number;
}

export type accounts_data_connectPay_datumOptionalAttributes = "account_id" | "name" | "non_zero_id" | "zero_id";
export type accounts_data_connectPay_datumCreationAttributes = Optional<accounts_data_connectPay_datumAttributes, accounts_data_connectPay_datumOptionalAttributes>;

export class accounts_data_connectPay_datum extends Model<accounts_data_connectPay_datumAttributes, accounts_data_connectPay_datumCreationAttributes> implements accounts_data_connectPay_datumAttributes {
  account_id?: string;
  name?: string;
  non_zero_id!: number;
  zero_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof accounts_data_connectPay_datum {
    return sequelize.define('accounts_data_connectPay_datum', {
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    non_zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_data',
    timestamps: false
  }) as typeof accounts_data_connectPay_datum;
  }
}
