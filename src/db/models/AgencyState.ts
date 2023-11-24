import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agency_country, agency_countryId } from './AgencyCountry';

export interface agency_stateAttributes {
  id: number;
  country: number;
  name: string;
  code: string;
}

export type agency_statePk = "id";
export type agency_stateId = agency_state[agency_statePk];
export type agency_stateOptionalAttributes = "id";
export type agency_stateCreationAttributes = Optional<agency_stateAttributes, agency_stateOptionalAttributes>;

export class agency_state extends Model<agency_stateAttributes, agency_stateCreationAttributes> implements agency_stateAttributes {
  id!: number;
  country!: number;
  name!: string;
  code!: string;

  // agency_state belongsTo agency_country via country
  country_agency_country!: agency_country;
  getCountry_agency_country!: Sequelize.BelongsToGetAssociationMixin<agency_country>;
  setCountry_agency_country!: Sequelize.BelongsToSetAssociationMixin<agency_country, agency_countryId>;
  createCountry_agency_country!: Sequelize.BelongsToCreateAssociationMixin<agency_country>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agency_state {
    return sequelize.define('agency_state', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'agency_states',
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
        name: "agency_states_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
    ]
  }) as typeof agency_state;
  }
}
