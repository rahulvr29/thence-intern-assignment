import React from 'react'
import Logo from  '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-5'>
      <div className='px-10 flex items-center justify-between border border-[#EAEAEA] rounded-full'>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
        <Link to="/entry-form">
  <button className='p-5 px-8 m-4 text-black bg-white rounded-full hover:bg-gray-200 border border-[#EAEAEA] hover:border-transparent'>
    Get Projects
  </button>
</Link>
            <button className='p-5 px-7 m-4 text-white bg-black rounded-full hover:bg-[#4E4E4E] '>Onboard Talent</button>
        </div>
      </div>
    </div>
  )
}

export default Header