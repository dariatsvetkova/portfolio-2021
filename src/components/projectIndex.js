import * as React from "react"
import ProjectCard from "./projectCard"

const ProjectIndex = (props) => {
  return (
    <ul>
      {props.projects.map(project => {
        const shortSlug = project.node.slug.slice(1)

        const imgFile = props.images.filter(image => {
          const path = image.node.parent.relativePath.split("/")[0]
          return path === shortSlug
        })

        return (
          <ProjectCard 
            key={shortSlug.toString()}
            project={project.node}
            imgFile={imgFile}
          />
        )
      })}
    </ul>
  )
}

export default ProjectIndex