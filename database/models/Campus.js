/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://img2.storyblok.com/fit-in/1200x630/f/64062/992x736/b1f6d2c25f/campus-a1.jpg",
  }
});

// Export the campus model
module.exports = Campus;