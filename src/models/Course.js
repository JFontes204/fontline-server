const { Model, DataTypes } = require('sequelize');

class Course extends Model {
  static init(connection) {
    super.init(
      {
        description: DataTypes.STRING,
        state: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: 'courses',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Certificate, { foreignKey: 'course_id', as: 'certificates' });
    this.belongsToMany(models.Student, {
      foreignKey: 'course_id',
      through: 'student_courses',
      as: 'students',
    });
  }
}

module.exports = Course;
