import React from 'react';

const AuthButton = ({ title, fullWidth, submit, onClick }) => {
  return (
    <>
      {
        title === 'Sign In' ?
          <div className={`text-center ${!fullWidth && "w-1/2"}`}>
            <p className='pb-2'>Do you already have an account?</p>
            <button type={submit ? "submit" : "button"}
              className="p-2 rounded bg-[#4b4b4b] text-white hover:bg-gray-100 hover:text-zinc-700 hover:border hover:border-[#4b4b4b] focus:outline-none focus:ring  focus:ring-gray-300 w-full" onClick={onClick}>
              {title}
            </button>
          </div> :
          <button type={submit ? "submit" : "button"} className={`p-2 ${!fullWidth && "w-1/2"} rounded border-none outline-none bg-[#b1b61a] text-white hover:bg-[#969b18] hover:text-white hover:border hover:border-[#969b18] focus:outline-none focus:ring  focus:ring-[#969b18] w-full`} onClick={onClick}>
            {title}
          </button>
      }
    </>
  );
};

export default AuthButton;