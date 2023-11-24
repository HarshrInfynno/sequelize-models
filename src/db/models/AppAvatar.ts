import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface app_avatarAttributes {
  id: number;
  name: string;
  avatar_url: string;
  created_at?: Date;
  updated_at?: Date;
}

export type app_avatarPk = "id";
export type app_avatarId = app_avatar[app_avatarPk];
export type app_avatarOptionalAttributes = "id" | "created_at" | "updated_at";
export type app_avatarCreationAttributes = Optional<app_avatarAttributes, app_avatarOptionalAttributes>;

export class app_avatar extends Model<app_avatarAttributes, app_avatarCreationAttributes> implements app_avatarAttributes {
  id!: number;
  name!: string;
  avatar_url!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof app_avatar {
    return sequelize.define('app_avatar', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avatar_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'app_avatars',
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
  }) as typeof app_avatar;
  }
}
