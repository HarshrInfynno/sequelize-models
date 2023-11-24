const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_department_vendor', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'agency_department_vendors',
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
