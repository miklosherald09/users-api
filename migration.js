const db = require('./services/db');

async function migrate(){
 
  const res = await db.query(
    `CREATE TABLE users(
      id int(11) NOT NULL AUTO_INCREMENT,
      first_name varchar(50) DEFAULT NULL,
      last_name varchar(50) DEFAULT NULL,
      address varchar(100) DEFAULT NULL,
      post_code varchar(50) DEFAULT NULL,
      phone_no varchar(50) DEFAULT NULL,
      email varchar(100) DEFAULT NULL,
      user_name varchar(50) DEFAULT NULL,
      password varchar(1000) DEFAULT NULL,
      PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4`
  );

  return {
    res
  }
}

migrate().then((res) => {
  console.log("success creating users table")
  process.exit()
},
(err) => {
  console.log(err)
  process.exit()
})

