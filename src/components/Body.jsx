import React from 'react'
import {MdChecklist, MdFreeCancellation, MdPendingActions} from "react-icons/md";
import {BsFillCheckSquareFill} from "react-icons/bs"
import {BiTask, BiEditAlt} from "react-icons/bi"


const Body = () => {
  return (
    <div className='flex flex-col gap-10 justify-between py-7 px-8'>
        <div className='flex gap-3 w-full h-[90px] justify-between'>
            <div className='flex items-center bg-gray-300 w-[400px] p-6 justify-between'>
                <div className='flex gap-3 items-center font-semibold text-[20px]'>
                    <MdChecklist size={32}/>
                    All Tasks
                </div>
                <div className='font-semibold text-[30px] text-orange-500'>
                    10
                </div>
            </div>
            <div className='flex items-center bg-gray-300 w-[400px] p-6 justify-between'>
                <div className='flex gap-3 items-center font-semibold text-[20px]'>
                    <BsFillCheckSquareFill size={32}/>
                    Complete
                </div>
                <div className='font-semibold text-[30px] text-orange-500'>
                    7
                </div>
            </div>
            <div className='flex items-center bg-gray-300 w-[400px] p-6 justify-between'>
                <div className='flex gap-3 items-center font-semibold text-[20px]'>
                    <MdFreeCancellation size={32}/>
                    Incomplete
                </div>
                <div className='font-semibold text-[30px] text-orange-500'>
                    3
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between font-semibold text-[30px]'>
                Recents
                <input type="search" className='text-[15px] font-medium border-b-2 border-gray-300 outline-none' placeholder='Search'/>
            </div>
            <div className='flex flex-col gap-3 w-full h-[500px] justify-between'>
                <div className='w-full h-[100px] bg-gray-300 px-10 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <BiTask size={32}/>
                        Schedule 1
                    </div>
                    <div>
                        <BiEditAlt size={32} className='text-gray-700'/>
                    </div>
                </div>
                <div className='w-full h-[100px] bg-gray-300 px-10 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <MdPendingActions size={32}/>
                        Schedule 2
                    </div>
                    <div>
                        <BiEditAlt size={32} className='text-gray-700'/>
                    </div>
                </div>
                <div className='w-full h-[100px] bg-gray-300 px-10 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <BiTask size={32}/>
                        Schedule 3
                    </div>
                    <div>
                        <BiEditAlt size={32} className='text-gray-700'/>
                    </div>
                </div>
                <div className='w-full h-[100px] bg-gray-300 px-10 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <MdPendingActions size={32}/>
                        Schedule 4
                    </div>
                    <div>
                        <BiEditAlt size={32} className='text-gray-700'/>
                    </div>
                </div>
                <div className='w-full h-[100px] bg-gray-300 px-10 flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <BiTask size={32}/>
                        Schedule 5
                    </div>
                    <div>
                        <BiEditAlt size={32} className='text-gray-700'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body