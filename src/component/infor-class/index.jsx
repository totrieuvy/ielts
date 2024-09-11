import "./index.scss";
import { Button, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";

function InformationClass() {
  const navigate = useNavigate();
  document.title = "The Deaf English";
  return (
    <div className="info">
      <div className="info__intro">
        <div className="info__intro__left">
          <div className="info__intro__left__content">
            <h2 className="info__intro__left__text">Trung tâm Anh Ngữ</h2>
            <h2 className="info__intro__left__text left2">THE DEAF ENGLISH</h2>
          </div>
          <ul className="info__intro__left__ul">
            <li>Nâng ban cấp tốc chỉ sau 1 khóa học</li>
            <li>Chuyên đào tạo IELTS/TOEIC</li>
            <li>Cam kết chất lượng đầu ra</li>
            <li>Tư vấn du học, nghề nghiệp</li>
          </ul>
        </div>
        <div className="info__intro__right">
          <img
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
            width={200}
            height={100}
            alt="image"
          />
        </div>
      </div>
      <h2 className="info__title">Đội ngũ giáo viên</h2>
      <div className="info__teachers">
        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
            />
          }
        >
          <h6 className="card__content">Thầy Trần Việt Dũng</h6>
          <h6 className="card__result card__content">IELTS 8.5</h6>
          <Button type="primary" key="button" onClick={() => navigate("/viet-dung")}>
            Xem chi tiết
          </Button>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/339074484_1280245039256492_69120792184304489_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=mQNqjk0j18cQ7kNvgGpjuJ9&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AfnEAbvwWX-3BGIsvZKOGKf&oh=00_AYDLZt65RGCoj3at2TXu_JztN32RXf_Kh4ELe7BZJ5qy9Q&oe=66E75E69"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Cô Nhật Vi</h6>
          <h6 className="card__result card__content">900+ TOEIC</h6>
          <Button type="primary" key="button" onClick={() => navigate("/nhat-vi")}>
            Xem chi tiết
          </Button>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/444988876_25567833456196918_732754672809999765_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FcQEechTnaMQ7kNvgGDjSPL&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=ASh-toNVen6_BCxUg7vZZut&oh=00_AYDH0aV6K6UgplK7uW8Kdf4tIvmw4mkfZ_967k6JZ9Grhw&oe=66E76CF2"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Cô Ngọc Hà</h6>
          <h6 className="card__result card__content">900+ TOEIC</h6>
          <Button type="primary" key="button" onClick={() => navigate("/ngoc-ha")}>
            Xem chi tiết
          </Button>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/446809804_25567833359530261_6861754978460425122_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3bi6NjDEIg4Q7kNvgGd3MwJ&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AstpP3rInElR0DhHuaWukNa&oh=00_AYDk6OnvrHgxy9Ey_wFL4IvW14G5wlXTgEjQ1H8JzSS5ag&oe=66E77D49"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Cô Quế Xuân</h6>
          <h6 className="card__result card__content">940 TOEIC</h6>
          <Button type="primary" key="button" onClick={() => navigate("/que-xuan")}>
            Xem chi tiết
          </Button>
        </Card>
      </div>

      <h2 className="info__title">Học viên tiêu biểu</h2>
      <div className="info__teachers">
        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
            />
          }
        >
          <h6 className="card__content">Thầy Trần Việt Dũng</h6>
          <h6 className="card__result card__content">IELTS 8.5</h6>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Thầy Trần Việt Dũng</h6>
          <h6 className="card__result card__content">900+ TOEIC</h6>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Thầy Trần Việt Dũng</h6>
          <h6 className="card__result card__content">900+ TOEIC</h6>
        </Card>

        <Card
          className="teacher-card"
          cover={
            <img
              alt="image"
              src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/357406154_9535274083212778_3684510267913135561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bTAGyNyBiIoQ7kNvgE9Ecn2&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AkO_IeOwCoxfBWQBAmPacum&oh=00_AYA9dcO9HlGuJs9GmxiszJ4bYB2CDAWwSF3ibuXUkKWXWQ&oe=66E74094"
              width={310}
              height={310}
            />
          }
        >
          <h6 className="card__content">Thầy Trần Việt Dũng</h6>
          <h6 className="card__result card__content">940 TOEIC</h6>
        </Card>
      </div>

      <h2 className="info__title">Báo chí nói gì về chúng tôi</h2>
      <div className="info__teachers">
        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" />}>
          <h6 className="card__content">Đại học quốc gia ngoại ngữ</h6>
          <Link to="https://ulis.vnu.edu.vn/guong-mat-cuu-sinh-vien-chang-trai-mat-thinh-luc-lay-4-bang-dai-hoc-trong-65-nam-dat-ielts-8-0-toeic-990/?mibextid=Zxz2cZ&fbclid=IwY2xjawFL8MxleHRuA2FlbQIxMAABHY7XmMzhQ_pky2sVsju2DCpRPE51EMOsrKTrnbxu6pNtKlAKlqF70TbLeQ_aem_KcaUVGBCSZgjOq4NzDEwog">
            Chàng trai mất thính lực lấy 4 bằng đại học trong 6,5 năm, đạt IELTS 8.0, TOEIC 990
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Vietnam net</h6>
          <Link to="https://vietnamnet.vn/me-ban-nuoc-mia-bo-la-xe-om-chang-trai-diec-kiem-tien-theo-duoi-4-bang-dai-hoc-2189138.html?fbclid=IwY2xjawFL9PRleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Mẹ bán nước mía, bố làm xe ôm, chàng trai tiếc chinh phục 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">VN Express</h6>
          <Link to="https://vnexpress.net/chang-trai-diec-co-4-bang-dai-hoc-4656597.html?fbclid=IwY2xjawFL9kpleHRuA2FlbQIxMAABHQ1J8jhnm7yC9iYHqfVW1V5P5UGM2nORJG7sdmVVNPkgRU5d5wNlbPCBUA_aem_8V4NHYRDTRLQ-QJ_uEX54w">
            Chàng trai điếc có 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Đại biểu nhân dân</h6>
          <Link to="https://daibieunhandan.vn/chang-trai-mat-thinh-luc-lay-4-bang-dai-hoc-trong-6-5-nam-dat-ielts-8-0-toeic-990-post342471.html?fbclid=IwY2xjawFL92ZleHRuA2FlbQIxMAABHXtxtaBg63QibEyo1GqaACKHUzUBpoKEXsCrCDyBjMbh9WAJf2NeQpnu0g_aem_gjpb_afpkQPIEJqsBh-tSw">
            Chàng trai mất thính lực lấy 4 bằng đại học trong 6,5 năm, đạt IELTS 8.0, TOEIC 990
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Dân Việt</h6>
          <Link to="https://danviet.vn/nam-sinh-7-nam-nhan-4-bang-dai-hoc-toan-truong-hot-tu-tra-hoc-phi-ielts-80-va-toeic-990-20230909092155505.htm?fbclid=IwY2xjawFL_TZleHRuA2FlbQIxMAABHe2NlwG5aPwqAMnV3ZvX4h_tbdX1kG8HklGC52l4xpcfiQl5qacoGhL5Xw_aem_QtKUEn09U9WAffQkzbRe-g">
            Nam sinh 7 năm nhận 4 bằng đại học trường hot, làm thêm trả học phí, IELTS 8.0 và TOEIC 990{" "}
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Dân trí</h6>
          <Link to="https://dantri.com.vn/nhip-song-tre/tu-chang-trai-khiem-thinh-den-thay-giao-day-tieng-anh-co-4-bang-dai-hoc-20231007194201732.htm?fbclid=IwY2xjawFMAGxleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Từ chàng trai khiếm thính đến thầy giáo dạy tiếng Anh có 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Trí Thức và Cuộc Sống</h6>
          <Link to="https://kienthuc.net.vn/doi-song-giai-tri/nam-sinh-ielts-80-toeic-tuyet-doi-990-hoc-cung-luc-3-bang-dai-hoc-toan-nganh-hot-lo-danh-tinh-nhieu-nguoi-cang-ne-1903465.html?fbclid=IwY2xjawFMAWBleHRuA2FlbQIxMAABHSfyp_jajPWcNCTgDFqdK6ftzmYGI_BHQzTP4W3A3klBXQtBEc2EQdjHew_aem_vQ4V9lMxQ4jXYJI3ZM0OWw">
            Nam sinh IELTS 8.0, TOEIC tuyệt đối 990, học cùng lúc 3 bằng đại học toàn ngành HOT, lộ danh tính nhiều
            người càng nể
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h6 className="card__content">Thanh niên</h6>
          <Link to="https://thanhnien.vn/chang-trai-khiem-thinh-tu-chi-tra-hoc-phi-chinh-phuc-4-bang-dai-hoc-185231004200301331.htm?fbclid=IwY2xjawFMAbNleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Chàng trai khiếm thính tự chi trả học phí chinh phục 4 bằng đại học
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default InformationClass;
