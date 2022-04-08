module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
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
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};