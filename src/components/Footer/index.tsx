import { FacebookFilled, InstagramOutlined, TwitterOutlined, YoutubeFilled, TikTokOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div className="w-full border-t-[1px] border-solid border-s-[#0505050f] pt-8 pb-8 bg-[url('/footer/footer.png')] bg-no-repeat bg-bottom">
            <div className="max-w-screen-lg mx-auto">
                <div className="w-full">
                    <iframe
                        name="f386516c1b2133c14"
                        width="1000px"
                        height="1000px"
                        data-testid="fb:like Facebook Social Plugin"
                        title="fb:like Facebook Social Plugin"
                        frameBorder="0"
                        allowTransparency={true}
                        allowFullScreen={true}
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://web.facebook.com/v20.0/plugins/like.php?action=like&amp;app_id=203430341284880&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df843dcaaf32c90bc9%26domain%3Dstudy4.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstudy4.com%252Ff1f362e58506e4b5b%26relation%3Dparent.parent&amp;container_width=1145&amp;href=https%3A%2F%2Ffacebook.com%2Fstudy4.support&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;size=small&amp;width="
                        style={{
                            border: 'none',
                            visibility: 'visible',
                            width: '150px',
                            height: '28px',
                        }}
                    ></iframe>
                </div>
                <div className="w-full flex">
                    <div className="w-1/4">
                        <div>
                            <img src="/logo/study4_logo.png" alt="" className="h-[30px] inline-block" />
                            <small className="inline-block ml-2">©</small>
                        </div>

                        <div className="pt-3">
                            <a className="inline-block w-8" target="_blank" href="https://www.facebook.com/study4.support">
                                <FacebookFilled className="text-[24px] text-[var(--social-icon)]" />
                            </a>
                            <a className="inline-block w-8" target="_blank" href="https://www.instagram.com/study4.official">
                                <InstagramOutlined className="text-[24px] text-[var(--social-icon)]" />
                            </a>
                            <a className="inline-block w-8" target="_blank" href="https://x.com/study4Official">
                                <TwitterOutlined className="text-[24px] text-[var(--social-icon)]" />
                            </a>
                            <a className="inline-block w-8" target="_blank" href="https://www.youtube.com/@STUDY4Official">
                                <YoutubeFilled className="text-[24px] text-[var(--social-icon)]" />
                            </a>
                            <a className="inline-block w-8" target="_blank" href="https://www.tiktok.com/@study4.ielts">
                                <TikTokOutlined className="text-[24px] text-[var(--social-icon)]" />
                            </a>
                        </div>
                    </div>
                    <div className="w-1/4 text-[14px]">
                        <h1 className="font-bold text-[16px]">Về Study4</h1>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Giới thiệu
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Liên hệ
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Điều khoản bảo mật
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Điều khoản sử dụng
                        </a>
                    </div>

                    <div className="w-1/4 text-[14px]">
                        <h1 className="font-bold text-[16px]">Tài nguyên</h1>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Thư viện đề thi
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Blog
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Kho tài liệu
                        </a>
                    </div>

                    <div className="w-1/4 text-[14px]">
                        <h1 className="font-bold text-[16px]">Chính sách chung</h1>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Hướng dẫn sử dụng
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Hướng dẫn thanh toán
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Điều khoản và Điều Kiện Giao Dịch
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Chính sách kiểm hàng
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Chính sách giao, nhận hàng
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Phản hồi, khiếu nại
                        </a>
                        <a href="" className="text-[var(--social-icon)] hover:underline w-full block">
                            Chính sách chuyển đổi, hoàn hủy
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="font-bold text-[16px]">Thông tin doanh nghiệp</h1>
                    <p className="text-[14px] text-[var(--social-icon)]">
                        CÔNG TY TNHH CÔNG NGHỆ A PLUS
                        <br />
                        Điện thoại liên hệ/Hotline: 096 369 5525
                        <br />
                        Email: study4.team@gmail.com
                        <br />
                        Địa chỉ trụ sở: Số 15, Ngõ 208 Giải Phóng, Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
                        <br />
                        Giấy chứng nhận Đăng ký doanh nghiệp số: 0109675459 do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp
                        <br />
                        Ngày cấp phép: 17/06/2021 CS1: TRUNG TÂM NGOẠI NGỮ STUDY4 - Số 17, Ngõ 208 Giải Phóng, Phường Phương Liệt, Quận Thanh Xuân,
                        Thành phố Hà Nội, Việt Nam - Quyết định cho phép Trung tâm ngoại ngữ hoạt động số 2654/QĐ-SGDĐT Hà Nội
                    </p>

                    <h1 className="text-[14px] text-[var(--social-icon)] text-center mt-4">
                        STUDY4.COM © Bản quyền của Công ty TNHH Công Nghệ A Plus.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
