import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const Cvheader = ({ values }) => {
  return (
    <>
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
    </>
  );
};

export default Cvheader;
