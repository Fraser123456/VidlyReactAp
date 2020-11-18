const GenreFilter = (props) => {
  const { genres, currentFilter, onFilterChange } = props;

  return (
    <ul className="list-group">
      {genres.map((genre) => {
        return (
          <li
            key={genre._id}
            style={{ cursor: "pointer" }}
            className={
              currentFilter === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onFilterChange(genre)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
