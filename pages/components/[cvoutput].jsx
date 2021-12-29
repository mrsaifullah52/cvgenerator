import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faCalendarDay,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
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
          <header className="p-4 pt-12 flex flex-row justify-between bg-gray-300 w-full items-center border-r-4 border-indigo-500">
            <div className="w-1/2 flex flex-row items-center ml-20">
              <div className="bg-white border-indigo-500 border-2 rounded-full w-36 h-36 overflow-hidden">
                <img
                  src={values.proImage}
                  id="dpimg"
                  alt="profile image"
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col ml-4">
                <h1 className="font-bold text-5xl text-indigo-500">{`${values.fname} ${values.lname}`}</h1>
                <h3 className="font-medium text-2xl">{values.role}</h3>
              </div>
            </div>

            <ul className="flex flex-col mr-20">
              <li className="flex flex-row justify-start items-center">
                <FontAwesomeIcon
                  className="text-indigo-500 mr-1 text-2xl"
                  icon={faEnvelope}
                />
                <span className="font-medium text-xl">{values.email}</span>
              </li>
              <li className="flex flex-row justify-start items-center">
                <FontAwesomeIcon
                  className="text-indigo-500 mr-1 text-2xl"
                  icon={faPhone}
                />
                <span className="font-medium text-xl">{values.phone}</span>
              </li>

              <li className="flex flex-row justify-start items-center">
                <FontAwesomeIcon
                  className="text-indigo-500 mr-1 text-2xl"
                  icon={faCalendarDay}
                />
                <span className="font-medium text-xl">{values.dob}</span>
              </li>
            </ul>
          </header>
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
