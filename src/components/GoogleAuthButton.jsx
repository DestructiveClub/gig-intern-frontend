// import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
// import { useCustomStates } from 'components/UseStates';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase";
// import { useDispatch } from 'react-redux';
const GoogleAuthButton = ({ type, id, text }) => {
  // const {
  //   formData,
  //   // handleFormValueChange
  // } = useCustomStates();

  // const [ gapi, setGapi ] = useState(null);
  // const [ user, setUser ] = useState(null);


  const handleGoogleSignInClick = async () => {
    // Handle Google Sign-In click here
    // You can use the gapi library or other methods to initiate the sign-in process
    console.log('Google Sign-In button clicked');
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        }),
      });

      if (res.ok) {
        // Successfully signed in and made a request to your backend
        const data = await res.json();
        console.log(data);
      } else {
        // Handle errors appropriately
        console.log('Error:', res.statusText);
      }

      // console.log("User Signed in as:", result);
    } catch (error) {
      console.log("error could not sign in", error);
    }
  };
  // TODO
  // TODO
  return (
    <button type={ type } id={ id } onClick={ handleGoogleSignInClick } className="rounded-[4px]  py-2 flex justify-center border-[1px] border-blue-200 hover:border-sky-200  hover:bg-sky-100 w-full cursor-pointer">
      <p className="text-gray-600 text-[14px] flex gap-1 justify-center">
        <span className="w-[30px] text-2xl">
          <FcGoogle />
        </span>
        { text }
      </p>
    </button>
  );
};

export default GoogleAuthButton;
