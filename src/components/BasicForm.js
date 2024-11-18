import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  
  // There are some methods tro handle the form values, one of those is resetValues, that we "call" after the response of API that that data were received with an 200 for example.
  // Here i'm gonna simulate an asynchronous response with a new Promise

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    handleChange,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    values,
    handleSubmit,
  } = useFormik({
    // the Formik Hook Contains Initial Values and Helper Methods!

    initialValues: {
      // Initial values of Form! It's an OBJECT NOTATION!
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // There is already a method of validation, that we can use YUP SCHEMA and just import here!
    validationSchema: basicSchema,
    // In the Formik hook there is a Function called handleSubmit that we call configure here!
    // Actually the useFormik handle the call of this function after the update of values and validations, we define the function submit!
    onSubmit,
  });
  console.log(errors);

  // console.log(formik);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        value={values.email} // .values === initialValues
        // Here i am setting up that value of input is equals initialValues (email) of Formik Hook!
        onChange={handleChange}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email ? (
        <p className="error">{errors.email}</p>
      ) : (
        ""
      )}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={handleBlur}
        value={values.age} // .values === initialValues
        // Here i am setting up that value of input is equals initialValues (email) of Formik Hook!
        onChange={handleChange}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age ? <p className="error">{errors.age}</p> : ""}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        onBlur={handleBlur}
        value={values.password} // .values === initialValues
        // Here i am setting up that value of input is equals initialValues (email) of Formik Hook!
        onChange={handleChange}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password ? (
        <p className="error">{errors.password}</p>
      ) : (
        ""
      )}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        onBlur={handleBlur}
        value={values.confirmPassword} // .values === initialValues
        // Here i am setting up that value of input is equals initialValues (email) of Formik Hook!
        onChange={handleChange}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword ? (
        <p className="error">{errors.confirmPassword}</p>
      ) : (
        ""
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default BasicForm;
