import React from "react";
import "./Checkbox.css"; // Import the CSS file for styling
import { Field } from "formik";

function Checkbox({ label, checked, onChange, name }) {
  // const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    // setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className="mb-16">
      <label className="label-text font-league bold font-20">{label}</label>
      <label className="switch">
        <Field name={name}>
          {({ field, form }) => (
            <input
              type="checkbox"
              checked={form.values[name]}
              onChange={handleChange}
            />
          )}
        </Field>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Checkbox;
