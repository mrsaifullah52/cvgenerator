const Jumboturn = () => {
  return (
    <div
      className="relative h-52 md:h-72 bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "linear-gradient(rgba(139, 92, 246, 0.4),rgba(139, 92, 246, 0.6)),url(imgs/header.jpg)",
      }}
    >
      <div className="mycontainer">
        <div className="transform translate-y-10 md:translate-y-20">
          <h2 className="text-indigo-900 font-black text-2xl md:text-6xl">
            CV Generator
          </h2>
          <p className="text-white">Online Free of Cost CV Generator!</p>
        </div>
      </div>
    </div>
  );
};

export default Jumboturn;
