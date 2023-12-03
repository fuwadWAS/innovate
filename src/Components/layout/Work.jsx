import React from 'react'
import Container from '../Container'
import Images from '../Images'
import Common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Flex from '../Flex'
import pic5 from '../../assets/pic5.jpg'

const Work = () => {
  return (
    <section className="pt-[80px] pb-[100px] bg-[#FFF]">
        <Container>
           <div className="w-[399px] mx-auto text-center">
            <Images className="mx-auto text-center"  src={Common}/>
            <Heading className="font-open font-extrabold text-[#192239] text-[48px] pt-[16px]" text="Work Showcase" as="h1"/>
           </div>
           <Flex className="w-[787px] pt-[47px] gap-x-[40px] pb-[52px]">
                <Heading className="font-open font-semibold text-[24px] text-[#6C7D93] capitalize leading-[32px] hover:text-[#FF7628]" text="All" as="h4"/>
               <Heading className="font-open font-semibold text-[24px] text-[#6C7D93] capitalize leading-[32px] hover:text-[#FF7628]" text="Digital Mkt" as="h4"/>
               <Heading className="font-open font-semibold text-[24px] text-[#6C7D93] capitalize leading-[32px] hover:text-[#FF7628]" text="Branding" as="h4"/>
               <Heading className="font-open font-semibold text-[24px] text-[#6C7D93] capitalize leading-[32px] hover:text-[#FF7628]" text="Content Mkt" as="h4"/>
               <Heading className="font-open font-semibold text-[24px] text-[#6C7D93] capitalize leading-[32px] hover:text-[#FF7628]" text="Social Media Mkt" as="h4"/>
           </Flex>
           <Flex className="flex-wrap gap-[30px]">
              <div className="w-[276px] h-[344px]  ">
                 <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
              <div className="w-[558px] h-[344px]">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
              <div className="w-[276px] h-[344px]">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
              <div className="w-[413px] h-[344px]">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
              <div className="w-[327px] h-[344px]">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
              <div className="w-[370px] h-[344px]">
                <Images className="w-[100%] h-[100%] rounded-2xl" src={pic5}/>
              </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Work