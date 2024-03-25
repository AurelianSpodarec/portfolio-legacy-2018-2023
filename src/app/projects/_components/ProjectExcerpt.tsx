export interface IProjectExcerpt {
  name: string;
  description: string;
  thumbnail: string;
}

function ProjectExcerpt({ name, description, thumbnail }: IProjectExcerpt) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default ProjectExcerpt;
