import React from "react";
import './button.less'

interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const PrimaryButton: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button className="button__primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
