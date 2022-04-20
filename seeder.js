const faker = require('faker');
const Seeder = require('mysql-db-seed').Seeder;
const config = require('./config');


const seed = new Seeder(
  10,
  config.db.host,
  config.db.user,
  config.db.password,
  config.db.database
);

(async () => {
  await seed.seed(
    10,
    'users',
    {
        first_name: () => faker.name.firstName(),
        last_name: () => faker.name.lastName(),
        address: () => faker.address.streetAddress(),
        post_code: () => faker.address.zipCodeByState(),
        phone_no: () => faker.phone.phoneNumberFormat(),
        email: () => `${faker.internet.userName().toLocaleLowerCase()}@example.com`,
        user_name: () => faker.internet.userName(),
        password: () =>  faker.random.alphaNumeric(10),
    }
  )
  seed.exit();
  process.exit();
})();