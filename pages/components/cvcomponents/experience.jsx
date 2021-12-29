const Experience = ({ experience }) => {
  return (
    <>
      {experience.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Experience:
            </h2>
          </div>
          <div className="w-3/4 flex flex-col">
            {experience.length >= 0
              ? experience.map((val) => {
                  return (
                    <div key={val.title} className="py-2">
                      <p className="uppercase font-medium text-base">
                        <span className="uppercase font-semibold text-lg">
                          {val.title} - &nbsp;
                        </span>
                        {val.name}
                      </p>
                      <p className="text-base">
                        <span className="font-normal">
                          <b>Started at:</b> {val.start}
                          <b> End at: </b>
                          {val.end}
                        </span>
                      </p>
                      <p>{val.details}</p>
                      <hr className="bg-indigo-500 h-0.5" />
                    </div>
                  );
                })
              : ""}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Experience;
