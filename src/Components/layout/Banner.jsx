import React from 'react'
import Container from '../Container'
import Images from '../Images'
import Common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Button from '../Button'
import Flex from '../Flex'
import bgOne from '../../assets/pic2.jpg'
import bgTwo from '../../assets/pic4.jpg'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import Bg3 from '../../assets/bg3.png'
import Bg4 from '../../assets/bg4.png'
import bannerbg1 from '../../assets/bannerBg1.png'

const Banner = () => {
  return (
   <section className="pt-[214px] pb-[207px] bg-sky-200 relative">
    <Images className="absolute top-[0px] left-[0px]" src={bannerbg1}/>
       <Container className="relative z-[999]">
          <div className="mr-[50px]">
            <Images src={Common}/>
            <Heading className="w-[686px] font-open font-extrabold text-[72px] text-[#192239] pb-[20px] " text="We Are Digital Marketing Agency" as="h1"/>
            <Pragraph className="w-[570px] font-regular font-pap text-[#6C7D93] text-[20px] leading-[36px] pb-[64px]" text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "/>
            <Button className="py-[20px] px-[40px] leading-[24px]" text="get free quoto"/>
          </div>
          <div className="w-[461px] h-[433px]  rounded-[60px] absolute  top-[220px] right-[0px] z-[999]">
            <Images className="w-[100%] h-[100%] rounded-[60px] border-8 border-[#FFF]" src={bgOne}/>
          </div>
          <div className="w-[461px] h-[433px] bg-black rounded-[60px] absolute top-[0px] right-[-245px]">
            <Images className="w-[100%] h-[100%] rounded-[60px]" src={bgTwo}/>
          </div>
          <Images className="absolute left-[461px] top-[565px]" src={bg1}/>
          <Images className="absolute top-[71px] left-[796px]" src={bg2}/>
       </Container>
        <Images className="absolute bottom-[109px] left-[70px]" src={Bg3}/>
        <Images className="absolute bottom-[118px] right-[114px]" src={Bg4}/>
   </section>
  )
}

export default Banner