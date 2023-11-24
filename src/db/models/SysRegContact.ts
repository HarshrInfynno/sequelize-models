import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sys_reg_contactAttributes {
  id: number;
  first_name: string;
  last_name: string;
  owner_percent?: string;
  co_info_id: number;
  email: string;
  address?: string;
  phone?: string;
  ssn?: string;
  ssn_last_four?: string;
  dob?: string;
  agent_id?: string;
  state?: string;
  title?: string;
  start_date?: string;
  end_date?: string;
  type: string;
  created_at?: Date;
  updated_at?: Date;
  created_by: number;
  updated_by?: number;
}

export type sys_reg_contactPk = "id";
export type sys_reg_contactId = sys_reg_contact[sys_reg_contactPk];
export type sys_reg_contactOptionalAttributes = "id" | "owner_percent" | "address" | "phone" | "ssn" | "ssn_last_four" | "dob" | "agent_id" | "state" | "title" | "start_date" | "end_date" | "created_at" | "updated_at" | "updated_by";
export type sys_reg_contactCreationAttributes = Optional<sys_reg_contactAttributes, sys_reg_contactOptionalAttributes>;

export class sys_reg_contact extends Model<sys_reg_contactAttributes, sys_reg_contactCreationAttributes> implements sys_reg_contactAttributes {
  id!: number;
  first_name!: string;
  last_name!: string;
  owner_percent?: string;
  co_info_id!: number;
  email!: string;
  address?: string;
  phone?: string;
  ssn?: string;
  ssn_last_four?: string;
  dob?: string;
  agent_id?: string;
  state?: string;
  title?: string;
  start_date?: string;
  end_date?: string;
  type!: string;
  created_at?: Date;
  updated_at?: Date;
  created_by!: number;
  updated_by?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof sys_reg_contact {
    return sequelize.define('sys_reg_contact', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner_percent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ssn: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ssn_last_four: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'sys_reg_contact',
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
  }) as typeof sys_reg_contact;
  }
}
