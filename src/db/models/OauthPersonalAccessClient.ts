import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_personal_access_clientAttributes {
  id: number;
  client_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type oauth_personal_access_clientPk = "id";
export type oauth_personal_access_clientId = oauth_personal_access_client[oauth_personal_access_clientPk];
export type oauth_personal_access_clientOptionalAttributes = "id" | "created_at" | "updated_at";
export type oauth_personal_access_clientCreationAttributes = Optional<oauth_personal_access_clientAttributes, oauth_personal_access_clientOptionalAttributes>;

export class oauth_personal_access_client extends Model<oauth_personal_access_clientAttributes, oauth_personal_access_clientCreationAttributes> implements oauth_personal_access_clientAttributes {
  id!: number;
  client_id!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_personal_access_client {
    return sequelize.define('oauth_personal_access_client', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'oauth_personal_access_clients',
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
  }) as typeof oauth_personal_access_client;
  }
}
