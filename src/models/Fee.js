const { Model, DataTypes } = require('sequelize');

class Fee extends Model {
  static init(connection) {
    super.init(
      {
        description: DataTypes.STRING,
        value: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'fees',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Payment, { foreignKey: 'fee_id', as: 'payments' });
  }
}

module.exports = Fee;
