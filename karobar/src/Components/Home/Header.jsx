import './Header.css';

import Search from '../Common/Search';

const Header = () =>{


    return(
        <div id='header'>

            <div className="titr">
                <span>کاروبار</span> : سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران
            </div>

            <Search />

            </div>

            
    );
}

export default Header;