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

use BASIC AUTH for admin authentication<br />
username: admin<br />
password: 1234<br />

#### list all users
GET  http://localhost:3000/users/
<br />
#### create users
POST http://localhost:3000/users
json payload: {"first_name":"22222", "last_name": 2011, "address": 13, "post_code": 20, "phone_no": 25 "email": "mik@g.com", "user_name": "mik", "password": 1234}
<br />
#### update user
PUT http://localhost:3000/users/{id}
<br />   
#### delete user
DELETE http://localhost:3000/users/{id}
<br />
#### bulk delete users
DELETE http://localhost:3000/users/delete   
json payload: [21, 22, 24]
