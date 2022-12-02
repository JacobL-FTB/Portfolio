import { Link } from 'react-router-dom';
const Projects = ({ projects, getprojectdata }) => {
  return (
    <>
      {projects.map((current) => {
        return (
          <div
            key={current.id}
            id="project"
            onClick={async () => {
              const project = await getprojectdata(current.id);
            }}
          >
            <img id="smallprojectimg" src={current.projectimg} />
            <br />
            <div id="projectname">
              <b>{current.name}</b>
              <Link to={`/Project/${current.id}`}>
                <u id="viewprojectdetails">View Project Details</u>{' '}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Projects;
