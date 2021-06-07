const { Model, DataTypes } = require('sequelize');

class Payment extends Model {
  static init(connection) {
    super.init(
      {
        student_id: DataTypes.INTEGER,
        fee_id: DataTypes.INTEGER,
        value: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'payments',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'students' });
    this.belongsTo(models.Fee, { foreignKey: 'fee_id', as: 'fees' });
  }
}

module.exports = Payment;
