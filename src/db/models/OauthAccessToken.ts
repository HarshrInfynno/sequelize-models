import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_access_tokenAttributes {
  id: string;
  user_id?: number;
  client_id: number;
  name?: string;
  scopes?: string;
  revoked: number;
  created_at?: Date;
  updated_at?: Date;
  expires_at?: Date;
}

export type oauth_access_tokenPk = "id";
export type oauth_access_tokenId = oauth_access_token[oauth_access_tokenPk];
export type oauth_access_tokenOptionalAttributes = "user_id" | "name" | "scopes" | "created_at" | "updated_at" | "expires_at";
export type oauth_access_tokenCreationAttributes = Optional<oauth_access_tokenAttributes, oauth_access_tokenOptionalAttributes>;

export class oauth_access_token extends Model<oauth_access_tokenAttributes, oauth_access_tokenCreationAttributes> implements oauth_access_tokenAttributes {
  id!: string;
  user_id?: number;
  client_id!: number;
  name?: string;
  scopes?: string;
  revoked!: number;
  created_at?: Date;
  updated_at?: Date;
  expires_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_access_token {
    return sequelize.define('oauth_access_token', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scopes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    revoked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'oauth_access_tokens',
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
        name: "oauth_access_tokens_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof oauth_access_token;
  }
}
