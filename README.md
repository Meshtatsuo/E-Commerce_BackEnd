# E-Commerce_BackEnd

Back end example for an e-commerce style site.

<b>Video Overview: </b> [link goes here]

## Technology Used
- Node.JS
- MySQL
- Sequelize
- ExpressJS

## Features
- Database storage for products, product categories, and tags
- Ability to add new, update existing, and delete categories, products, and tags

## Installation

1. Use ```npm i``` to install dependencies
2. Use the ```schema.sql``` file to construct the database in MySQL
3. Run ```npm start```. If ```sequelize.sync({ force: true })```, sequelize will initialize all the required tables for you. Recommended for first run.
4. After tables are initialized, you can run ```npm run seed``` if you wish to seed example data.
5. Be sure to change ```sequelize.sync({ force: true })``` to ```sequelize.sync({ force: false })``` in ```server.js``` after setup is complete so you don't lose any data you add to the database!