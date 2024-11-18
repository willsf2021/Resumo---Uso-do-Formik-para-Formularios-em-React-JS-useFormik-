import { useField } from "formik";
const CustomSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <select
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

export default CustomSelect;
