import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'



const Header = () => {
  return (
    <div className='container flex flex-row justify-between font-poppins '>
        <div className='left-side '>
            <p className='tracking-widest uppercase font-semibold underline'>pu-sms</p>
        </div>
        <div className='flex flex-row'>
            <button className='bg-lime-600 hover:bg-lime-200 text-black  px-4 rounded flex flex-row items-center'>
                <AiOutlineSetting className='m-2'/><p className=''>Student Settings</p></button>
        </div>
    </div>
  )
}

export default Header