// import { useNavigate, useDispatch } from "react";
import { useCustomStates } from "../../components/UseStates";
import sideImg from "../../assets/sign.png";
// import axios from "axios";
import Input from "components/fields/Input";
import GoogleAuthButton from "components/GoogleAuthButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSucess, signInFailure } from "../../components/userSlice";


function SignUp () {
  const {
    samePass,
    formData,
    handleNavigate,
    handleFormValueChange
  } = useCustomStates();

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Correct



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('https://gig-intern-gh.onrender.com/api/v1/register', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.sucess === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSucess(data));
      handleNavigate('/interest');
    }
    catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const classStyle = "sm:text-base text-xs";

  return (

    <div
      className="flex flex-row max-h-screen bg-white" >
      <div className="relative hidden md:w-1/2 md:flex md:max-h-screen md:object-cover ">
        <div>

          <h1 className="right-75 helvetica-font absolute bottom-[0px] left-1/2 z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform font-sans text-[30px] font-bold leading-normal text-[white]">
            Discover, Learn and,
            <br />
            Build your skills
            <br />
            while you take on free
            <br />
            Courses
          </h1>
        </div>
        <img
          src={ sideImg }
          alt=" "
          className="object-cover w-full h-full max-w-full"
        />
      </div>

      <div className="flex items-center content-center justify-center w-full max-h-full mx-3 bg-white md:h-full md:w-1/2 sm:mx-6 md:mx-3">
        <div className="flex flex-col w-full space-y-6 bg-white">
          <h1 className="mt-4 ml-6 font-sans text-2xl not-italic font-bold text-black md:text-2xl Roboto-font sm:text-4xl custom-font-settings opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font  sm:text-xl leading-{27.428px} custom-font-settings text-black  ml-6 font-sans text-md font-normal not-italic opacity-60">
            Create a profile and start building
          </h2>
          <div className=" mt-4 h-[1px] w-[100%] flex-grow bg-gray-600"></div>

          <div className="flex gap-6 flex-start">
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-blue-400" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
          </div>

          <form className=" flex-col flex gap-[22px] px-2 h-full">
            <div className="flex-start flex gap-[22px] ">
              <Input
                type="text"
                name="firstName"
                value={ formData.firstName }
                onChange={ handleFormValueChange }
                inputField="First Name"
                className={ classStyle }
              />
              <Input
                type="text"
                name="lastName"
                value={ formData.lastName }
                onChange={ handleFormValueChange }
                inputField="Last Name"
                className={ classStyle }
              />

              <Input
                type="text"
                name="otherName"
                formData={ formData }
                value={ formData.otherName }
                onChange={ handleFormValueChange }
                inputField="Other Name"
                className={ classStyle }

              />
            </div>

            <div className="flex-start flex gap-[22px] px-2 ">
              <Input
                type="email"
                name="email"
                value={ formData.email }
                onChange={ handleFormValueChange }
                inputField="Email"
                className={ classStyle }

              />
              <Input
                type="number"
                name="phoneNumber"
                value={ formData.phoneNumber }
                onChange={ handleFormValueChange }
                inputField="Phone Number"
                className={ classStyle }

              />
            </div>

            <div className="flex-start flex gap-[21px]">

              <div className="relative flex-grow w-full">
                <Input
                  type="password"
                  name="password"
                  value={ formData.password }
                  onChange={ handleFormValueChange }
                  inputField="Password"
                  authPass={ samePass }
                  className={ classStyle }
                >
                </Input>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>

              <div className="relative flex-grow w-full">

                <Input
                  type="password"
                  name="confirmPassword"
                  value={ formData.confirmPassword }
                  onChange={ handleFormValueChange }
                  inputField="Confirm Password"
                  authPass={ samePass }
                  className={ classStyle }

                >
                </Input>
                { !samePass ?
                  <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]">
                    Passwords do not match
                  </p>
                  :
                  <div className="my-[10px]"></div>
                }
              </div>
            </div>

            <div className="flex flex-start">
              <Input
                htmlTag="textarea"
                type="text"
                name="bio"
                placeholder={ `\nI am a software Engineer` }
                value={ formData.bio }
                onChange={ handleFormValueChange }
                inputField="Bio"
                className={ classStyle }
              >
              </Input>
            </div>

            <div className="flex flex-col items-center w-full">
              <button className="w-full" onClick={ handleSubmit }>
                <div
                  className="Helvetica-font leading-{23.838px} mt-[-8px] py-90 rounded-10 flex h-[50px] w-full items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
                >
                  Next
                </div>
              </button>

              <div className="flex items-center mt-2 flex-start">
                <div className="h-[1px] w-[100%] flex-grow bg-blue-500 bg-opacity-60"></div>
                <h2 className="p-1 Roboto-font leading-{19.2px} text-gray-900 font-sans text-[14px] bg-white font-black not-italic opacity-80 ">
                  OR
                </h2>
                <div className="h-[1px] w-[100%] flex-grow bg-blue-500 bg-opacity-60"></div>
              </div>
              <GoogleAuthButton type="button" id="google-btn" text="Continue with Google" />
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default SignUp;
