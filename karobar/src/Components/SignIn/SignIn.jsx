import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn =() => {
    return(
        <div id="signIn">
             <div className="signupBox-signin">
                <h4>هنوز ثبت نام نکردی؟</h4>
                <Link to='/signup' className='links'>
                <button className='btnsingup-signin'>ثبت نام</button>
                </Link>
            </div>
            <div className="formBox-signin">
                <h2>ورود به عنوان کارجو  در کاروبار</h2>
                <form className='signinForm'>
                    <label>آدرس ایمیل:</label>
                    <br />
                    <input type="email" className='signinInputs' placeholder='آدرس ایمیل خودرا وارد کنید'/>
                    <br />
                    <label>رمز عبور:</label>
                    <br />
                    <input type="text" className='signinInputs' placeholder='رمز عبور خود را وارد کنید'/>
                    <br />
                    <button type='submit' className='signinSubmitBtn'>ورود</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;