import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CMPIdAttributes {
  id: number;
}

export type CMPIdPk = "id";
export type CMPIdId = CMPId[CMPIdPk];
export type CMPIdOptionalAttributes = "id";
export type CMPIdCreationAttributes = Optional<CMPIdAttributes, CMPIdOptionalAttributes>;

export class CMPId extends Model<CMPIdAttributes, CMPIdCreationAttributes> implements CMPIdAttributes {
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof CMPId {
    return sequelize.define('CMPId', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    tableName: 'CMPId',
    timestamps: false
  }) as typeof CMPId;
  }
}
