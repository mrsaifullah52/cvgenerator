const Homepage = () => {
  const data = [
    {
      num: 1,
      heading: "Pick a Template",
      details:
        "Don't sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates",
    },
    {
      num: 2,
      heading: "Customize Your Layout",
      details:
        "Make the resume template truly your own. Customize the layout based on your experience level.",
    },
    {
      num: 3,
      heading: "Fill in the Blanks",
      details:
        "Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.",
    },
    {
      num: 4,
      heading: "Hit 'Download!'",
      details:
        "And yes, it's free! We don't hit you with a paywall once you've completed your resume in the Basic Account. If you use any of our premium features, the software will let you know about it.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(139, 92, 246, 0.4),rgba(139, 92, 246, 0.6)),url(imgs/wave.png)",
      }}
      className="bg-contain bg-no-repeat pb-12"
    >
      <div className="mycontainer">
        <h2 className="font-black text-2xl md:text-3xl lg:text-4xl text-center text-indigo-900 mt-8 mb-16 ">
          Build Your Resume Fast and Easy.
        </h2>
        <LeftBoxs data={data[0]} />
        <RightBoxs data={data[1]} />
        <LeftBoxs data={data[2]} />
        <RightBoxs data={data[3]} />
      </div>
    </div>
  );
};

const LeftBoxs = ({ data }) => {
  return (
    <div className="my-4 flex flex-col md:flex-row lg:flex-row justify-between items-start">
      <div className="hidden md:block lg:block w-full md:w-1/3 lg:w-1/3 text-4xl font-extrabold">
        <h2 className="bg-indigo-700 text-indigo-500 float-right inline-block px-10 py-8 rounded-xl">
          {data.num}
        </h2>
      </div>

      <div className="w-full md:w-2/3 lg:w-2/3 bg-gray-100 rounded-xl p-8 md:py-16 lg:py-16 shadow-md hover:shadow-2xl">
        <h3 className="font-bold text-xl md:text-2xl lg:text-2xl text-indigo-700">
          <b className="inline-block md:hidden lg:hidden">{`${data.num}. `}</b>
          {data.heading}
        </h3>
        <p className="font-medium text-base md:text-lg lg:text-lg text-gray-500 ">
          {data.details}
        </p>
      </div>
    </div>
  );
};

const RightBoxs = ({ data }) => {
  return (
    <div className="my-4 flex flex-col md:flex-row lg:flex-row justify-between items-start">
      <div className="w-full md:w-2/3 lg:w-2/3 bg-gray-100 rounded-xl p-8 md:py-16 lg:py-16 shadow-md hover:shadow-2xl">
        <h3 className="font-bold text-xl md:text-2xl lg:text-2xl text-indigo-700">
          <b className="inline-block md:hidden lg:hidden">{`${data.num}. `}</b>
          {data.heading}
        </h3>
        <p className="font-medium text-base md:text-lg lg:text-lg text-gray-500 ">
          {data.details}
        </p>
      </div>

      <div className="hidden md:block lg:block w-full md:w-1/3 lg:w-1/3 text-4xl font-extrabold ">
        <h2 className="bg-indigo-700 text-indigo-500 float-left inline-block px-10 py-8 rounded-xl">
          {data.num}
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
