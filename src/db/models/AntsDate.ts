import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ants_dateAttributes {
  id: number;
  notice_id: number;
  donedatetime: Date;
}

export type ants_datePk = "id";
export type ants_dateId = ants_date[ants_datePk];
export type ants_dateOptionalAttributes = "id";
export type ants_dateCreationAttributes = Optional<ants_dateAttributes, ants_dateOptionalAttributes>;

export class ants_date extends Model<ants_dateAttributes, ants_dateCreationAttributes> implements ants_dateAttributes {
  id!: number;
  notice_id!: number;
  donedatetime!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ants_date {
    return sequelize.define('ants_date', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    notice_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donedatetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ants_date',
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
  }) as typeof ants_date;
  }
}
