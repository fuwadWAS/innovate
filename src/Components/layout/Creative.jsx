import React from 'react'
import Container from '../Container'
import Images from '../Images'
import common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Flex from '../Flex'
import RedImg from '../../assets/redImg.png'
import Pic4 from '../../assets/pic4.jpg'

const Creative = () => {
  return (
    <section className="pt-[80px] pb-[100px] bg-[#FFF]">
        <Container>
        <div className="w-[556px] mx-auto text-center mb-[52px]">
                <Images className="mx-auto text-center" src={common}/>
                <Heading className="font-open font-extrabold text-[#192239] text-[48px] pt-[16px] pb-[20px]" text="Our creative process." as="h1"/>
                <Pragraph className="w-[412px] mx-auto  text-center font-regular font-robo text-[#6C7D93] text-[18px] leading-[30px]" text="We provide digital experience services to startups and small businesses."/>
            </div>
            <Flex className="justify-between flex-wrap gap-x-[33px] items-center">
              <div className="w-[465px] h-[207px] bg-[#EBF7E9] rounded-2xl py-[20px] px-[24px] relative">
                 <Heading className="font-open font-bold text-[18px] text-[#202427] leading-[24px] pl-[15px] pb-[18px] " text="Step-1" as="h4"/>
                 <Heading className="font-open font-semibold text-[#202427] text-[30px] leading-[32px] pb-[20px]" text="Global SEO Research" as="h3"/>
                 <Pragraph className="font-robo font-regular text-[18px] text-[#6C7D93] leading-[30px] pr-[65px]" text="Practical tools and features make it easier to build and manage your site."/>
                <Images className="absolute top-[16px] left 0" src={RedImg}/>
              </div>
              <div className="w-[570px] h-[324px] rounded-2xl">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={Pic4}/>
              </div>
              <div className="w-[570px] h-[324px] rounded-2xl">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={Pic4}/>
              </div>
              <div className="w-[465px] h-[207px] bg-[#EBF7E9] rounded-2xl py-[20px] px-[24px] relative">
                 <Heading className="font-open font-bold text-[18px] text-[#202427] leading-[24px] pl-[15px] pb-[18px] " text="Step-2" as="h4"/>
                 <Heading className="font-open font-semibold text-[#202427] text-[30px] leading-[32px] pb-[20px]" text="Social media integration" as="h3"/>
                 <Pragraph className="font-robo font-regular text-[18px] text-[#6C7D93] leading-[30px] pr-[65px]" text="Practical tools and features make it easier to build and manage your site."/>
                <Images className="absolute top-[16px] left 0" src={RedImg}/>
              </div>
              <div className="w-[465px] h-[207px] bg-[#EBF7E9] rounded-2xl py-[20px] px-[24px] relative">
                 <Heading className="font-open font-bold text-[18px] text-[#202427] leading-[24px] pl-[15px] pb-[18px] " text="Step-3" as="h4"/>
                 <Heading className="font-open font-semibold text-[#202427] text-[30px] leading-[32px] pb-[20px]" text="Launching the Application" as="h3"/>
                 <Pragraph className="font-robo font-regular text-[18px] text-[#6C7D93] leading-[30px] pr-[65px]" text="Practical tools and features make it easier to build and manage your site."/>
                <Images className="absolute top-[16px] left 0" src={RedImg}/>
              </div>
              <div className="w-[570px] h-[324px] bg-[#EBF7E9] rounded-2xl">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={Pic4}/>
              </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Creative