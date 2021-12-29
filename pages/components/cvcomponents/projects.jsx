const Projects = ({ project }) => {
  return (
    <>
      {project.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Projects:
            </h2>
          </div>
          <div className="w-3/4 flex flex-col">
            {project.map((val) => {
              return (
                <div key={val.name} className="py-2">
                  <p className="uppercase font-medium text-base">
                    <span className="uppercase font-semibold text-lg">
                      {val.name} - &nbsp;
                    </span>
                    <a href={val.url} target="_blank" className="">
                      Check Online
                    </a>
                  </p>
                  <p>{val.details}</p>
                  <hr className="bg-indigo-500 h-0.5" />
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Projects;
