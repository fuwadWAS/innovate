import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Marketing from '../../assets/marketing.png'
import Social from '../../assets/social.png'
import Content from '../../assets/content.png'
import RedImg from '../../assets/redImg.png'




const Service = () => {
  return (
    <section className="pt-[60px] pb-[99px] bg-[#FFF]">
        <Container>
              <div className="w-[332px] mx-auto text-center pb-[52px]">
              <Images className="mx-auto text-center" src={common}/>
               <Heading className="font-open font-extrabold text-[#192239] text-[48px]" text="Our Services" as="h1"/>
               <Pragraph className="font-regular font-pap text-[18px] text-[#6C7D93] leading-[32px]" text="We have been providing great flooring solutions service."/>
            </div>
            
           <Flex className="judtify-between gap-x-[30px]">
             <div className="w-[370px] py-[52px] px-[47px] bg-[#EBF7E9] rounded-2xl text-center relative">
                <Images className="mx-auto" src={Marketing}/>
                <Heading className="font-open font-semibold text-[25px] text-[#202427] uppercase leading-[36px] pt-[20px] pb-[20px]" text="MARKETING STRATEGY" as="h3"/>
                <Pragraph className="font-pap font-regular text-[18px] text-[#6C7D93] leading-[30px]  pb-[20px]" text="Social Media has changed the way we interact & do business while creating"/>
                <Heading className="font-open font-semibold text-[18px] leading-[24px] text-[#202427]" text="Read more" as="h4"/>
                <div className="absolute bottom-[46px] left-[120px]">
                  <Images src={RedImg}/>
                </div>
             </div>
             <div className="w-[370px] py-[52px] px-[47px] bg-[#D8EAFF] rounded-2xl text-center relative">
                <Images className="mx-auto" src={Social}/>
                <Heading className="font-open font-semibold text-[25px] text-[#202427] uppercase leading-[36px] pt-[20px] pb-[20px]" text="MARKETING STRATEGY" as="h3"/>
                <Pragraph className="font-pap font-regular text-[18px] text-[#6C7D93] leading-[30px]  pb-[20px]" text="Social Media has changed the way we interact & do business while creating"/>
                <Heading className="font-open font-semibold text-[18px] leading-[24px] text-[#202427]" text="Read more" as="h4"/>
                <div className="absolute bottom-[53px] left-[120px]">
                  <Images src={RedImg}/>
                </div>
             </div>
             <div className="w-[370px] py-[52px] px-[47px] bg-[#FBF1EC] rounded-2xl text-center relative">
                <Images className="mx-auto" src={Content}/>
                <Heading className="font-open font-semibold text-[25px] text-[#202427] uppercase leading-[36px] pt-[20px] pb-[20px]" text="MARKETING STRATEGY" as="h3"/>
                <Pragraph className="font-pap font-regular text-[18px] text-[#6C7D93] leading-[30px]  pb-[20px]" text="Social Media has changed the way we interact & do business while creating"/>
                <Heading className="font-open font-semibold text-[18px] leading-[24px] text-[#202427]" text="Read more" as="h4"/>
                <div className="absolute bottom-[53px] left-[120px]">
                  <Images src={RedImg}/>
                </div>
             </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Service