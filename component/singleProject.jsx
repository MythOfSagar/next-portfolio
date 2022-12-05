import React from 'react'
import Link from "next/link"

const SingleProject = ({name,forks,stargazers_count,language,html_url}) => {
  return (
    <Link href={html_url}><div
    style={{
        textAlign:"center",
        borderRadius:"30px",
        border:"2px solid red"
        }}>
        <h1>{name}</h1>
        <h1>Forks: {forks}</h1>
        <h1>Stars: {stargazers_count}</h1>
        <h1>Lang: {language}</h1>
        <h3>Click to View Project</h3>
    </div></Link>
  )
}

export default SingleProject
