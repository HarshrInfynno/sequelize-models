const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    log_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    import_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'import_logs',
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
