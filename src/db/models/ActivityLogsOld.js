const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity_logs_old', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    activity_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_module: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_model_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    activity_parent_module: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_parent_model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_parent_model_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    old: {
      type: DataTypes.JSON,
      allowNull: true
    },
    new: {
      type: DataTypes.JSON,
      allowNull: true
    },
    activity_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'activity_logs_old',
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
