import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_tbl_account_data_details_46Attributes {
  id: number;
  account_id?: string;
  ants_client_id?: number;
  name?: string;
  co_info_id: number;
  maxid?: number;
  minid?: number;
  qty: number;
}

export type TEMP_tbl_account_data_details_46Pk = "id";
export type TEMP_tbl_account_data_details_46Id = TEMP_tbl_account_data_details_46[TEMP_tbl_account_data_details_46Pk];
export type TEMP_tbl_account_data_details_46OptionalAttributes = "id" | "account_id" | "ants_client_id" | "name" | "maxid" | "minid" | "qty";
export type TEMP_tbl_account_data_details_46CreationAttributes = Optional<TEMP_tbl_account_data_details_46Attributes, TEMP_tbl_account_data_details_46OptionalAttributes>;

export class TEMP_tbl_account_data_details_46 extends Model<TEMP_tbl_account_data_details_46Attributes, TEMP_tbl_account_data_details_46CreationAttributes> implements TEMP_tbl_account_data_details_46Attributes {
  id!: number;
  account_id?: string;
  ants_client_id?: number;
  name?: string;
  co_info_id!: number;
  maxid?: number;
  minid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_tbl_account_data_details_46 {
    return sequelize.define('TEMP_tbl_account_data_details_46', {
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
    ants_client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    minid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_account_data_details_46',
    timestamps: false
  }) as typeof TEMP_tbl_account_data_details_46;
  }
}
