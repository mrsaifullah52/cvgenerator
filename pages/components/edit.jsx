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
import Output from "./[cvoutput]";

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
                                onClick={(e) => remEdu(e, values, setValues)}
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
                                onClick={(e) => remSkill(e, values, setValues)}
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
                                onClick={(e) => remHoby(e, values, setValues)}
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
                                onClick={(e) => remLang(e, values, setValues)}
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
                                <textarea
                                  id="proDetails"
                                  name={`experience.${i}.details`}
                                  placeholder="Details about your work!"
                                  className="w-full form-textarea rounded-md shadow-md border-none"
                                ></textarea>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remExp(e, values, setValues)}
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
                                <textarea
                                  type="textarea"
                                  id="proDetails"
                                  name={`project.${i}.details`}
                                  value={values.project[i].details}
                                  onChange={(e) => {
                                    // setValues((...prev) => {
                                    //   values.project[i].details = e.target.value;
                                    // });
                                  }}
                                  placeholder="Online Free of Cost CV Generator!"
                                  className="w-full form-textarea rounded-md shadow-md border-none"
                                ></textarea>
                              </div>

                              <button
                                className="btn bg-red-500 text-white"
                                onClick={(e) => remPro(e, values, setValues)}
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
                <Output view={view} values={values} output={output} />
              </div>
            </>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Edit;
