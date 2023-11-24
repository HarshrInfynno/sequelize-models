import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_clientAttributes {
  id: number;
  user_id?: number;
  name: string;
  secret?: string;
  redirect: string;
  personal_access_client: number;
  password_client: number;
  revoked: number;
  created_at?: Date;
  updated_at?: Date;
}

export type oauth_clientPk = "id";
export type oauth_clientId = oauth_client[oauth_clientPk];
export type oauth_clientOptionalAttributes = "id" | "user_id" | "secret" | "created_at" | "updated_at";
export type oauth_clientCreationAttributes = Optional<oauth_clientAttributes, oauth_clientOptionalAttributes>;

export class oauth_client extends Model<oauth_clientAttributes, oauth_clientCreationAttributes> implements oauth_clientAttributes {
  id!: number;
  user_id?: number;
  name!: string;
  secret?: string;
  redirect!: string;
  personal_access_client!: number;
  password_client!: number;
  revoked!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_client {
    return sequelize.define('oauth_client', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    redirect: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    personal_access_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    revoked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'oauth_clients',
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
      {
        name: "oauth_clients_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof oauth_client;
  }
}
