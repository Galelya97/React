import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

interface Props {
}

const Header: React.FC<Props> = () => {

  return (
    <header className={s.Header}>
      <nav>
          <Link to={'/about'}>
            Обо мне
          </Link>
          <Link to={'/projects'}>
            Мои проекты
          </Link>
          <Link to={'/skils'}>
            Навыки
          </Link>
      </nav>
    </header>
  );
};

export default Header;
