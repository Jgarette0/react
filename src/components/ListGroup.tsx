const ListGroup = () => {
  let snacks = [
    "Nutristar",
    "Toblerone",
    "Choey choco",
    "Lobster",
    "Roasted Aligator",
  ];
  snacks = [];

  return (
    <>
      <h1>Favourite Snacks</h1>
      {snacks.length === 0 && <p>No fav snack found.</p>}
      <ul className="list-group">
        {snacks.map((snacks) => (
          <li key={snacks}>{snacks}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
