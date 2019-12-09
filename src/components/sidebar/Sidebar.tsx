import React from "react";
import { ArrowUp, Earth, Email, GithubCircle, Linkedin, MapMarker, Phone, Skype, Telegram } from "mdi-material-ui";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import links from "../../links";
import avatar from "../../imgs/avatar.jpg";
import PanelMini from "../panel-mini/PanelMini";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className={s.SideBar}>
      <div className={s.wrapper}>
        <div className={s.fio}>
          <span className={s.firstName}>Nikita</span>
          <span className={s.lastName}>Sidorov</span>
          <span className={s.position}>Middle web developer</span>
        </div>
      </div>
      <div className={s.img} />
      <div className={s.wrapper + ' ' + s.content}>
        <PanelMini title="profile">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              dicta, hic ipsa ipsum molestiae voluptatum?
            </span>
          <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores eaque est hic in molestiae nam!
            </span>
        </PanelMini>
        <PanelMini title="contact">
            <span>
              <MapMarker />
              Russia, Belgorod
            </span>
          <span>
              <Phone /> +7 (960) 630-79-66
            </span>
          <span>
              <Earth />
              site
            </span>
          <span>
              <Email />
              workwithme@rambler.ru
            </span>
        </PanelMini>
        <PanelMini title="social media">
            <span>
              <Telegram />
              NikeByNike
            </span>
          <span>
              <Skype />
              workwithme@rambler.ru
            </span>
          <span>
              <GithubCircle />
              <a href="https://github.com/NikeByNike" target="_blank">
                NikeByNike
              </a>
            </span>
          <span>
              <Linkedin />
              workwithme@rambler.ru
            </span>
        </PanelMini>
      </div>
    </div>
  );
};

export default Sidebar;
