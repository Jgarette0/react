const Manhwa = () => {
  const manhwas = [
    {
      Image: "../../public/Existence.png",
      Title: "Existence",
    },
    {
      Image: "../../public/Disaster-Class-Hero.png",
      Title: "Return of the Disaster Class Hero",
    },
    {
      Image: "../../public/Mount-Hua-Sect.jpg",
      Title: "Return of the Mount Hua Sect",
    },
    {
      Image: "../../public/Existence.png",
      Title: "Existence",
    },
  ];

  const renderManhwa = manhwas.map((props, index) => (
    <article className="Components-Container" key={index}>
      <div className="image-container">
        <Image image={props.Image} />
      </div>
      <div className="text-container">
        <Title title={props.Title} />
        <Read />
      </div>
    </article>
  ));

  return <>{renderManhwa}</>;
};

const Image = (props) => <img src={props.image} alt={props.title} />;
const Title = (props) => <h1>{props.title}</h1>;
const Read = () => <button>Read</button>;

export default Manhwa;
