function ListGroup() {
  const ListGroup = ["New york", "Nigeria", "Germany"];

  ListGroup.map((ListGroup) => <li>{ListGroup}</li>);

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {ListGroup.map((ListGroup) => (
          <li
            className="list-group-ListGroup active"
            key={ListGroup}
            onClick={() => console.log("The button is clicked")}
          >
            {ListGroup}
          </li>
        ))}
      </ul>

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
    </>
  );
}

export default ListGroup;
