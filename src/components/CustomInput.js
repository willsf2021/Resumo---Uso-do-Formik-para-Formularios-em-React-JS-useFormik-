import { useField } from "formik";
const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );
};

export default CustomInput;
