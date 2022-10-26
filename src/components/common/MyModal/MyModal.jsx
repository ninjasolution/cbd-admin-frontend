import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

function MyModal({visible, onClose}) {
    if(!visible) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[100]">
      <div className="bg-white pt-4 px-4 pb-10 rounded w-1/2">
        <div className='text-right'>
            <AiOutlineClose onClick={() => onClose()} className='text-[25px] ml-auto cursor-pointer mb-4  mt-2'/>
        </div>
        <div className='mb-12'>
            <div className='flex items-center space-x-2'>
                <h3 className='font-bold text-[25px] text-black'>New Price</h3>
                <input type="text" className='border border-black outline-none rounded py-2 px-3 flex-1' placeholder='New Price' />
            </div>
        </div>       

        <div className="text-right space-x-3">
          <button className="px-5 py-2 bg-gray-700 text-sm text-white rounded">
            Button
          </button>
          <button className="px-5 py-2 text-sm bg-gray-700 text-white rounded">
            Button 
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyModal