import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface migrationAttributes {
  id: number;
  migration: string;
  batch: number;
}

export type migrationPk = "id";
export type migrationId = migration[migrationPk];
export type migrationOptionalAttributes = "id";
export type migrationCreationAttributes = Optional<migrationAttributes, migrationOptionalAttributes>;

export class migration extends Model<migrationAttributes, migrationCreationAttributes> implements migrationAttributes {
  id!: number;
  migration!: string;
  batch!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof migration {
    return sequelize.define('migration', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    migration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'migrations',
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
  }) as typeof migration;
  }
}
