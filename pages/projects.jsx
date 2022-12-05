import React from 'react'
import SingleProject from '../component/singleProject'

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

export async function getServerSideProps(){


  let resp2=await fetch("https://api.github.com/search/repositories?q=user:sagar1079+fork:true&sort=updated&per_page=10&type=Repositories")
  let data2 =await resp2.json()

  return{
    props:{
      project:data2
    }
  }
}
