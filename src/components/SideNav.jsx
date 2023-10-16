import React from 'react'
import {MdChecklist, MdDelete} from "react-icons/md";
import {BiEditAlt} from "react-icons/bi";
import {IoCreateOutline} from "react-icons/io5"

const SideNav = () => {
  return (
    <div className='flex flex-col gap-y-6 py-7 px-6 h-screen shadow-lg'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold flex items-center gap-3 text-[27px]'>
            <div className='flex gap-1'>Task<span className='text-orange-500'>|</span>Manager</div>
        </h1>
        <p className='font-medium'>MENU</p>
      </div>
      <div className='flex flex-col gap-y-3 mt-5'>
        <div className='flex items-center gap-3 bg-black text-white rounded-xl w-[200px] px-5 py-4 cursor-pointer'><MdChecklist/>Tasks</div>
        <div className='flex items-center gap-3 bg-white text-black rounded-xl w-[200px] px-5 py-4 cursor-pointer'><IoCreateOutline/>Create Tasks</div>
        <div className='flex items-center gap-3 bg-white text-black rounded-xl w-[200px] px-5 py-4 cursor-pointer'><BiEditAlt/>Edit Tasks</div>
        <div className='flex items-center gap-3 bg-white text-black rounded-xl w-[200px] px-5 py-4 cursor-pointer'><MdDelete/>Delete Tasks</div>
      </div>
    </div>
  )
}

export default SideNav