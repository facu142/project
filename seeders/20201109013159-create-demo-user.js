const { encrypt } = require('../helpers/encryptPassword');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'admin1',
        lastName: 'uno',
        email: 'admin1@test.com',
        password: await encrypt('admin1'),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'admin2',
        lastName: 'dos',
        email: 'admin2@test.com',
        password: await encrypt('admin2'),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'admin3',
        lastName: 'tres',
        email: 'admin3@test.com',
        password: await encrypt('admin3'),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'user1',
        lastName: 'uno',
        email: 'user1@test.com',
        password: await encrypt('user1'),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'user2',
        lastName: 'dos',
        email: 'user2@test.com',
        password: await encrypt('user2'),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};