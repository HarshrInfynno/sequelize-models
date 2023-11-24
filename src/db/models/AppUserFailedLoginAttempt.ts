import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_user_failed_login_attemptAttributes {
  id: string;
  app_user_info_id: number;
  timestamp: Date;
  ip: string;
}

export type app_user_failed_login_attemptPk = "id";
export type app_user_failed_login_attemptId = app_user_failed_login_attempt[app_user_failed_login_attemptPk];
export type app_user_failed_login_attemptCreationAttributes = app_user_failed_login_attemptAttributes;

export class app_user_failed_login_attempt extends Model<app_user_failed_login_attemptAttributes, app_user_failed_login_attemptCreationAttributes> implements app_user_failed_login_attemptAttributes {
  id!: string;
  app_user_info_id!: number;
  timestamp!: Date;
  ip!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_failed_login_attempt {
    return sequelize.define('app_user_failed_login_attempt', {
    id: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'app_user_failed_login_attempts',
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
  }) as typeof app_user_failed_login_attempt;
  }
}
