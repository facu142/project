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
        {
          name: 'Project 4',
          description: 'Project 4 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 5',
          description: 'Project 5 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 6',
          description: 'Project 6 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 7',
          description: 'Project 7 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 8',
          description: 'Project 8 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 9',
          description: 'Project 9 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 10',
          description: 'Project 10 description',
          status: true,
          projectManagerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Project 11',
          description: 'Project 11 description',
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