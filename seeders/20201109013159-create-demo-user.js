module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'admin1',
        lastName: 'uno',
        email: 'demo@demo.com',
        password: '$321!pass!123$',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'admin2',
        lastName: 'dos',
        email: 'admin2@demo.com',
        password: '$321!pass!123$',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};