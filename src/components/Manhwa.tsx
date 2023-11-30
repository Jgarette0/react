import { ArrowBigRightDash } from "lucide-react";

export function Manhwa() {
  const List = [
    {
      Image: "../../public/Existence.png",
      Title: "Existence",
    },
    {
      Image: "../../public/Mount-Hua-Sect.jpg",
      Title: "Return of the Mount Hua Sect",
    },
    {
      Image: "../../public/Disaster-Class-Hero.png",
      Title: "Return of the Disaster Class Hero",
    },
    {
      Image: "../../public/Existence.png",
      Title: "Existence",
    },
  ];

  const RenderThis = List.map((props, index) => (
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

  return <>{RenderThis}</>;
}

const Image = (props) => {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};

const Title = (props) => {
  return <h1>{props.title}</h1>;
};

const Read = () => {
  return (
    <button>
      Read <ArrowBigRightDash size={16} strokeWidth={3} />
    </button>
  );
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
