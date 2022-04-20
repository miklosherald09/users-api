# Getting Started with Users-API

## Available Scripts
### `npm install`

Install Dependencies

### `npm run migrate`

Migrates the mysql users table 

### `npm run seed`

Populate the users table
### `npm test`

Launches the user-api test 
### `npm start`

## `API Endpoints`

use BASIC AUTH for admin authentication<br />
username: admin<br />
password: 1234<br />

#### list all users
GET  http://localhost:3000/users/
<br />
#### create users
POST http://localhost:3000/users<br />
json payload: {"first_name":"Juan", "last_name": "Dela Cruz", "address": "nort east south", "post_code": 2313, "phone_no": 34343 "email": "mail@mail.com", "user_name": "John", "password": 1234}
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
