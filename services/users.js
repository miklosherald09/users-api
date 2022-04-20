const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getAll(){
 
  const rows = await db.query(
    `SELECT * FROM users;`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(params){


  const result = await db.query(
    `INSERT INTO users(
        first_name,
        last_name,
        address,
        post_code,
        phone_no,
        email,
        user_name,
        password) VALUES
    ('${params.first_name}',
    '${params.last_name}',
    '${params.address}',
    '${params.post_code}',
    '${params.phone_no}',
    '${params.email}',
    '${params.user_name}',
    '${params.password}'
    )`
  );

  let message = 'Error in creating users';

  if (result.affectedRows) {
    message = 'users created successfully';
  }

  return {message};
}


async function update(id, params){
  const result = await db.query(
    `UPDATE users
     SET
        first_name='${params.first_name}', 
        last_name='${params.last_name}', 
        address='${params.address}', 
        post_code='${params.post_code}', 
        phone_no='${params.phone_no}', 
        email='${params.email}', 
        user_name='${params.user_name}', 
        password='${params.password}' 
    WHERE id='${id}'` 
  );

  let message = 'Error in updating users';

  if (result.affectedRows) {
    message = 'users updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM users WHERE id=${id}`
  );

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'user deleted successfully';
  }

  return {message};
}

module.exports = {
  create,
  update,
  getAll,
  remove
}