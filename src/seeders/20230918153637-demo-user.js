'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'John Doe1',
        username: 'fake1',
        password: '111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'John Doe2',
        username: 'fake2',
        password: '222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'John Doe3',
        username: 'fake3',
        password: '333',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('People', null, {})
  }
}
