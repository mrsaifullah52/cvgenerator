import Header from "./components/header";
import Link from "next/link";
import Image from "next/image";
import professional from "../public/professional.png";
import simple from "../public/simple.jpg";

const Resumes = () => {
  const cards = [
    { title: "professional.png", link: "Professional", img: simple },
    { title: "Modern", link: "Modern", img: simple },
    { title: "simple", link: "simple", img: simple },
    { title: "Creative", link: "Creative", img: simple },
    { title: "Premium", link: "Premium", img: simple },
    { title: "Classic", link: "Classic", img: simple },
  ];
  return (
    <>
      <Header />
      <section>
        <div className="mycontainer">
          <div className="text-center my-4">
            <h2 className="font-bold text-2xl md:text-4xl text-indigo-900">
              Resume Templates
            </h2>
            <p className="font-mono text-sm md:text-base">
              Select one which fits to your Profession
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {cards.map((card, key) => {
              return <Card props={card} key={key} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ props }) => {
  return (
    <div className="has-tooltip w-72 h-72 border-2 border-indigo-400 rounded-md shadow-lg mx-1 my-2 relative overflow-hidden">
      <div className="" id="thumbnail">
        <Image src={props.img} alt={props.title} className="h-full w-full" />
      </div>

      <div
        className="flex flex-row justify-center items-center py-4 md:py-3 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        id="actions"
      >
        <Link href={`cv/`}>
          <a className="btn-secondary">Select</a>
        </Link>
        <Link href={`view/${props.title}`}>
          <a target="_blank" className="btn-primary">
            View
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Resumes;
