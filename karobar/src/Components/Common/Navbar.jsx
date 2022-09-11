import './Navbar.css';
const Navbar = () => {
    
    window.addEventListener('scroll', ()=>{
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY>0);
    });

    return(
        
        <nav className='nav'>
            {/* ---------- LOGO-------- */}
            <div className='logo-background'>
                <div className="nav-logo"></div>
            </div>
            

            {/* ---------- ITEMS ------ */}
            <div className="nav-item">
                <ul className='items'>
                    <li>صفحه اصلی</li>
                    <li>رزومتو بساز</li>
                    <li>جستجوی مشاغل</li>
                </ul>
            </div>


            {/*----------- SIGNS ------- */}
            <div className="nav-sign">
                <ul>
                    <li className='signs sign-up'>
                        <span className='tooltip'>برای ثبت نام در سایت کلید کنید</span>
                        <span>ثبت نام</span>
                    </li>
                    <li className="signs sign-in">
                        <span className='tooltip'>برای ورود به حساب کاربری خود کلید کنید</span>
                        <span>ورود</span>
                    </li>
                </ul>
            </div> 
            </nav>

    );
}

export default Navbar;