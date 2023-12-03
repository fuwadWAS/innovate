import React from 'react'

const Button = ({text,className}) => {
  return (
   <button className={`${className} font-open font-bold text-[20px] hover:text-[#FFF] text-[#192239] border-2 border-[#FF7628] rounded-full hover:bg-[#FF7628] capitalize z-[99999999999999]`}>{text}</button>
  )
}

export default Button