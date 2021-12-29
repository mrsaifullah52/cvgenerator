const Education = (education) => {
  return (
    <>
      {education.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Education:
            </h2>
          </div>
          <div className="w-3/4 flex flex-col">
            {education.length >= 0
              ? education.map((val) => {
                  return (
                    <div key={val.degree} className="py-2">
                      <p className="uppercase font-medium text-base">
                        <span className="uppercase font-semibold text-lg">
                          {val.degree} - &nbsp;
                        </span>
                        {val.degreeInstitution}
                      </p>
                      <p className="text-base">
                        <span className="font-normal">
                          <b>Started at:</b> {val.degreeStart}
                          <b> End at: </b>
                          {val.degreeEnd}
                        </span>
                      </p>
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

export default Education;
