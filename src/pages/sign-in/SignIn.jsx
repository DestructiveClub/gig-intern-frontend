import React from 'react';
import sideImg from "../../assets/sign.png";
import Input from "components/fields/Input";
import GoogleAuthButton from 'components/GoogleAuthButton';
import { useCustomStates } from 'components/UseStates';

function SignIn () {
  const {
    formData,
    handleFormValueChange
  } = useCustomStates();

  // const [ emailFocus, setEmailFocus ] = useState(false);
  // const [ passwordFocus, setPasswordFocus ] = useState(false);
  // const [ email, setEmailValue ] = useState('');
  // const [ password, setPasswordValue ] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };



  const classStyle = "sm:text-base text-xs";

  return (
    <div className='flex justify-center bg-white'>
      <div className='items-end justify-center hidden p-10 md:flex ' style={ {
        backgroundImage: `url(${sideImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 50 + '%',
        height: 100 + 'vh'
      } }>
        <div className='w-[75%] '>
          <h1 className="text-4xl font-bold text-white ">Discover, Learn and Build yours skills while you take on free Courses</h1>
        </div>
      </div>
      <div className='py-14 px-10 md:w-[50%] w-[100%]'>
        <div>
          <h1 className="text-black text-opacity-80 text-4xl font-bold leading-[54.86px]">Sign In To Gig Intern</h1>
          <p className="text-xl font-normal leading-relaxed text-black text-opacity-60">Please input your details as specified below</p>


          <div className='mt-2'>
            <form onSubmit={ handleSubmit } className="py-8 ">
              <div className={ `relative` }>
                <Input
                  type="email"
                  name="email"
                  value={ formData.email }
                  onChange={ handleFormValueChange }
                  inputField="Email"
                  className={ classStyle } />

              </div>

              <div className={ `relative my-6` }>
                <Input
                  type="password"
                  name="password"
                  value={ formData.password }
                  onChange={ handleFormValueChange }
                  inputField="Password"
                  className={ classStyle } />

              </div>
              <div className='flex items-center justify-between'>
                <label className='flex items-center justify-between'>
                  <input type="checkbox" name="" id="" className='accent-blue-400' />
                  <span className="pl-2 text-black text-opacity-70 text-[15px] font-normal">Keep me logged in</span>
                </label>
                <a href="http://accounts.google.com/signup" className="text-blue-400 text-[15px] font-normal leading-tight">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-10 text-white transition duration-200 ease-linear bg-blue-400 rounded-lg hover:bg-black focus:outline-none"
              >
                Sign In
              </button>
            </form>
            <div className='flex items-center justify-center gap-4 mb-6'>
              <div className="w-[268.41px] h-[2px] border border-sky-400 border-opacity-20"></div>
              <p className="w-[24.06px] text-center text-black text-opacity-80 text-sm font-normal">OR</p>
              <div className="w-[268.41px] h-[2px] border border-sky-400 border-opacity-20"></div>
            </div>
            {/* <GoogleLogin /> */ }

            <GoogleAuthButton type="button" id="google-signin-btn" text="Continue with Google" />
            <div className="mt-10 text-center">
              <div className="g-signin2" data-onsuccess="onSignIn"></div>              <a href="/signup" className="text-blue-600 text-sm font-normal leading-[19.20px]">Create an Account</a></div>
          </div>
        </div>
      </div >

    </div >
  );
}

export default SignIn;
