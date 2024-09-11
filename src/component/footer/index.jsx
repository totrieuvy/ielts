import "./index.scss";
import { FacebookOutlined, TikTokOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__h2">The DEAF English</h2>
      <div className="footer__content">
        <div className="footer__content__left">
          <h4 className="footer__content__left__h4">Thông tin trung tâm</h4>
          <p>
            <span className="span">Email: </span>abc@gmail.com
          </p>
          <p>
            <span className="span">Hotline: </span>0909111111
          </p>
        </div>
        <div className="footer__content__right">
          <h4 className="footer__content__right__h4">Đăng kí học qua</h4>
          <div className="footer__content__right__icon">
            <FacebookOutlined className="icon" />
            <TikTokOutlined className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
