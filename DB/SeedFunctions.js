const client = require('./Index');

const AddNewProject = async (
  name,
  description,
  projectimg,
  codeimg,
  codedisc
) => {
  const response = await client.query(
    `
INSERT INTO projects (name,description,projectimg,codeimg,codedisc)
VALUES ($1,$2,$3,$4,$5)
RETURNING *;
`,
    [name, description, projectimg, codeimg, codedisc]
  );
  return response.rows[0];
};

const GetAllProjects = async () => {
  try {
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
