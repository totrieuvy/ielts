import "./index.scss";

function Dung() {
  return (
    <div className="dung">
      <h1>Thông tin về thầy Dũng</h1>
      <div className="dung__content">
        <div className="dung__content__left">
          <img src="./image/dung.jpg" alt="thay-dung" />
        </div>
        <div className="dung__content__right">
          <h2>4 bằng đại học chính qui</h2>
          <ul className="dung__content__right__ul">
            <li>Ngành ngôn ngữ anh - Khoa sư phạm tiếng anh (Đại học ngoại ngữ - Đại học quốc gia Hà Nội)</li>
            <li>Ngành kinh tế (Đại học Ngoại thương Hà Nội)</li>
            <li>Ngành tài chính (Đại học Ngoại thương Hà Nội)</li>
            <li>Ngành luật kinh tế</li>
          </ul>

          <h2>8.0 IELTS OVERALL</h2>
          <ul className="dung__content__right__ul">
            <li>Listening: 8.5</li>
            <li>Reading: 9.0</li>
            <li>Writing: 7.5</li>
            <li>Speaking: 7.5</li>
          </ul>

          <h2>990 TOEIC</h2>
          <ul className="dung__content__right__ul">
            <li>Gương mặt cựu sinh viên tiêu biểu Đại học Ngoại Ngữ - Đại học Quốc gia hà Nội</li>
            <li>
              Trúng tuyển và làm việc tại công ty đa quốc gia hàng đầu thế giới với mức lương trên $1000 ngay sau khi
              tốt nghiệp đại học
            </li>
            <li>Xuất hiện trên tất cả các báo lớn nhất về giáo dục với câu chuyện truyền cảm hứng</li>
            <li>
              Sở hữu kênh Tiktok hơn 40 nghìn followers về chia sẻ học Tiếng Anh và định hướng nghề nghiệp
              @dungchamhoc27
            </li>
            <li>Nhiều học viên IELTS 7.5 và TOEIC 900+</li>
          </ul>
        </div>
      </div>
      <h1>Bằng cấp của thầy Dũng</h1>
      <div className="dung__certificate">
        <img src="./image/certi.jpg" alt="certificate" />
      </div>
    </div>
  );
}

export default Dung;
