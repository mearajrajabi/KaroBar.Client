import './Header.css';

import Search from './Search';

const Header = () =>{
    return(
        <div id='header'>

            <div className="titr">
                <span>کاروبار</span> : سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
            </div>

            <Search />

            <div style={{position: 'relative' ,top: '3000px'}}>d</div>

        </div>
    );
}

export default Header;