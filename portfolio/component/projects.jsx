import React from 'react'
import SingleProject from './singleProject'

const Projects = ({project}) => {


  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      }}>
      {project.items.map((one)=>
      <SingleProject
      key={one.id}
      language={one.language}
      name={one.name}
      forks={one.forks}
      html_url={one.html_url}
      stargazers_count={one.stargazers_count}
      >
      </SingleProject>
      )}
    </div>
  )
}

export default Projects

