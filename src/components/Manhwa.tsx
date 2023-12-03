const Manhwa = () => {
  const List = [
    {
      image: "../../public/Existence.png",
      title: "Existence",
    },
    {
      image: "../../public/Mount-Hua-Sect.jpg",
      title: "Return of the Mount Hua Sect",
    },
    {
      image: "../../public/Disaster-Class-Hero.png",
      title: "Return of the Disaster Class Hero",
    },
    {
      image: "../../public/Existence.png",
      title: "Existence",
    },
  ];
  const renderDezNutz = List.map((props, index) => (
    <article className="Components-Container" key={index}>
      <div className="image-container">
        <Image images={props.image} />
      </div>
      <div className="text-container">
        <Title titles={props.title} />
        <Read />
      </div>
    </article>
  ));
  return <>{renderDezNutz}</>;
};

const Title = (props) => {
  return <h1>{props.titles}</h1>;
};
const Image = (props) => {
  return <img src={props.images} alt="exitence" />;
};

const Read = () => {
  return <button>Read</button>;
};
export default Manhwa;

// Image: "../../public/Existence.png",
// Title: "Existence",

// Image: "../../public/Mount-Hua-Sect.jpg",
// Title: "Return of the Mount Hua Sect",

// Image: "../../public/Disaster-Class-Hero.png",
// Title: "Return of the Disaster Class Hero",

// Image: "../../public/Existence.png",
// Title: "Existence",

// {
//   Image: "../../public/Existence.png",
//   Title: "Existence",
// },
// {
//   Image: "../../public/Mount-Hua-Sect.jpg",
//   Title: "Return of the Mount Hua Sect",
// },
// {
//   Image: "../../public/Disaster-Class-Hero.png",
//   Title: "Return of the Disaster Class Hero",
// },
// {
//   Image: "../../public/Existence.png",
//   Title: "Existence",
// },
