import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_user_sessionAttributes {
  id: string;
  co_info_id: number;
  shadow_app_user_info_id?: number;
  app_user_info_id: number;
  timestamp: Date;
  ip: string;
  from_desktop_utility?: number;
}

export type app_user_sessionPk = "id";
export type app_user_sessionId = app_user_session[app_user_sessionPk];
export type app_user_sessionOptionalAttributes = "shadow_app_user_info_id" | "from_desktop_utility";
export type app_user_sessionCreationAttributes = Optional<app_user_sessionAttributes, app_user_sessionOptionalAttributes>;

export class app_user_session extends Model<app_user_sessionAttributes, app_user_sessionCreationAttributes> implements app_user_sessionAttributes {
  id!: string;
  co_info_id!: number;
  shadow_app_user_info_id?: number;
  app_user_info_id!: number;
  timestamp!: Date;
  ip!: string;
  from_desktop_utility?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_user_session {
    return sequelize.define('app_user_session', {
    id: {
      type: DataTypes.STRING(127),
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    shadow_app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
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
    },
    from_desktop_utility: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'app_user_sessions',
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
  }) as typeof app_user_session;
  }
}
