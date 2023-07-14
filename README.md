# Object-Relational Mapping E-commerce-Back-End

## Description
The aim of this project was to create the back end for an e-commerec website so that the company can easily view, create, update, and delete their categories, products and product tags in their database. Using Insomnia you are able to easily edit your database to your needs.

The features used throughout this project are:

- Javascriprt
- MySQL
- Node.js
- Express.js API
- Sequelize
- GET, POST, PUT, and DELETE routes
- Insomnia

## Installation

To use this application, type 'npm install mysql2 --save','npm install express', and 'npm install sequelize' in your terminal to install the necessary programs. You also need to install the MySQL package from the MySQL website.

## Usage

Once the necessary programs are installed, type 'mysql -u root -p' in your terminal and type in your MySQL password when prompted.
In the MySQL terminal use 'source db/schema.sql' to connect to the database. 
Then, in your main terminal, type 'npm run seed' to seed the data into your database. Next type 'node server.js' or 'nodemon server.js' to start the server.

Open Insomnia and use the relevant route endpoints in the code to GET, POST, PUT, and DELETE the data in the database. The data for each of these routes is then displayed in a formatted JSON.

The GET method is able to show all the categories, products and tags in the database, as well as specific data depending on the id you add at the end of the route endpont.
The POST method is able to create new categories, products, and tags in the database.
The PUT method is able to update the categories, products, and tags in the database.
The DELETE method allows you to delete categories, products and tags in the database.

Here is a video of the application running succesfully - https://drive.google.com/file/d/1rPC9l-bSupgNPVSOu4b4cMmmP3lan4VM/view

## Credits

N/A

## License

N/A






