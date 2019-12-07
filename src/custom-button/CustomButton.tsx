import React from "react";
import s from "./style.module.scss";

export interface IPerson {
  id: number;
  title: string;
  description: string;
}

const CustomButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({className, ...props}) => {

  return (
      <button className={`${s.button} ${className ? className : ''}`} {...props} />
  );
};

export default CustomButton;
