import * as React from "react"
import ProjectCard from "./projectCard"

const ProjectIndex = (props) => {
  return (
    <ul>
      {props.projects.map(project => {

        const imgFile = props.images.filter(image => {
          let path = image.node.parent.relativePath.split("/")[0]
          let shortSlug = project.node.slug.slice(1)
          return path === shortSlug
        })

        return (
          <ProjectCard 
            key={project.node.title}
            project={project.node}
            imgFile={imgFile}
          />
        )
      })}
    </ul>
  )
}

export default ProjectIndex