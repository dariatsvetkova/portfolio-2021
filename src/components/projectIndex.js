import * as React from "react"
import ProjectCard from "./projectCard"

const ProjectIndex = (props) => {
  return (
    <ul>
      {props.projects.map(project => {
        const shortSlug = 
          project.node.slug
          ? project.node.slug.slice(1)
          : project.node.title.toLowerCase().split(" ").join("");

        const imgFiles = props.images.filter(image => {
          const path = image.node.parent.relativePath.split("/")[0]
          return path === shortSlug
        })

        return (
          <ProjectCard 
            key={shortSlug.toString()}
            project={project.node}
            imgFiles={imgFiles}
          />
        )
      })}
    </ul>
  )
}

export default ProjectIndex