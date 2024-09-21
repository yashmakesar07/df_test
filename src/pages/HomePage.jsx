import React from 'react'

const HomePage = () => {
  return (
    <div className='h-[100%] w-[100%] flex items-center flex-col justify-center'>
        <img src='/public/Images/digitalFlakelogo.png' alt="Logo" className="mb-4 w-30 h-20" /> 
          {/* Adjust the logo path and size */}
          
          {/* Welcome Text */}
          <h2 className="text-m font-light  text-center">
            Welcome to Digital Flake Admin
          </h2>
    </div>
  )
}

export default HomePage