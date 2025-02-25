
PER SCHOLAS - CAPSTONE

Project Name        : Back Lot
Project Description : Dealer or Auction Inventory Management Application - Backend server

Description: Back Lot inventory management system is a full-stack application. The backend applicaiton has been developed using ExpressJS and Mongoose. The fronend application has been developed using React. 

Important: dotenv file and node package have to be install/Created before running the application.

GitHub Links:
BackEnd : https://github.com/Alanimustafa/dot-auction-BK-end
FrontEnd: https://github.com/Alanimustafa/dot-auction-FR-end

Wireframe Link: 
https://xd.adobe.com/view/3a655d4f-7202-4195-b016-4ceca2c647cf-6f36/


Dependencies:
1. Express.
2. Nodemon.
3. Mongoose.
4. DotEnv.

Database: This application is using MongoDB database which has been create for this project. 

BackEnd Server:
The server has been developed using ExpressJS and Mongoose for the database access.

BackEnd Routes: (CRUD)
NewVehicle.JS --> Router access to CREATE new Vehicle in the MongoDB database.
HomePage.JS --> Router access to READ Vehicle(s) information from the MongoDB database.
UpdateVehicle.JS --> Router access to UPDATE Vehicle information in the MongoDB database.
DeleteVehicle.JS --> Router access to DELETE Vehicle information in the MongoDB database.

Database document schema:
The document schema has been created in VehicleSchema.JS in the Models folder.


FrontEnd Pages:
The frontend application has been developped in React. The frontend pages:
- HomePage (Home.JSX) --> Displays All Vehicles in the inventory.
- Sedans (Sedans.JSX) --> Displays Sedan Vehicles in the inventory.
- Sedans (Compacts.JSX) --> Displays Compact Vehicles in the inventory.
- Sedans (Suvs.JSX) --> Displays SUV Vehicles in the inventory.
- Sedans (Vans.JSX) --> Displays VAN Vehicles in the inventory.
- Sedans (Trucks.JSX) --> Displays TRUCKS in the inventory.
- Sedans (Inventory.JSX) --> Displays the inventory management for each vehicle. User can manage each vehicle and create New Vehicle to be added to the inventory.
- Sedans (Delete.JSX) --> Displays Removing Vehicles prompt for the selected vehicle.

Styles:
All Pages are sharing one main Page.CSS file for styling. For the components, each component has a style sheet has been stored in Component/Styles folder.


Future features:
- The backend server will have a user account genration model. This model will allow the admins from creating users accounts with passwords.
- Users (employees) in the front end application will be able to Add/Remove/Update vehicles in the database.
- Inventory History. This feature will remove any deleted vehicles to another database which will be designed for saving all removed vehicles from the main databas.
- Comments on each vehicle. This feature will allow the users to read any notes on the selected vehicle.
