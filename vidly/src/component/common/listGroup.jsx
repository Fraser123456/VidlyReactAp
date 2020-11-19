const ListGroup = (props) => {
  const {
    genres,
    textPropert,
    valueProperty,
    selectedGenre,
    onItemSelect,
  } = props;

  return (
    <ul className="list-group mt-5">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(genre)}
        >
          {genre[textPropert]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textPropert: "name",
  valueProperty: "_id",
};

export default ListGroup;
