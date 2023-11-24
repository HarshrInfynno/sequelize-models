const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ants_client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dba: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    address_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    account_location_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'account_location_list',
        key: 'id'
      }
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fed_id: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "1900-01-01"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2100-12-31"
    },
    sys_csr_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_csr_list',
        key: 'id'
      }
    },
    tax_service_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "1900-01-01"
    },
    tax_service_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2100-12-31"
    },
    sys_tax_service_level_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_tax_service_level_list',
        key: 'id'
      }
    },
    sys_priority_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_priority_list',
        key: 'id'
      }
    },
    sys_user_group_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_user_group_list',
        key: 'id'
      }
    },
    estimated_annual_revenue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_set: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    account_expected_revenue: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    aos_option_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aos_option_4: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    aos_date_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aos_date_4: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    account_logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assignment_1: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    assignment_2: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    internal_id_1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    company_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stock_traded: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    recently_acquired: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    incorporated_state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    formerly_known_as: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    naics_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc5: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'account_info',
    hasTrigger: true,
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
      {
        name: "account_info_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
      {
        name: "account_info_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "account_info_account_location_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_location_list_id" },
        ]
      },
      {
        name: "account_info_sys_tax_service_level_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_tax_service_level_list_id" },
        ]
      },
      {
        name: "account_info_sys_priority_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_priority_list_id" },
        ]
      },
      {
        name: "account_info_sys_user_group_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_user_group_list_id" },
        ]
      },
      {
        name: "account_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "account_info_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "account_info_account_id_index",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "account_info_assignment_2_foreign",
        using: "BTREE",
        fields: [
          { name: "assignment_2" },
        ]
      },
      {
        name: "account_info_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "account_info_fed_id_index",
        using: "BTREE",
        fields: [
          { name: "fed_id", length: 768 },
        ]
      },
      {
        name: "account_info_assignment_1_foreign",
        using: "BTREE",
        fields: [
          { name: "assignment_1" },
        ]
      },
      {
        name: "account_info_sys_csr_list_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_csr_list_id" },
        ]
      },
    ]
  });
};
