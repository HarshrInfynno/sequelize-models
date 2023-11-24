import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TEMP_tbl_agency_data_detailAttributes {
  id: number;
  name: string;
  co_info_id?: number;
  maxid?: number;
  qty: number;
}

export type TEMP_tbl_agency_data_detailPk = "id";
export type TEMP_tbl_agency_data_detailId = TEMP_tbl_agency_data_detail[TEMP_tbl_agency_data_detailPk];
export type TEMP_tbl_agency_data_detailOptionalAttributes = "id" | "co_info_id" | "maxid" | "qty";
export type TEMP_tbl_agency_data_detailCreationAttributes = Optional<TEMP_tbl_agency_data_detailAttributes, TEMP_tbl_agency_data_detailOptionalAttributes>;

export class TEMP_tbl_agency_data_detail extends Model<TEMP_tbl_agency_data_detailAttributes, TEMP_tbl_agency_data_detailCreationAttributes> implements TEMP_tbl_agency_data_detailAttributes {
  id!: number;
  name!: string;
  co_info_id?: number;
  maxid?: number;
  qty!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TEMP_tbl_agency_data_detail {
    return sequelize.define('TEMP_tbl_agency_data_detail', {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    maxid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_agency_data_details',
    timestamps: false
  }) as typeof TEMP_tbl_agency_data_detail;
  }
}
