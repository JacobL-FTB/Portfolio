const { Client } = require('pg');
const client = new Client();

//====================================== SEED DATABASE FUNCTION START
const SeedDB = () => {
  // Creating Tables ===================
  console.log('Creating tables...');
  //Insert code here
  console.log('Finished creating tables');
  //====================================
  //|
  //|
  //|
  //Seeding Tables======================
  console.log('Seeding tables with data...');
  //Insert code here
  console.log('Finished seeding tables with data');
  //====================================
};
//====================================== SEED DATABASE FUNCTION END

//====================================== TEST DATABASE FUNCTION START
const TestDB = () => {
  // Testing DB Functions ==============
  console.log('Starting to test database...');
  //Insert code here
  console.log('Finished testing the database');
  //====================================
};
//====================================== TEST DATABASE FUNCTION END

UseEffect(() => {
  client.connect();
  SeedDB().then(() => {
    TestDB();
  });
  client.diconnect();
}, []);
