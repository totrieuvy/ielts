import { Link, NavLink } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img
            src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/438305488_1120474259123204_5879213583446500616_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=godXrO0cdM0Q7kNvgGDieY5&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=AVNoNWX3VGD-RQ6amrrFN5E&oh=00_AYChqwid4tQFCcxmyUcbhBvIhmyL-OY-3uPD_h1DH7D9bg&oe=66E726BF"
            width={120}
          />
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
