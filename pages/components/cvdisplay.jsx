import Link from "next/link";

const Cvdisplay = () => {
  const cards = [
    { title: "Professional", link: "Professional" },
    { title: "Modern", link: "Modern" },
    { title: "Simple", link: "Simple" },
    { title: "Creative", link: "Creative" },
    { title: "Premium", link: "Premium" },
    { title: "Classic", link: "Classic" },
  ];
  return (
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
  );
};

const Card = ({ props }) => {
  return (
    <div className="has-tooltip w-72 border-2 border-indigo-400 rounded-md shadow-lg p-4 mx-1 my-2 ">
      <div className="" id="text">
        <h4 className="text-center font-bold text-lg text-indigo-500 py-6 md:py-6 ">
          {props.title}
        </h4>
      </div>

      <div
        className="flex flex-row justify-center items-center py-4 md:py-3 text-center"
        id="actions"
      >
        <Link href={`view/${props.link}`}>
          <a target="_blank" className="btn-primary">
            Perview
          </a>
        </Link>
        <Link href={`cv/`}>
          <a className="btn-secondary">Select</a>
        </Link>
      </div>
    </div>
  );
};

export default Cvdisplay;
