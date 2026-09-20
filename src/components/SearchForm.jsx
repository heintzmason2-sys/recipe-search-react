export default function SearchForm({ searchTerm, onSearchTermChange,
    onSearchSubmit }) {
        return (
            <form onSubmit={onSearchSubmit}>
                <label htmlFor="search">Search recipes</label>
                <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="Type a recipe name..."
                />
                <button type="submit">Search</button>
            </form>
        )
    }