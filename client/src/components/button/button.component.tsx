import React from "react";

export interface IButton {
  /**
   * Label for the button
   */
  label: string;
  /**
   * Click handler
   *  */
  handleClick?: (e: any) => void;
}

const Button: React.FC<IButton> = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default React.memo(Button);
