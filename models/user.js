module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Project, {
      as: "projects",
      through: "user_projects",
      foreignKey: "userId",
      otherKey: "projectId",
      foreignKeyConstraint: true,
      onDelete: 'cascade'
    });
  };
  return User;
};