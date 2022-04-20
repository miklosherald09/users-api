# Getting Started with Users-API


### `npm install`

Install Dependencies

### `npm run migrate`

npm migrate: Migrates the mysql users table 

### `npm run seed`

npm migrate: Populate the users table
### `npm test`

Launches the user-api test 
### `npm start`

### `API Endpoints`

use BASIC AUTH for admin authentication
username: admin
passowrd: 1234

#### list all users
GET  http://localhost:3000/users/
    
#### create users
POST http://localhost:3000/users
json payload: {"first_name":"22222", "last_name": 2011, "address": 13, "post_code": 20, "phone_no": 25 "email": "mik@g.com", "user_name": "mik", "password": 1234}
#### update user
PUT http://localhost:3000/users/{id}
   
#### delete user
DELETE http://localhost:3000/users/{id}
    
#### bulk delete users
DELETE http://localhost:3000/users/delete   
json payload: [21, 22, 24]


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

