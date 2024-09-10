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
            <h1 className="info__intro__left__text">Trung tâm Anh Ngữ</h1>
            <h1 className="info__intro__left__text left2">THE DEAF ENGLISH</h1>
          </div>
          <ul className="info__intro__left__ul">
            <li>Nâng ban cấp tốc chỉ sau 1 khóa học</li>
            <li>Chuyên đào tạo IELTS/TOEIC</li>
            <li>Cam kết chất lượng đầu ra</li>
            <li>Tư vấn du học, nghề nghiệp</li>
          </ul>
        </div>
        <div className="info__intro__right">
          <img src="./image/dung2.png" alt="image" />
        </div>
      </div>
      <h2 className="info__title">Đội ngũ giáo viên</h2>
      <div className="info__teachers">
        <Card
          className="teacher-card"
          cover={<img alt="image" src="./image/dung.jpg" />}
          actions={[
            <Button type="primary" key="button" onClick={() => navigate("/viet-dung")}>
              Xem chi tiết
            </Button>,
          ]}
        >
          <h3 className="card__content">Thầy Trần Việt Dũng</h3>
          <h3 className="card__result card__content">IELTS 8.5</h3>
        </Card>

        <Card
          className="teacher-card"
          cover={<img alt="image" src="./image/vi.jpg" width={310} height={310} />}
          actions={[
            <Button type="primary" key="button" onClick={() => navigate("/nhat-vi")}>
              Xem chi tiết
            </Button>,
          ]}
        >
          <h3 className="card__content">Cô Nhật Vi</h3>
          <h3 className="card__result card__content">900+ TOEIC</h3>
        </Card>

        <Card
          className="teacher-card"
          cover={<img alt="image" src="./image/ha.jpg" width={310} height={310} />}
          actions={[
            <Button type="primary" key="button" onClick={() => navigate("/ngoc-ha")}>
              Xem chi tiết
            </Button>,
          ]}
        >
          <h3 className="card__content">Cô Ngọc Hà</h3>
          <h3 className="card__result card__content">900+ TOEIC</h3>
        </Card>

        <Card
          className="teacher-card"
          cover={<img alt="image" src="./image/quexuan.jpg" width={310} height={310} />}
          actions={[
            <Button type="primary" key="button" onClick={() => navigate("/que-xuan")}>
              Xem chi tiết
            </Button>,
          ]}
        >
          <h3 className="card__content">Cô Quế Xuân</h3>
          <h3 className="card__result card__content">940 TOEIC</h3>
        </Card>
      </div>

      <h2 className="info__title">Học viên tiêu biểu</h2>
      <div className="info__teachers">
        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" />}>
          <h3 className="card__content">Thầy Trần Việt Dũng</h3>
          <h3 className="card__result card__content">IELTS 8.5</h3>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Thầy Trần Việt Dũng</h3>
          <h3 className="card__result card__content">900+ TOEIC</h3>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Thầy Trần Việt Dũng</h3>
          <h3 className="card__result card__content">900+ TOEIC</h3>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Thầy Trần Việt Dũng</h3>
          <h3 className="card__result card__content">940 TOEIC</h3>
        </Card>
      </div>

      <h2 className="info__title">Báo chí nói gì về chúng tôi</h2>
      <div className="info__teachers">
        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" />}>
          <h3 className="card__content">Đại học quốc gia ngoại ngữ</h3>
          <Link to="https://ulis.vnu.edu.vn/guong-mat-cuu-sinh-vien-chang-trai-mat-thinh-luc-lay-4-bang-dai-hoc-trong-65-nam-dat-ielts-8-0-toeic-990/?mibextid=Zxz2cZ&fbclid=IwY2xjawFL8MxleHRuA2FlbQIxMAABHY7XmMzhQ_pky2sVsju2DCpRPE51EMOsrKTrnbxu6pNtKlAKlqF70TbLeQ_aem_KcaUVGBCSZgjOq4NzDEwog">
            Chàng trai mất thính lực lấy 4 bằng đại học trong 6,5 năm, đạt IELTS 8.0, TOEIC 990
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Vietnam net</h3>
          <Link to="https://vietnamnet.vn/me-ban-nuoc-mia-bo-la-xe-om-chang-trai-diec-kiem-tien-theo-duoi-4-bang-dai-hoc-2189138.html?fbclid=IwY2xjawFL9PRleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Mẹ bán nước mía, bố làm xe ôm, chàng trai tiếc chinh phục 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">VN Express</h3>
          <Link to="https://vnexpress.net/chang-trai-diec-co-4-bang-dai-hoc-4656597.html?fbclid=IwY2xjawFL9kpleHRuA2FlbQIxMAABHQ1J8jhnm7yC9iYHqfVW1V5P5UGM2nORJG7sdmVVNPkgRU5d5wNlbPCBUA_aem_8V4NHYRDTRLQ-QJ_uEX54w">
            Chàng trai điếc có 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Đại biểu nhân dân</h3>
          <Link to="https://daibieunhandan.vn/chang-trai-mat-thinh-luc-lay-4-bang-dai-hoc-trong-6-5-nam-dat-ielts-8-0-toeic-990-post342471.html?fbclid=IwY2xjawFL92ZleHRuA2FlbQIxMAABHXtxtaBg63QibEyo1GqaACKHUzUBpoKEXsCrCDyBjMbh9WAJf2NeQpnu0g_aem_gjpb_afpkQPIEJqsBh-tSw">
            Chàng trai mất thính lực lấy 4 bằng đại học trong 6,5 năm, đạt IELTS 8.0, TOEIC 990
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Dân Việt</h3>
          <Link to="https://danviet.vn/nam-sinh-7-nam-nhan-4-bang-dai-hoc-toan-truong-hot-tu-tra-hoc-phi-ielts-80-va-toeic-990-20230909092155505.htm?fbclid=IwY2xjawFL_TZleHRuA2FlbQIxMAABHe2NlwG5aPwqAMnV3ZvX4h_tbdX1kG8HklGC52l4xpcfiQl5qacoGhL5Xw_aem_QtKUEn09U9WAffQkzbRe-g">
            Nam sinh 7 năm nhận 4 bằng đại học trường hot, làm thêm trả học phí, IELTS 8.0 và TOEIC 990{" "}
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Dân trí</h3>
          <Link to="https://dantri.com.vn/nhip-song-tre/tu-chang-trai-khiem-thinh-den-thay-giao-day-tieng-anh-co-4-bang-dai-hoc-20231007194201732.htm?fbclid=IwY2xjawFMAGxleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Từ chàng trai khiếm thính đến thầy giáo dạy tiếng Anh có 4 bằng đại học
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Trí Thức và Cuộc Sống</h3>
          <Link to="https://kienthuc.net.vn/doi-song-giai-tri/nam-sinh-ielts-80-toeic-tuyet-doi-990-hoc-cung-luc-3-bang-dai-hoc-toan-nganh-hot-lo-danh-tinh-nhieu-nguoi-cang-ne-1903465.html?fbclid=IwY2xjawFMAWBleHRuA2FlbQIxMAABHSfyp_jajPWcNCTgDFqdK6ftzmYGI_BHQzTP4W3A3klBXQtBEc2EQdjHew_aem_vQ4V9lMxQ4jXYJI3ZM0OWw">
            Nam sinh IELTS 8.0, TOEIC tuyệt đối 990, học cùng lúc 3 bằng đại học toàn ngành HOT, lộ danh tính nhiều
            người càng nể
          </Link>
        </Card>

        <Card className="teacher-card" cover={<img alt="image" src="./image/dung.jpg" width={310} height={310} />}>
          <h3 className="card__content">Thanh niên</h3>
          <Link to="https://thanhnien.vn/chang-trai-khiem-thinh-tu-chi-tra-hoc-phi-chinh-phuc-4-bang-dai-hoc-185231004200301331.htm?fbclid=IwY2xjawFMAbNleHRuA2FlbQIxMAABHWFNJlw0jicKsakRhjcD0H04JPZ8Nq2j6WU_ZWIhvoPC7Qug4citNNFBVg_aem_pdgAW9iemguynz-Gg3fOCg">
            Chàng trai khiếm thính tự chi trả học phí chinh phục 4 bằng đại học
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default InformationClass;
