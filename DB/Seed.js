const client = require('./Index');

const {
  AddNewProject,
  GetAllProjects,
  GetProjectById,
  RemoveProjectsById,
} = require('./SeedFunctions');

//====================================== SEED DATABASE FUNCTION START
const SeedDB = async () => {
  try {
    //Dropping Tables ====================
    console.log('Dropping Tables...');
    await client.query(`
  DROP TABLE IF EXISTS projects
  `);
    console.log('Finished Dropping Tables');
    //====================================
    // Creating Tables ===================
    console.log('Creating tables...');
    await client.query(`
  CREATE TABLE projects (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL
  );
  `);
    console.log('Finished creating tables');
  } catch (error) {
    console.error(error);
  }
  //====================================
  //|
  //|
  //|
  //Seeding Tables======================
  console.log('Seeding tables with data...');
  await AddNewProject('Connect Four', 'A Game');
  console.log('Finished seeding tables with data');
  //====================================
};
//====================================== SEED DATABASE FUNCTION END
//====================================== TEST DATABASE FUNCTION START
const TestDB = async () => {
  // Testing DB Functions ==============
  console.log('Starting to test database...');
  const NewProject = await AddNewProject('New Project', 'Test');
  console.log('Add Project To Database ', NewProject);
  const Projects = await GetAllProjects();
  console.log('All Projects: ', Projects);
  const SingleProject = await GetProjectById(1);
  console.log('Project with Id: 1 ', SingleProject);
  const RemoveProject = await RemoveProjectsById(2);
  console.log('Project With Id: 2 Removed');
  console.log('Finished testing the database');
  //====================================
};
//====================================== TEST DATABASE FUNCTION END

const RebuildDB = async () => {
  try {
    client.connect();
    await SeedDB();
  } catch (error) {
    console.error(error);
  }
};

RebuildDB()
  .then(TestDB)
  .catch(console.error)
  .finally(() => client.end());
