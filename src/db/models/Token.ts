import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tokenAttributes {
  id: string;
  type: string;
  data: object;
  created_at: Date;
  updated_at: Date;
}

export type tokenPk = "id";
export type tokenId = token[tokenPk];
export type tokenOptionalAttributes = "created_at" | "updated_at";
export type tokenCreationAttributes = Optional<tokenAttributes, tokenOptionalAttributes>;

export class token extends Model<tokenAttributes, tokenCreationAttributes> implements tokenAttributes {
  id!: string;
  type!: string;
  data!: object;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof token {
    return sequelize.define('token', {
    id: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'tokens',
    timestamps: true,
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
  }) as typeof token;
  }
}
