import Link from "next/link";

interface IBoxAction {
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  }
}

function BoxAction({ title, description, button }: IBoxAction) {
  const { text: buttonText, link: buttonLink } = button;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={buttonLink}>
        <Link href={buttonLink}>{buttonText}</Link>
      </Link>
    </div>
  )
}

export default BoxAction;
