import React from "react";
import { Menu } from "mdi-material-ui";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import links from "../../links";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={s.Header}>
      <nav>
        {links.map((link, index) => (
          <Link className={s.Link} key={index} to={link.to}>
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
      <div className={s.arrow}>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
