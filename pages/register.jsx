import Header from "./components/header";
import { Formik, Form, Field, useFormik } from "formik";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.4),rgba(139, 92, 246, 0.6)),url(imgs/animated.svg)",
        }}
        className="h-screen pt-16 bg-cover bg-no-repeat"
      >
        <div className="rounded-lg w-1/3 mx-auto bg-bubbles bg-cover bg-no-repeat p-8 shadow-xl ">
          <h1 className="my-8 font-extrabold text-xl md:text-3xl text-center text-white">
            Create an Account
          </h1>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="w-100 flex flex-col my-2">
                <label
                  htmlFor="name"
                  className="text-white font-medium text-base"
                >
                  Your Name
                </label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  className="px-4 py-3 rounded-md"
                  placeHolder="John Doe"
                />
              </div>

              <div className="w-100 flex flex-col my-2">
                <label
                  htmlFor="email"
                  className="text-white font-medium text-base"
                >
                  Your Email
                </label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  className="px-4 py-3 rounded-md"
                  placeHolder="john@gmai.com"
                />
              </div>

              <div className="w-100 flex flex-col my-2">
                <label
                  htmlFor="email"
                  className="text-white font-medium text-base"
                >
                  Your Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="email"
                  className="px-4 py-3 rounded-md"
                  placeHolder="********"
                />
              </div>

              <div className="w-100 flex flex-row items-center justify-between mt-4">
                <button type="submit" className="btn-secondary w-1/2">
                  Register
                </button>

                <Link href="/register">
                  <a className="btn-primary w-1/2 text-center">Login</a>
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};
export default Register;
