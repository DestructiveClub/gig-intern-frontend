import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
import unsplash from "../../assets/unsplash.png";
import Vector from "../../assets/Vector.png";
import Card from "components/card/CardButton";


const InterestPage = () => {

  // Define a state to manage the selected interests
  const [ selectedInterests, setSelectedInterests ] = useState([]);

  // Define a function to handle the click event on a card
  const handleCardClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      // If it's not selected, add it to the list
      setSelectedInterests([ ...selectedInterests, interest ]);
    }
    console.log(selectedInterests);
  };

  // List of interests
  const interestsList = [
    "FrontEnd Development",
    "BackEnd Development",
    "FullStack Development",
    "Mobile development",
    "Project Manager",
    "Team Lead",
    "Machine Learning",
    "Data Analysis",
  ];

  return (
    <div className="flex flex-col max-h-screen pr-4 bg-white md:flex-row max-w-screen">
      <div className="relative hidden px-0 md:w-1/2 md:flex">
        <img src={ unsplash } alt="" className="w-full max-w-screen" />
        <h1 className=" right-75 bottom-68 helvetica-font absolute left-1/2 top-1/2 z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform font-sans text-[30px] font-bold leading-normal text-[#F6FBFF]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="gap-{30px} flex w-1/2 flex-col items-start  bg-white">
        <div className="flex flex-col space-y-6 ">
          <div className="relative flex gap-2">

            <NavLink to="/signup">
              <img className="absolute w-5 h-5 ml-6" src={ Vector } alt="" />
            </NavLink>

            <h1 className="Roboto-font leading-{54.856px} custom-font-settings  text-black ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
              Welcome To Gig Intern
            </h1>
          </div>
          <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black ml-6 mt-4 font-sans text-[20px] font-normal not-italic opacity-60">
            Select your roles and interests
          </h2>
          <div className="ml-6 h-[1px] w-[70%] flex-grow bg-[#D9D9D9]"></div>

          <div className="flex flex-start">
            <div className="ml-6 h-[6px] w-[70%] flex-grow rounded-md bg-blue-400"></div>
            <div className="ml-6 h-[6px] w-[70%] flex-grow rounded-md bg-blue-400"></div>
            <div className="ml-6 h-[6px] w-[70%] flex-grow rounded-md bg-gray-600"></div>
            <div className="ml-6 h-[6px] w-[70%] flex-grow rounded-md bg-gray-600"></div>
          </div>

          <div className="ml-6">
            <div className=" relative mb-4 h-[60px] w-[580px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
              <label
                htmlFor="text-input"
                className="Roboto-font leading-{19.2px}  text-black absolute left-[24px] top-[-12px] bg-white px-2 font-sans text-[14px] font-normal not-italic opacity-80"
              >
                Select your role
              </label>
              <input
                type="dropdown"
                color="blue"
                placeholder="FullStack Web Developer"
                className="Roboto-font ml-6 mt-6 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
              />

            </div>

            <h1 className="Helvetica-font custom-font-settings text-black leading-{41.142px} font-sans text-[30px] font-bold not-italic opacity-80">
              Select your interests
            </h1>
          </div>

          <form className="ml-6">
            <div className="flex-start flex flex-shrink-0 gap-[10px]">
              { interestsList.map((interest) => (

                <Card
                  key={ interest }
                  interest={ interest }
                  onClick={ handleCardClick }
                />
              ))
              }
            </div>
            <div className="flex-start flex flex-shrink-0 gap-[10px]">
              <div color="blue" className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="text-center absolute font-sf-pro-text  ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  FrontEnd Development
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500">
                  BackEnd Development
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  FullStack Development
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px] ">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Product Management
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Product Design
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  UI/UX Design
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Content Marketing
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Motion Designer
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Copy-Writing
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Podcast Management
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Mobile App Dev
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Software Development
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Cyber Security
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500 ">
                  Mobile App Dev
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-blue-500">
                  Public Relations
                </text>
              </div>
            </div>
          </form>

          <div className="flex flex-col items-center ml-6">
            <NavLink
              to="/courses"
              // onClick={ handleSubmit }
              className="Helvetica-font leading-{23.838px} py-90 rounded-10 flex h-[50px] w-[500px] items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
            >
              Next
            </NavLink>

            <div className="flex items-center mt-2 flex-start">
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
              <h2 className="p-1 Roboto-font leading-{19.2px} text-gray-900 font-sans text-[14px] bg-white font-black not-italic opacity-80 ">
                OR
              </h2>
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
            </div>

            <button className="py-90 rounded-10 my-4 flex  h-[40px] w-[500px] items-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10">
              <img className="h-[20px] w-[20px]" src={ Google } alt="" />
              <h1 className="Roboto-font justify-center items-center leading-{19.2px} text-gray-900 mb-14 mt-14 font-sans text-[12px] font-bold not-italic opacity-60">
                continue with Google
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterestPage;
