const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grouped_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_range: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    report_structure_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    },
    synopsis_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_system_level: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'app_reports',
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
  });
};
