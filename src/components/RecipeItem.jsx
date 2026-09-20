export default function RecipeItem({ title, description, url, cookTime}) {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Cook time: {cookTime}</p>
            <a href={url} target="_blank" rel="noreferrer">
                View full recipe
            </a>
        </li>
    )
}