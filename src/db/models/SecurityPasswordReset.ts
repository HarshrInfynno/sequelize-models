import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface security_password_resetAttributes {
  id: number;
  user_id: number;
  token: string;
  created_at?: Date;
  updated_at?: Date;
}

export type security_password_resetPk = "id";
export type security_password_resetId = security_password_reset[security_password_resetPk];
export type security_password_resetOptionalAttributes = "id" | "created_at" | "updated_at";
export type security_password_resetCreationAttributes = Optional<security_password_resetAttributes, security_password_resetOptionalAttributes>;

export class security_password_reset extends Model<security_password_resetAttributes, security_password_resetCreationAttributes> implements security_password_resetAttributes {
  id!: number;
  user_id!: number;
  token!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof security_password_reset {
    return sequelize.define('security_password_reset', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'security_password_resets',
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
        name: "security_password_resets_token_index",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  }) as typeof security_password_reset;
  }
}
