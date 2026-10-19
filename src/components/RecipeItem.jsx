export default function RecipeItem({
    title,
    description,
    url,
    image,
    category,
    area
}) {
    return (
        <li className="recipe-card">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="recipe-image"
                    loading="lazy"
                />
            )}

            <h2>{title}</h2>
            <p>{description}</p>
            <p className="recipe-category">Category: {category}</p>
            <p className="recipe-area">Cuisine: {area}</p>

            {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
               View full recipe
            </a>
            ) : (
           <p className="source-unavailable">
                Recipe website unavailable
           </p>
)}
        </li>
    );
}