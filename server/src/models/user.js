module.exports = (sequelize, DataTypes) => {
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Not nullable for MySQL (unlike SQLite)
      unique: true,
      validate: {
        isEmail: true // Optional validation for email format
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false // Not nullable for MySQL (unlike SQLite)
    }
  })
}
