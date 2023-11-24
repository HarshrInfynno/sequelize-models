import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface security_roleAttributes {
  id: number;
  name: string;
  slug: string;
  created_at?: Date;
  updated_at?: Date;
}

export type security_rolePk = "id";
export type security_roleId = security_role[security_rolePk];
export type security_roleOptionalAttributes = "id" | "created_at" | "updated_at";
export type security_roleCreationAttributes = Optional<security_roleAttributes, security_roleOptionalAttributes>;

export class security_role extends Model<security_roleAttributes, security_roleCreationAttributes> implements security_roleAttributes {
  id!: number;
  name!: string;
  slug!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof security_role {
    return sequelize.define('security_role', {
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
    slug: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'security_roles',
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
  }) as typeof security_role;
  }
}
