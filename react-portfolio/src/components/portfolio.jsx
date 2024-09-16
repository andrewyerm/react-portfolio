import Project from './project';

// 
  return (
    <section>
      <h2>My Portfolio</h2>
      {projects.map((project, index) => (
        <Project 
          key={index} 
          title={project.title} 
          imageUrl={project.imageUrl} 
          deployedLink={project.deployedLink} 
          githubLink={project.githubLink} 
        />
      ))}
    </section>
  );
}

export default Portfolio;
