import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from  '../assets/logo.png'
import Right from  '../assets/right.png'


const SucessPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Initialize countdown state to 5 seconds

  // Use useEffect to start the countdown timer when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      // Decrement countdown by 1 every second until it reaches 0
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer); // Stop the timer when countdown reaches 0
        navigate('/'); // Redirect to home page when countdown reaches 0
      }
    }, 1000); // Update countdown every 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [countdown, navigate]);
  return (
    <>
      <div>
        <div className='p-10'>
            <img src={Logo} alt="Logo" />
        </div>
        <div className='flex flex-col items-center gap-5 py-16'>
          <img src={Right} alt="" />
          <h3 className="font-coveredByYourGrace font-normal text-center text-3xl text-[#2DA950]">Success Submitted</h3>
          <h2 className='font-manrope text-center font-semibold text-4xl'>Congratulations</h2>
          <p className='font-manrope text-center font-semibold text-2xl text-[#727272]'>Your request has been successfully submitted to us. We <br /> will validate your information and reach out to your <br /> shortly with updates</p>
        </div>
        <div className='mt-10'>
          <p className='text-[] font-manrope text-center'>Redirecting you to Homepage in <span className='font-semibold'>{countdown} Seconds</span></p>
        </div>
      </div>
    </>
  )
}

export default SucessPage