import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface security_user_activationAttributes {
  user_id: number;
  token: string;
  created_at?: Date;
  updated_at?: Date;
}

export type security_user_activationOptionalAttributes = "created_at" | "updated_at";
export type security_user_activationCreationAttributes = Optional<security_user_activationAttributes, security_user_activationOptionalAttributes>;

export class security_user_activation extends Model<security_user_activationAttributes, security_user_activationCreationAttributes> implements security_user_activationAttributes {
  user_id!: number;
  token!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof security_user_activation {
    return sequelize.define('security_user_activation', {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'security_user_activations',
    timestamps: true,
    indexes: [
      {
        name: "security_user_activations_token_index",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  }) as typeof security_user_activation;
  }
}
