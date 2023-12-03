import React from 'react'
import Flex from './Flex'
import List from './List'

const Menu = () => {
  return (
    <ul >
       <Flex className="">
         <List  href="#" text="about"/>
         <List  href="#" text="service"/>
         <List href="#" text="portfolio"/>
         <List href="#" text="price"/>
         <List href="#" text="blog"/>
       </Flex>
    </ul>
  )
}

export default Menu
