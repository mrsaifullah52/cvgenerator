const Jumboturn = () => {
  return (
    <div
      className="relative h-52 md:h-72 bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "linear-gradient(rgba(99, 102, 241, 0.4),rgba(99, 102, 241, 0.6)),url(imgs/header.jpg)",
      }}
    >
      <div className="mycontainer">
        <div className="transform translate-y-10 md:translate-y-20">
          <h2 className="text-brand-dark font-black text-2xl md:text-6xl">
            CV Generator
          </h2>
          <p className="text-white">Online Free of Cost CV Generator!</p>
        </div>
      </div>
    </div>
  );
};

export default Jumboturn;
