import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () =>{
    return(
        <div id="signUp">
            <div className="formBox-signup">
                <h2>ثبت نام به عنوان کارجو در کاروبار</h2>
                <form className='signupForm'>
                    <label>نام و نام خانوادگی:</label>
                    <br />
                    <input type="text" className='signupInputs' placeholder='مثلا: مهدی حیرانی'/>
                    <br />
                    <label>آدرس ایمیل:</label>
                    <br />
                    <input type="email" className='signupInputs' placeholder='آدرس ایمیل خودرا وارد کنید'/>
                    <br />
                    <label>انتخاب رمز عبور:</label>
                    <br />
                    <input type="text" className='signupInputs' placeholder='رمز عبور خود را وارد کنید'/>
                    <br />
                    <label>تکرار رمز عبور:</label>
                    <br />
                    <input type="text" className='signupInputs' placeholder='رمز عبور خود را تکرار کنید'/>
                    <br />
                    <button type='submit' className='signupSubmitBtn'>ثبت نام</button>
                </form>
            </div>
            <div className="signinBox-signup">
                <h4>قبلا ثبت نام کردی؟</h4>
                <Link to='/signin' className='links'>
                    <button className='btnsingin-signup'>ورود</button>
                </Link>
            </div>
        </div>
    );
}

export default SignUp;