import './Search.css';

const Search = () => {
    return(
        <div id='search'>
            <input type="text" class="search-input" placeholder="جستجوی مشاغل..." />
            
            <select name="city" id="city">
                <option value="">مشهد</option>
                <option value="">تهران</option>
                <option value="">اصفهان</option>
                <option value="">تبریز</option>
            </select>
            
            
                <select name="job" id="job">
                <option value="">فروش و بازاریابی</option>
                <option value="">وب، برنامه نویسی و نرم افزار</option>
                <option value="">مالی و حساب داری</option>
                <option value="">تولید و مدیریت محتوا</option>
                </select>
                
                <button className='btn-search'>جستجو کن !</button>
        </div>
    );

}

export default Search;