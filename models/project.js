module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status:{ type: DataTypes.BOOLEAN, defaultValue: true},
    projectManagerId: DataTypes.INTEGER
  }, {});
  Project.associate = function (models) {
    Project.belongsToMany(models.User, {
      as: "users",
      through: "user_projects",
      foreignKey: "projectId",
      otherKey: "userId",
      foreignKeyConstraint: true,
      onDelete: 'cascade'
    });
  };
  return Project;
};

