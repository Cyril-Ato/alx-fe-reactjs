import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("User registered:", data);
      alert("User registered successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Failed to register user.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-4 p-4 border rounded-md w-80 mx-auto mt-10">
          <h2 className="text-xl font-bold">User Registration (Formik)</h2>

          <div>
            <label className="block">Username</label>
            <Field name="username" type="text" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block">Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block">Password</label>
            <Field name="password" type="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
