import React from 'react'
import Lady from "../assets/lady.png"
import Spark from "../assets/spark.png"
import Plane from "../assets/plane.png"
import { FaArrowRightLong } from "react-icons/fa6";



const MainSection = () => {
  return (
    <>
      <div>
        <div className='p-5'>
          <p className="font-coveredByYourGrace font-normal text-center text-4xl text-[#2DA950]">Success stories</p>
          <p className='font-manrope text-center font-semibold text-5xl'>
          Every success journey <br /> we’ve encountered.
          </p>
        </div>
        <div className='grid grid-cols-2 w-full'>
          <div className='relative mt-16'>
            <div className='absolute top-0 left-[20%]'>
            <img className='w-full' src={Lady} alt="lady" />
            </div>

            <div className='absolute  w-full top-28 left-[5%]'>
              <div className='w-[34%] px-10 pt-12 pb-4 border border-[#EAEAEA] bg-white rounded-[10%] relative'>
              <div className=' absolute -top-4 left-0'>
              <img className='' src={Spark} alt="spark" />
              </div>
                <h2 className='font-bold text-5xl'>40%</h2>
                <p className='text-[#828282] font-semibold font-manrope '>Achieved reduction in project execution time by optimising team availability</p>
              </div>
            </div>

            <div className='flex border border-[#EAEAEA] w-[38%] pl-6 py-3 bg-white rounded-full absolute top-96 left-[5%]'>
              <img className='' src={Plane} alt="plane" />
              <div>
              <h2 className='text-3xl text-black bg-white font-bold '>10 DAYS</h2>
              <p className='text-2xl text-[#828282] bg-white '>Staff Deployment</p>
              </div>
            </div>

            <div className='bg-[#002E18] w-[30%] p-6 rounded-[22px] pl-3 absolute top-96 mt-5 left-[65%]'>
              <div className='flex items-center gap-2'>
                <h2 className='text-5xl text-white font-bold ' >$0.5</h2>
                <p className='text-2xl text-[#A6A3A0] font-semibold pt-4' >MILLION</p>
              </div>
                <p className='text-[#CCCCCC] font-semibold pt-3'>Reduced client expenses by saving on hiring and employee costs.</p>
            </div>

          </div>
          <div className='w-full mt-10'>
            <div className='p-24'>
              <h2 className='text-4xl w-[70%] font-semibold text-[#1C1C1C]'>Enhance fortune 50 company’s insights teams research capabilities</h2>
            </div>
            <div className='flex gap-2 pl-24'>
            <p className='bg-[#2DA950] w-2 h-2 rounded-full border border-[#2DA950]' ></p>
            <p className='bg-[#E4E3E3] w-2 h-2 rounded-full border border-[#E4E3E3]' ></p>
            <p className='bg-[#E4E3E3] w-2 h-2 rounded-full border border-[#E4E3E3]' ></p>
            </div>
            <div className='pt-24 pl-16 w-full'>
            <button className='p-5 px-10 m-4 text-white bg-black rounded-full hover:bg-[#4E4E4E] flex items-center'>
  Explore More <span className="ml-5"><FaArrowRightLong /></span>
</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection