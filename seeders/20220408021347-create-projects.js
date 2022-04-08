module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkInsert('Projects', [
        {
          name: 'Project 1',
          description: 'Project 1 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 2',
          description: 'Project 2 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 3',
          description: 'Project 3 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {}),
      queryInterface.bulkInsert('user_projects', [
        {
          userId: 1,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {})
    ])




  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};