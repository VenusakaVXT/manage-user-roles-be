"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "venusversion1@gmail.com",
        username: "Venus version1",
        password: "111",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "venusversion2@gmail.com",
        username: "Venus version2",
        password: "222",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "venusversion3@gmail.com",
        username: "Venus version3",
        password: "333",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete("People", null, {})
  }
}