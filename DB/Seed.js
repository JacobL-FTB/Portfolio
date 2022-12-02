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
      description VARCHAR(1000) NOT NULL,
      projectimg VARCHAR(255) NOT NULL,
      codeimg VARCHAR(255) NOT NULL,
      codedisc VARCHAR(1000) NOT NULL
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
  await AddNewProject(
    'Connect Four',
    'This Connect Four project was one of the first projects I completed in the boot camp. For this project, I had to choose a game to attempt to create only using JavaScript, Html and CSS. The functionality of this game is exactly like the original Connect Four, but digitalized. With this being one of the first projects I worked on, my knowledge of javascript was very minimal at that time.',
    'https://i.ibb.co/z459pSx/Screen-Shot-2022-12-01-at-3-56-53-PM.png',
    'https://i.ibb.co/7nqk6xY/Screen-Shot-2022-12-01-at-4-19-00-PM.png',
    'This is the exact code I completed during that initial project. As you can see, the code is clunky, but it is functional. If I had to do this project again, I would rewrite the entire code in a more efficient and clear way. I would also change the way the code verifies if someone won, and how the code knows where in the grid the player clicks, to something more understandable.'
  );
  console.log('Finished seeding tables with data');
  //====================================
};
//====================================== SEED DATABASE FUNCTION END
//====================================== TEST DATABASE FUNCTION START
const TestDB = async () => {
  // Testing DB Functions ==============
  console.log('Starting to test database...');
  const NewProject = await AddNewProject(
    'New Project',
    'Test',
    'testurl',
    'testcodeurl',
    'test'
  );
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
