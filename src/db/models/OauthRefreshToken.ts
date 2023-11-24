import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_refresh_tokenAttributes {
  id: string;
  access_token_id: string;
  revoked: number;
  expires_at?: Date;
}

export type oauth_refresh_tokenPk = "id";
export type oauth_refresh_tokenId = oauth_refresh_token[oauth_refresh_tokenPk];
export type oauth_refresh_tokenOptionalAttributes = "expires_at";
export type oauth_refresh_tokenCreationAttributes = Optional<oauth_refresh_tokenAttributes, oauth_refresh_tokenOptionalAttributes>;

export class oauth_refresh_token extends Model<oauth_refresh_tokenAttributes, oauth_refresh_tokenCreationAttributes> implements oauth_refresh_tokenAttributes {
  id!: string;
  access_token_id!: string;
  revoked!: number;
  expires_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_refresh_token {
    return sequelize.define('oauth_refresh_token', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    access_token_id: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'oauth_refresh_tokens',
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
  }) as typeof oauth_refresh_token;
  }
}
