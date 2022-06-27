const client = require('./Index');

const AddNewProject = async (name, description) => {
  const response = await client.query(
    `
INSERT INTO projects (name,description)
VALUES ($1,$2)
RETURNING *;
`,
    [name, description]
  );
  return response.rows[0];
};

const GetAllProjects = async () => {
  try {
    console.log('starting');
    const { rows: response } = await client.query(`
  SELECT * FROM projects;
  `);
    return response;
  } catch (error) {
    throw error;
  }
};

const GetProjectById = async (id) => {
  const response = await client.query(
    `
  SELECT * FROM projects
  WHERE id = $1;`,
    [id]
  );
  return response.rows[0];
};

const RemoveProjectsById = async (id) => {
  const response = await client.query(
    `
    DELETE FROM projects
    WHERE id = $1`,
    [id]
  );
};

module.exports = {
  AddNewProject,
  GetAllProjects,
  GetProjectById,
  RemoveProjectsById,
};
