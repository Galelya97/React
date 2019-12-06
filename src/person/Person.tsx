import React, {useState} from "react";
import styles from "./style.module.scss";

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
      <h3 onClick={handleClick}>{person.title}</h3>
        <span>{styles.row}</span>
      <br />
      <p>{person.description}</p>
        <button onClick={handleClick2}>
            Klick
        </button>
    </div>
  );
};

export default Person;
