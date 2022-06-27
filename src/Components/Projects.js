const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((current) => {
        return (
          <div key={current.id}>
            <p>
              {current.id} | {current.name}
            </p>
          </div>
        );
      })}
    </>
  );
};
export default Projects;
