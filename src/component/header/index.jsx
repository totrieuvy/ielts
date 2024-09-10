import { Link, NavLink } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img src="./image/logo2.png" width={120} />
        </Link>
        <div className="header__content"></div>
      </div>
      <div className="header__right">
        <div className="header__content__navigation">
          <ul className="header__navigation__ul">
            <li className="header__navigation__li">
              <NavLink className="link" to={"/"}>
                Về lớp học
              </NavLink>
            </li>
            <li className="navigation__li">
              <NavLink className="link" to={"/toeic"}>
                Lớp học TOEIC
              </NavLink>
            </li>
            <li className="navigation__li">
              <NavLink className="link" to={"/ielts"}>
                Lớp học IELTS
              </NavLink>
            </li>
            <li className="navigation__li">
              <NavLink className="link" to={"/result"}>
                Kết quả lớp học
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
