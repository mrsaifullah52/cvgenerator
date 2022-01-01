import { Formik, Form, Field, useFormik, FieldArray } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faCalendarDay,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

const Edit = () => {
  const output = useRef();
  const edit = useRef();
  const view = useRef();

  // inital values
  const initialValues = {
    fname: "Saif",
    lname: "Ullah",
    email: "saifullah@gmail.com",
    phone: "03449645740",
    role: "Full Stack Developer",
    dob: "1998-11-06",
    proImage:
      "https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg",

    education: [],
    skill: [],
    hoby: [],
    language: [],
    experience: [],
    project: [],
  };
  // education
  const addEdu = (values, setValues) => {
    const education = [...values.education];
    education.push({
      degree: "",
      degreeStart: "",
      degreeEnd: "",
      degreeInstitution: "",
    });
    setValues({ ...values, education });
  };
  const remEdu = (e, values, setValues) => {
    const education = [...values.education];
    education.splice(e, 1);
    setValues({ ...values, education });
  };
  // skill
  const addSkill = (values, setValues) => {
    const skill = [...values.skill];
    skill.push({ name: "", level: "" });
    setValues({ ...values, skill });
  };
  const remSkill = (e, values, setValues) => {
    const skill = [...values.skill];
    skill.splice(e, 1);
    setValues({ ...values, skill });
  };
  // hoby
  const addHoby = (values, setValues) => {
    const hoby = [...values.hoby];
    hoby.push({ name: "" });
    setValues({ ...values, hoby });
  };
  const remHoby = (e, values, setValues) => {
    const hoby = [...values.hoby];
    hoby.splice(e, 1);
    setValues({ ...values, hoby });
  };
  // language
  const addLang = (values, setValues) => {
    const language = [...values.language];
    language.push({ name: "", level: "" });
    setValues({ ...values, language });
  };
  const remLang = (e, values, setValues) => {
    const language = [...values.language];
    language.splice(e, 1);
    setValues({ ...values, language });
  };
  // experience
  const addExp = (values, setValues) => {
    const experience = [...values.experience];
    experience.push({ title: "", name: "", start: "", end: "", details: "" });
    setValues({ ...values, experience });
  };
  const remExp = (e, values, setValues) => {
    const experience = [...values.experience];
    experience.splice(e, 1);
    setValues({ ...values, experience });
  };
  // project
  const addPro = (values, setValues) => {
    const project = [...values.project];
    project.push({ name: "", url: "", details: "" });
    setValues({ ...values, project });
  };
  const remPro = (e, values, setValues) => {
    const project = [...values.project];
    project.splice(e, 1);
    setValues({ ...values, project });
  };

  // display image in browser
  const showImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const dpimg = document.getElementById("dpimg");
      dpimg.src = URL.createObjectURL(file);
    }
  };

  return (
    <section className="mycontainer">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setTimeout(function () {
              edit.current.style.visibility = "hidden";
              view.current.style.visibility = "visible";
              htmlToImage.toCanvas(output.current).then((canvas) => {
                var imgData = canvas;
                var pdf = new jsPDF("p", "mm", "a4");
                var pageWidth = pdf.internal.pageSize.getWidth();
                var pageHeight = pdf.internal.pageSize.getHeight();
                var imageWidth = canvas.width;
                var imageHeight = canvas.height;

                var ratio =
                  imageWidth / imageHeight >= pageWidth / pageHeight
                    ? pageWidth / imageWidth
                    : pageHeight / imageHeight;
                pdf.addImage(
                  imgData,
                  "JPEG",
                  0,
                  0,
                  imageWidth * ratio,
                  imageHeight * ratio
                );
                pdf.save(`${values.fname}-CV.pdf`);
              });
            });
          }}
        >
          {({ errors, values, touched, setValues }) => (
            <>
              <div
                className="flex flex-col text-base mt-2"
                style={{ width: "130px" }}
              >
                <button
                  onClick={() => {
                    edit.current.style.visibility = "visible";
                    view.current.style.visibility = "hidden";
                  }}
                  type="button"
                  className="btn-primary font-semibold flex flex-row items-center justify-between"
                >
                  <span>Edit</span>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-white w-6 h-6"
                  />
                </button>
                <button
                  onClick={() => {
                    edit.current.style.visibility = "hidden";
                    view.current.style.visibility = "visible";
                  }}
                  type="button"
                  className="btn-secondary font-semibold flex flex-row items-center justify-between"
                >
                  <span>View</span>
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-indigo-900 w-6 h-6"
                  />
                </button>
              </div>
              <div className="w-full output relative">
                {/* take data */}
                <Form
                  ref={edit}
                  className="w-full absolute top-0 left-0 right-0"
                >
                  {/* personal */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Personal Details:
                    </legend>

                    <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                      <div className="input_group">
                        <label htmlFor="fname">Your First Name:</label>
                        <Field
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Saif"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>

                      <div className="input_group">
                        <label htmlFor="lname">Your Last Name:</label>
                        <Field
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder="Ullah"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                      <div className="input_group">
                        <label htmlFor="email">Your Email:</label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="saifullah@example.com"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>

                      <div className="input_group">
                        <label htmlFor="phone">Your Phone Number:</label>
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="92 300 0000000"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
                      <div className="input_group">
                        <label htmlFor="dob">Your Date-of-Birth:</label>
                        <Field
                          type="date"
                          id="dob"
                          name="dob"
                          placeholder="mm/dd/yyyy"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>
                      <div className="input_group">
                        <label htmlFor="role">Your Current Job Role:</label>
                        <Field
                          type="text"
                          id="role"
                          name="role"
                          placeholder="Full Stack Developer"
                          className="w-full form-input rounded-md shadow-md border-none"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label htmlFor="proImage">Select Profile Image:</label>
                      <Field
                        type="file"
                        id="promage"
                        name="promage"
                        placeholder="Select Image"
                        className="w-full form-file p-1 rounded-md shadow-md border-none"
                        onChange={showImg}
                        accept="image/*"
                      />
                    </div>
                  </fieldset>

                  {/* education */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Education Details:
                    </legend>
                    <FieldArray name="education">
                      {() =>
                        values.education.map((val, i) => {
                          console.log(i);
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="degree">
                                    Degree/Certification:
                                  </label>
                                  <Field
                                    type="text"
                                    id="degree"
                                    name={`education.${i}.degree`}
                                    placeholder="BS Software Engineering"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="degreeInstitution">
                                    Institution Name:
                                  </label>
                                  <Field
                                    type="text"
                                    id="degreeInstitution"
                                    name={`education.${i}.degreeInstitution`}
                                    placeholder="Virtual University Of Pakistan"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>

                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="degreeStart">
                                    Start Date:
                                  </label>
                                  <Field
                                    type="date"
                                    id="degreeStart"
                                    placeholder="mm/dd/yyyy"
                                    name={`education.${i}.degreeStart`}
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="degreeEnd">End Date:</label>
                                  <Field
                                    type="date"
                                    id="degreeEnd"
                                    placeholder="mm/dd/yyyy"
                                    name={`education.${i}.degreeEnd`}
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remEdu(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addEdu(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  {/* skill */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Skills Detail:
                    </legend>
                    <FieldArray name="skill">
                      {() =>
                        values.skill.map((val, i) => {
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="skillName">Skill Name:</label>
                                  <Field
                                    type="text"
                                    id="skillName"
                                    name={`skill.${i}.name`}
                                    placeholder="JavaScript"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="skillLevel">
                                    Skill Level:
                                  </label>
                                  <Field
                                    as="select"
                                    name={`skill.${i}.level`}
                                    id="skillLevel"
                                    className="w-full form-select rounded-md shadow-md border-none"
                                  >
                                    <option value="Entry">Entry</option>
                                    <option value="Intermediate">
                                      Intermediate
                                    </option>
                                    <option value="Expert">Expert</option>
                                  </Field>
                                </div>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remSkill(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addSkill(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  {/* hoby */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Hobies Detail:
                    </legend>
                    <FieldArray name="hoby">
                      {() =>
                        values.hoby.map((val, i) => {
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="hobyName">Hoby Name:</label>
                                  <Field
                                    type="text"
                                    id="hobyName"
                                    name={`hoby.${i}.name`}
                                    placeholder="Cricket"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remHoby(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addHoby(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  {/* Language */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Languages Detail:
                    </legend>
                    <FieldArray name="language">
                      {() =>
                        values.language.map((val, i) => {
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="langName">
                                    Language Name:
                                  </label>
                                  <Field
                                    type="text"
                                    id="langName"
                                    name={`language.${i}.name`}
                                    placeholder="English"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="langLevel">
                                    Language Level:
                                  </label>
                                  <Field
                                    as="select"
                                    name={`language.${i}.level`}
                                    id="langLevel"
                                    className="w-full form-select rounded-md shadow-md border-none"
                                  >
                                    <option value="Entry">Entry</option>
                                    <option value="Intermediate">
                                      Intermediate
                                    </option>
                                    <option value="Expert">Expert</option>
                                  </Field>
                                </div>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remLang(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addLang(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  {/* experience */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Experience Details:
                    </legend>
                    <FieldArray name="experience">
                      {() =>
                        values.experience.map((val, i) => {
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="jobTitle">Job Title:</label>
                                  <Field
                                    type="text"
                                    id="jobTitle"
                                    name={`experience.${i}.title`}
                                    placeholder="Full Stack Developer"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="companyName">
                                    Company Name:
                                  </label>
                                  <Field
                                    type="text"
                                    id="companyName"
                                    name={`experience.${i}.name`}
                                    placeholder="SoftTech Global"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>

                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="expStart">Start Date:</label>
                                  <Field
                                    type="date"
                                    id="expStart"
                                    placeholder="mm/dd/yyyy"
                                    name={`experience.${i}.start`}
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="expEnd">End Date:</label>
                                  <Field
                                    type="date"
                                    id="expEnd"
                                    placeholder="mm/dd/yyyy"
                                    name={`experience.${i}.end`}
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>
                              <div className="">
                                <label htmlFor="proDetails">Job Details:</label>
                                <Field
                                  type="text"
                                  id="proDetails"
                                  placeholder="Details about your work!"
                                  name={`experience.${i}.details`}
                                  className="w-full form-textarea rounded-md shadow-md border-none overflow-scroll"
                                />
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remExp(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addExp(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  {/* project */}
                  <fieldset className="border-2 border-indigo-900 p-4">
                    <legend className="text-lg font-semibold text-indigo-500">
                      Projects Detail:
                    </legend>
                    <FieldArray name="project">
                      {() =>
                        values.project.map((val, i) => {
                          return (
                            <div key={i}>
                              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
                                <div className="input_group">
                                  <label htmlFor="proName">Project Name:</label>
                                  <Field
                                    type="text"
                                    id="proName"
                                    name={`project.${i}.name`}
                                    placeholder="Online CV Generator"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>

                                <div className="input_group">
                                  <label htmlFor="url">Project Link:</label>
                                  <Field
                                    type="text"
                                    id="url"
                                    name={`project.${i}.url`}
                                    placeholder="https://cvgenerator.com"
                                    className="w-full form-input rounded-md shadow-md border-none"
                                  />
                                </div>
                              </div>

                              <div className="">
                                <label htmlFor="proDetails">
                                  Project Details:
                                </label>
                                <Field
                                  type="text"
                                  id="proDetails"
                                  placeholder="Online Free of Cost CV Generator!"
                                  name={`project.${i}.details`}
                                  className="w-full form-textarea rounded-md shadow-md border-none overflow-scroll"
                                />
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remPro(i, values, setValues)}
                              >
                                Remove
                              </button>
                              <hr />
                            </div>
                          );
                        })
                      }
                    </FieldArray>
                    <button
                      type="button"
                      onClick={() => addPro(values, setValues)}
                      className="btn-primary"
                    >
                      Add
                    </button>
                  </fieldset>

                  <div className="flex flex-row p-4">
                    <button
                      type="reset"
                      className="btn bg-yellow-400 hover:bg-yellow-500"
                    >
                      Reset
                    </button>
                    <button type="submit" className="btn-primary">
                      Download PDF
                    </button>
                  </div>
                </Form>

                {/* output */}
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

                    <Hobbie hoby={values.hoby} />

                    <Language language={values.language} />

                    <Project project={values.project} />
                  </div>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Edit;

// CVHeader
const Cvheader = ({ values }) => {
  return (
    <>
      <section className="p-4 pt-12 flex flex-row justify-between bg-gray-300 w-full items-center border-r-4 border-indigo-500">
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
      </section>
    </>
  );
};

// Education
const Education = ({ education }) => {
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
              ? education.map((val, i) => {
                  return (
                    <div key={i} className="py-2">
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

// Experience
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

// Hobbies
const Hobbie = ({ hoby }) => {
  return (
    <>
      {hoby.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Hobbies:
            </h2>
          </div>
          <div className="w-3/4 flex flex-row flex-wrap">
            {hoby.length >= 0
              ? hoby.map((val) => {
                  return (
                    <div
                      key={val.name}
                      className="p-2 m-1 text-white rounded-xl bg-indigo-500"
                    >
                      <p className="uppercase font-medium text-base">
                        {val.name}
                      </p>
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

// Languages
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
            {language.length >= 0
              ? language.map((val) => {
                  return (
                    <div
                      key={val.name}
                      className="p-2 m-1 text-white rounded-xl bg-indigo-500"
                    >
                      <p className="uppercase font-medium text-base">
                        {val.name}
                      </p>
                      <p className="uppercase text-xs">{val.level}</p>
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

// Projects
const Project = ({ project }) => {
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
            {project.length >= 0
              ? project.map((val) => {
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

// Skills
const Skill = ({ skill }) => {
  return (
    <>
      {skill.length > 0 ? (
        <section className="p-4 pt-12 flex flex-row items-start  w-full border-l-4 border-indigo-500">
          <div className="w-1/4">
            <h2 className="font-bold text-2xl text-indigo-500 text-center">
              Key Skills:
            </h2>
          </div>
          <div className="w-3/4 flex flex-row flex-wrap">
            {skill.map((val) => {
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
