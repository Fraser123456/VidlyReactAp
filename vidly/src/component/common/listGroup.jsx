const ListGroup = (props) => {
  const { genres, textPropert, valueProperty, onItemSelect } = props;

  return (
    <ul className="list-group mt-5">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          style={{ cursor: 'pointer' }}
          className="list-group-item"
          onClick={() => onItemSelect(genre)}
        >
          {genre[textPropert]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
