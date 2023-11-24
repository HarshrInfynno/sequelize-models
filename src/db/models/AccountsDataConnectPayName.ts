import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface accounts_data_connectPay_nameAttributes {
  name?: string;
}

export type accounts_data_connectPay_nameOptionalAttributes = "name";
export type accounts_data_connectPay_nameCreationAttributes = Optional<accounts_data_connectPay_nameAttributes, accounts_data_connectPay_nameOptionalAttributes>;

export class accounts_data_connectPay_name extends Model<accounts_data_connectPay_nameAttributes, accounts_data_connectPay_nameCreationAttributes> implements accounts_data_connectPay_nameAttributes {
  name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof accounts_data_connectPay_name {
    return sequelize.define('accounts_data_connectPay_name', {
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_name',
    timestamps: false
  }) as typeof accounts_data_connectPay_name;
  }
}
