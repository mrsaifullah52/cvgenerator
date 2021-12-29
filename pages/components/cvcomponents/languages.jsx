const Language = ({ language }) => {
  return (
    <>
      {language.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Language:
            </h2>
          </div>
          <div className="w-3/4 flex flex-row flex-wrap">
            {languagee.map((val) => {
              return (
                <div
                  key={val.name}
                  className="p-2 m-1 text-white rounded-xl bg-indigo-500"
                >
                  <p className="uppercase font-medium text-base">{val.name}</p>
                  <p className="uppercase text-xs">{val.level}</p>
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

export default Language;
