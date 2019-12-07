import React, {useState} from "react";
import styles from "./style.module.scss";
import CustomButton from "../custom-button/CustomButton";

export interface IPerson {
    id: number;
  title: string;
  description: string;
}

const Person: React.FC<{ person: IPerson }> = ({ person }) => {
    const [flag, setFlag] = useState(false);

    const handleClick = () => {
        setFlag(!flag);
    };

    const handleClick2= () => {
        setFlag(false);
    };

  return (
    <div className={`${styles.card} ${flag ? styles.cliced : ''}`}>
      <h3>{person.title}</h3>
      <p>{person.description}</p>
       <CustomButton children="Klick" onClick={handleClick}/>
    </div>
  );
};

export default Person;
