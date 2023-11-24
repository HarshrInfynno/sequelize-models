import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface oauth_auth_codeAttributes {
  id: string;
  user_id: number;
  client_id: number;
  scopes?: string;
  revoked: number;
  expires_at?: Date;
}

export type oauth_auth_codePk = "id";
export type oauth_auth_codeId = oauth_auth_code[oauth_auth_codePk];
export type oauth_auth_codeOptionalAttributes = "scopes" | "expires_at";
export type oauth_auth_codeCreationAttributes = Optional<oauth_auth_codeAttributes, oauth_auth_codeOptionalAttributes>;

export class oauth_auth_code extends Model<oauth_auth_codeAttributes, oauth_auth_codeCreationAttributes> implements oauth_auth_codeAttributes {
  id!: string;
  user_id!: number;
  client_id!: number;
  scopes?: string;
  revoked!: number;
  expires_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof oauth_auth_code {
    return sequelize.define('oauth_auth_code', {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    tableName: 'oauth_auth_codes',
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
      {
        name: "oauth_auth_codes_user_id_index",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof oauth_auth_code;
  }
}
