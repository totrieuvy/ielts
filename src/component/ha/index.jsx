import "./index.scss";

function NgocHa() {
  return (
    <div className="dung">
      <h1>Thông tin về cô Hà</h1>
      <div className="dung__content">
        <div className="dung__content__left">
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/444988876_25567833456196918_732754672809999765_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FcQEechTnaMQ7kNvgGDjSPL&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=ASh-toNVen6_BCxUg7vZZut&oh=00_AYDH0aV6K6UgplK7uW8Kdf4tIvmw4mkfZ_967k6JZ9Grhw&oe=66E76CF2"
            alt="co-ha"
          />
        </div>
        <div className="dung__content__right">
          <h2>900+ TOEIC R-L</h2>
          <h2>350+ TOEIC S-W</h2>
          <h2>C APTIS</h2>
          <ul className="dung__content__right__ul">
            <li>Tốt nghiệp loại Giỏi ngành Ngôn Ngữ Anh hệ chính quy 4 năm trường Đại học Sài Gòn</li>
            <li>Đạt 9.0+ Khóa luận tốt nghiệp đề tài Tiếng Anh</li>
            <li>Giải nghiên cứu Khoa học cấp Khoa đề tài Tiếng Anh</li>
            <li>Nhiều năm kinh nghiệm giảng dạy Tiếng Anh</li>
            <li>Biên dịch viên Anh - Việt chuyên nghiệp</li>
          </ul>
        </div>
      </div>
      <h1>Bằng cấp của cô Hà</h1>
      <div className="dung__certificate">
        <img
          src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/444988876_25567833456196918_732754672809999765_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FcQEechTnaMQ7kNvgGDjSPL&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=ASh-toNVen6_BCxUg7vZZut&oh=00_AYDH0aV6K6UgplK7uW8Kdf4tIvmw4mkfZ_967k6JZ9Grhw&oe=66E76CF2"
          alt="certificate"
        />
      </div>
    </div>
  );
}

export default NgocHa;
