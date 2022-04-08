module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id:{ 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    projectManagerId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.User, { as: "users", through: "user_projects", foreignKey: "projectId" });
  };
  return Project;
};

