const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_guidance_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : co_info"
    },
    country_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_countries"
    },
    agency_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_info"
    },
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_department"
    },
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_local"
    },
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : agency_city"
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Reference : sys_workflow"
    },
    agency_form_number: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'sys_guidance_info',
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
