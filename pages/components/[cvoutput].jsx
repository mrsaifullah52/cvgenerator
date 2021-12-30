import { useRouter } from "next/router";
import Cvheader from "./cvcomponents/Cvheader";
import Experience from "./cvcomponents/experience";
import Skill from "./cvcomponents/skills";
import Education from "./cvcomponents/education";
import Hobbie from "./cvcomponents/hobbies";
import Language from "./cvcomponents/languages";
import Project from "./cvcomponents/Projects";

const Output = ({ view, values, output }) => {
  const router = useRouter();
  const { cvoutput } = router.query;
  return (
    <>
      <div
        ref={view}
        className="w-full absolute top-0 left-0 right-0 overflow-scroll invisible"
      >
        <h2 className="text-center text-2xl font-bold my-4 text-indigo-900 ">
          Output of Your Resume
        </h2>
        <div
          style={{ width: "1240px" }}
          className=" bg-white"
          id="output"
          ref={output}
        >
          <Cvheader values={values} />
          <div className="bg-indigo-500 h-1 w-full"></div>

          <Experience experience={values.experience} />

          <Skill skill={values.skill} />

          <Education education={values.education} />

          <Hobbie hobbie={values.hoby} />

          <Language language={values.language} />

          <Project project={values.project} />
        </div>
      </div>
    </>
  );
};

export default Output;
