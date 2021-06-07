const { Model, DataTypes } = require('sequelize');

class Certificate extends Model {
  static init(connection) {
    super.init(
      {
        student_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'certificates',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'students' });
    this.belongsTo(models.Course, { foreignKey: 'course_id', as: 'courses' });
  }
}

module.exports = Certificate;
