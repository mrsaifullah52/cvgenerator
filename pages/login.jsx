import Image from "next/image";
import holdingresume from "../public/imgs/holding resume.png";
import Header from "./components/header";
import { Formik, Form, Field, useFormik } from "formik";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Header />
      <section className=" h-full w-full p-4">
        <div className="flex flex-col md:flex-row justify-between items-between w-4/5 mx-auto py-4 px-1 md:px-4 rounded-lg ">
          <div className="w-100 md:w-1/3 bg-indigo-400 rounded-lg md:rounded-r-none ">
            <Image
              src={holdingresume}
              alt="holding resume"
              width={400}
              height={400}
            />
          </div>

          <div className="w-100 md:w-2/3 bg-white p-4">
            <h1 className="my-8 font-extrabold text-xl md:text-3xl text-center text-indigo-900">
              Login to Continue
            </h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <div className="w-100 flex flex-col my-2">
                  <label
                    htmlFor="email"
                    className="text-indigo-900 font-medium text-base"
                  >
                    Your Email
                  </label>
                  <Field
                    name="email"
                    id="email"
                    type="email"
                    className="px-4 py-3 rounded-md"
                  />
                </div>

                <div className="w-100 flex flex-col my-2">
                  <label
                    htmlFor="email"
                    className="text-indigo-900 font-medium text-base"
                  >
                    Your Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    id="email"
                    className="px-4 py-3 rounded-md"
                  />
                </div>

                <div className="w-100 flex flex-col md:flex-row justify-between items-center  py-4">
                  <div className="w-100 mb-2 md:w-1/2">
                    <Field
                      name="remember"
                      type="checkbox"
                      id="remember"
                      className="rounded-sm text-indigo-900 mr-1"
                    />
                    <label
                      htmlFor="remember"
                      className="text-indigo-900 font-medium text-base"
                    >
                      Keep me Logged in?
                    </label>
                  </div>

                  <a href="#" className="text-indigo-900 underline">
                    Forgot Password?
                  </a>
                </div>

                <div className="w-100 flex flex-row items-center justify-between">
                  <button type="submit" className="btn-secondary w-1/2">
                    Login
                  </button>

                  <Link href="/register">
                    <a className="btn-primary w-1/2 text-center">Register</a>
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
