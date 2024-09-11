import "./index.scss";

function QueXuan() {
  return (
    <div className="dung">
      <h1>Thông tin về cô Xuân</h1>
      <div className="dung__content">
        <div className="dung__content__left">
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/446809804_25567833359530261_6861754978460425122_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bi6NjDEIg4Q7kNvgGd3MwJ&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AstpP3rInElR0DhHuaWukNa&oh=00_AYDk6OnvrHgxy9Ey_wFL4IvW14G5wlXTgEjQ1H8JzSS5ag&oe=66E77D49"
            alt="co-xuan"
          />
        </div>
        <div className="dung__content__right">
          <h2>900+ TOEIC</h2>
          <ul className="dung__content__right__ul">
            <li>Tốt nghiệp cử nhân ngành Ngôn Ngữ Anh, hệ chính quy 4 năm đại học Sài Gòn.</li>
            <li>Chứng chỉ nghiệp vụ sư phạm Tiếng Anh</li>
            <li>Chứng chỉ giảng dạy Tiếng Anh TESOL</li>
            <li>Nhiều năm kinh nghiệm giảng dạy Tiếng Anh</li>
            <li>Đạt giải cuộc thi Hùng biện Tiếng Anh cấp tỉnh 2014</li>
          </ul>
        </div>
      </div>
      <h1>Bằng cấp của cô Xuân</h1>
      <div className="dung__certificate">
        <img
          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/446809804_25567833359530261_6861754978460425122_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bi6NjDEIg4Q7kNvgGd3MwJ&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AstpP3rInElR0DhHuaWukNa&oh=00_AYDk6OnvrHgxy9Ey_wFL4IvW14G5wlXTgEjQ1H8JzSS5ag&oe=66E77D49"
          alt="certificate"
        />
      </div>
    </div>
  );
}

export default QueXuan;
