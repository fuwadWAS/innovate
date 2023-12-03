import Container from '../Container'
import React from 'react'
import Flex from '../Flex'
import Images from '../Images'
import NavImg from '../../assets/logo.png'
import Menu from '../Menu'
import Button from '../Button'

const Navber = () => {
  return (
   <section className="py-[49px] absolute w-[100%] top-0 left-0 z-[999]">
      <Container>
         <Flex>
            <div className="w-[20%]">
                <Images src={NavImg}/>
            </div>
            <div className="w-[60%] pt-[20px]">
                <Menu/>
            </div>
            <div className="w-[20%]">
                <Button className="px-[28px] py-[14px] "  text="Contact Us"/>
            </div>
            
         </Flex>
      </Container>
   </section>
  )
}

export default Navber