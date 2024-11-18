import { useField } from "formik";
const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );
};

export default CustomCheckbox;
