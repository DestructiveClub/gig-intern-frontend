import React, { useState } from 'react';
import ToggleIcon from 'components/icons/EyeToggleIcon';
// import { useCustomStates } from '../UseStates';
// import { useCustomStates } from "../../pages/sign-up/UseStates.jsx";



const Input = ({
  name,
  type,
  value,
  onChange,
  htmlTag,
  inputField,
  authPass,
  placeholder,
  required,
  className,
}) => {
  // const { handleFormValueChange } = useCustomStates();
  const [ boolValue, setBoolValue ] = useState(false);
  // Determine the input type based on the "type" prop
  // const Data = { ...formData };


  const [ passVisibility, setPassVisibility ] = useState(false);
  const inputType = passVisibility ? "text" : type;

  const handlePasswordVisibility = () => {
    setPassVisibility(!passVisibility);
    // console.log(value)
  };

  const handleFocus = () => {
    setBoolValue(true);
  };

  const handleBlur = () => {
    setBoolValue(false);
  };

  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };



  // Determine the border class based on "authPass" and "focus" props
  const borderClass =
    type === "password" && authPass !== undefined ?
      (boolValue && authPass
        ? 'transition-[border] ease-in duration-[200ms] border-blue-400'
        : !authPass
          ? 'border-red-600 transition-[border] ease-in duration-[500ms]'
          : 'border-gray-300'
      ) : (
        boolValue ?
          'transition-[border] ease-in duration-[200ms] border-blue-400'
          : "border-gray-300"
      );

  return (
    <>
      { required && value === undefined && <div className='text-red-600'>Required Field</div> }
      <label className={ ` ${htmlTag === "textarea" ? "relative mb-2 h-[100px]  rounded-lg border  flex flex-grow w-full" : "relative flex flex-grow w-full"}` }>
        { htmlTag === "textarea" ?
          <textarea
            type={ inputType }
            name={ name }
            value={ value }
            onChange={ handleInputChange }
            placeholder={ !boolValue ? placeholder : "" }
            required={ required }
            className={ `h-full w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${className} ${borderClass}` }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
          // autoComplete='off'
          /> :
          <input
            type={ inputType }
            name={ name }
            value={ value }
            onChange={ handleInputChange }
            placeholder={ !boolValue ? placeholder : "" }
            required={ required }
            className={ ` h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${className} ${borderClass}` }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
            autoCapitalize='on'
          />

        }
        <span
          className={ `absolute left-2 top-2 text-opacity-80 transition-all ${boolValue || value
            ? 'top-[-8px] transition-all ease-in-out duration-[500ms] bg-white px-2 sm:text-xs md: text-[10px] text-blue-400'
            : `text-base text-gray-600 text-opacity-80 ${className}`
            }` }
        >
          { inputField }
        </span>
        {
          type === "password" && (
            <ToggleIcon visibility={ passVisibility } onClick={ handlePasswordVisibility } />
          )
        }
      </label>
    </>
  );
};



export default Input;
