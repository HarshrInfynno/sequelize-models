import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface accounts_data_connectPay_accountidAttributes {
  accountid?: string;
}

export type accounts_data_connectPay_accountidOptionalAttributes = "accountid";
export type accounts_data_connectPay_accountidCreationAttributes = Optional<accounts_data_connectPay_accountidAttributes, accounts_data_connectPay_accountidOptionalAttributes>;

export class accounts_data_connectPay_accountid extends Model<accounts_data_connectPay_accountidAttributes, accounts_data_connectPay_accountidCreationAttributes> implements accounts_data_connectPay_accountidAttributes {
  accountid?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof accounts_data_connectPay_accountid {
    return sequelize.define('accounts_data_connectPay_accountid', {
    accountid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_accountid',
    timestamps: false
  }) as typeof accounts_data_connectPay_accountid;
  }
}
