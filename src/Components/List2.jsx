import React from 'react'

const List2 = ({href,text,className}) => {
  return (
    <li><a href={href} className={`${className} font-nuni font-semibold text-[#6C7D93] text-[20px] leading-[42px] capitaliz`}>{text} </a></li>
  )
}

export default List2