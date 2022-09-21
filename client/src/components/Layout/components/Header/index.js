import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import NavBar from "./NavBar";
import Search from "@/components/General/Search";

const cx = classNames.bind(styles);

function Header() {
  const [show, setShow] = useState(false);
  let { name } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 244);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={require("@/assets/img/Logo.png")} alt="" />
            Levart
          </Link>
        </div>
        <div className={cx("search-navbar")}>
          {name !== undefined ? (
            <Search tippyWidth={"30vw"} />
          ) : show ? (
            <Search tippyWidth={"30vw"} />
          ) : (
            <div></div>
          )}

          <div className={cx("action")}>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
