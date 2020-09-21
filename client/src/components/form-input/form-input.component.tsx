import React from "react";

export interface IFormInput {
  /**
   * Value for the input contorl
   */
  value?: string | number;
  /**
   * Label for the input control
   */

  label: string;
  /**
   *     Type for the input control
   */

  type: string;
  /**
   * Change Handler
   */
  handleChange: (e: any) => void;
  /**
   * Is the form input element required
   */
  required?: boolean;
}

const FormInput: React.FC<IFormInput> = ({
  label,
  handleChange,
  ...otherProps
}) => {
  console.log(`Re-rendering Form Input ::: ${label}`);
  return (
    <div className="form-group">
      <label className="label"> {label} </label>
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default React.memo(FormInput);
