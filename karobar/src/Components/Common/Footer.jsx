import "./Footer.css";

const Footer = () => {
    return (

        <footer className="main-Footer">
            <div className="main-Footer-Section">
                <div className="Footer-SubIcon-bar border-bottom">
                    <div className="footer-BoxIcon">
                        <img src={require('../../assets/office.png')} alt="این بخش مربوط به ایکون فوتر می باشد" />
                        <span className="Title-IconSub-footer">آشنایی با شرکت‌ها
                        </span>
                    </div>
                    <div className="footer-BoxIcon">
                        <img src={require('../../assets/job (1).png')} alt="این بخش مربوط به ایکون فوتر می باشد" />
                        <span className="Title-IconSub-footer">کشف فرصت‌های شغلی</span>
                    </div>
                    <div className="footer-BoxIcon">
                        <img src={require('../../assets/newspaper (1).png')} alt="این بخش مربوط به ایکون فوتر می باشد" />
                        <span className="Title-IconSub-footer">آگاهی از مشاغل جدید
                        </span>
                    </div>
                </div>
                <div className="Footer-Info-section border-bottom">
                    <div className="footer-menu-Item">
                        <h2 className="Title-menu-Item">کارجویان</h2>
                        <li><a href="#">ورود | ثبت نام</a></li>
                        <li><a href="#">پیامک های اطلاع رسانی</a></li>
                        <li><a href="#">معرفی و آشنایی با شرکت ها</a></li>
                    </div>
                    <div className="footer-menu-Item">
                        <h2 className="Title-menu-Item">کارفرمایان</h2>
                        <li><a href="#">درج آگهی استخدام</a></li>
                        <li><a href="#">ورود به پنل شرکت</a></li>
                        <li><a href="#">تعرفه ی انتشار آگهی</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                    </div>

                    <div className="footer-menu-Item">
                        <img className="Logo" src={require('../../assets/logo.png')} alt="لوگو" />
                        <h2 className="Text-menu-Item">ما را در شبکه های اجتمالی دنبال کنید ...</h2>
                        <div className="footer-icon-media">
                            <div className="media-icon">
                                <img src={require('../../assets/telegram.png')} alt="تلگرام" /><img src={require('../../assets/instagram.png')} alt="اینستا" />
                                <img src={require('../../assets/linkedin.png')} alt="لینکدین" /><img src={require('../../assets/twitter.png')} alt="توییتر" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="Footer-navBottom-law">
                    © تمامی حقوق این سایت مربوط به وبسایت ابزار وردپرس می باشد و صرفا جهت تمرین بازنویسی شده است.
                </div>
            </div>
        </footer>
    )
}
export default Footer;