"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("product_options", {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
         },
         product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: "products",
               key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
         },
         title: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         shape: {
            type: Sequelize.ENUM("square", "circle"),
            allowNull: true,
            defaultValue: "square",
         },
         radius: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0,
         },
         type: {
            type: Sequelize.ENUM("text", "color"),
            allowNull: true,
            defaultValue: "text",
         },
         values: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn("NOW"),
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn("NOW"),
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("product_options");
   },
};
