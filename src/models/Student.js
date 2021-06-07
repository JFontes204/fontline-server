const { Model, DataTypes } = require('sequelize');

class Student extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        telefone1: DataTypes.INTEGER,
        telefone2: DataTypes.INTEGER,
        birthday: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'students',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Payment, { foreignKey: 'student_id', as: 'payments' });
    this.hasMany(models.Certificate, { foreignKey: 'student_id', as: 'certificates' });
    this.belongsToMany(models.Course, {
      foreignKey: 'student_id',
      through: 'student_courses',
      as: 'courses',
    });
  }
}

module.exports = Student;
