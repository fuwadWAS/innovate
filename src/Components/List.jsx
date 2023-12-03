import React from 'react'

const List = ({text,href,className}) => {
  return (
   <li className="pr-[80px] relative"><a href={href} className={`${className} font-open font-semibold text-[18px] text-[#192239] hover:text-[#FF7628]  `}>{text}</a><i class="fa-solid fa-angle-down absolute right-[60px] top-[6px]"></i></li>
  )
}

export default List