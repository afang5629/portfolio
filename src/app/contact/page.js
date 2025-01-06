import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="w-full p-5 flex justify-center py-20">
    <div className="flex flex-row gap-2 w-3/4">
    <div className="w-1/2 border border-black border-1 p-2 flex flex-row my-auto gap-4">
    <MdEmail size={20} />
    Email: afang5629@gmail.com
    </div>
    <div className="w-1/2 border border-black border-1 p-2 flex flex-row my-auto gap-4">
    <FaPhoneAlt size={20}/>
    Phone Number : 613-265-2197
    </div>
  </div>
  </div>
  )
}

export default Contact