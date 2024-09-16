function Project({ title, imageUrl, deployedLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`${title} screenshot`} />
        <div>
          <a href={deployedLink}>View</a>
          <a href={githubLink}>GitHub</a>
        </div>
      </div>
    );
  }
  
  export default Project;
  