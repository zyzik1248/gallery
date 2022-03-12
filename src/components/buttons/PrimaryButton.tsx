import React from "react";

import "./button.less";

interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} className="button__primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
