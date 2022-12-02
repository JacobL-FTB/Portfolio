const SingleProject = ({ ProjectData, getprojectdata }) => {
  const url = window.location.href;
  let id = url.slice(30);

  if (!ProjectData.id) {
    getprojectdata(id);
  }
  return (
    <div id="singleprojectdetails">
      <p id="projectname">{ProjectData.name}</p>
      <div id="imgalign">
        <div id="text">
          <b id="projectdisc">Project Description:</b>
          <p>{ProjectData.description}</p>
        </div>
        <img id="projectimg" src={ProjectData.projectimg}></img>
      </div>
      <div id="imgalign">
        <img id="codeimg" src={ProjectData.codeimg}></img>
        <div id="text">
          <b id="codedisc">Code Description:</b>
          <p>{ProjectData.codedisc}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleProject;
