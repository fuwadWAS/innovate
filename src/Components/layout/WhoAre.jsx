import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Dot1 from '../../assets/dot1.png'
import Pic2 from '../../assets/pic2.jpg'
import Pic4 from '../../assets/pic4.jpg'
import Common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import wap1 from '../../assets/wap1.png'
import cre2 from '../../assets/cre2.png'
import rin3 from '../../assets/rin3.png'
import uia4 from '../../assets/uia4.png'
import spi5 from '../../assets/spi5.png'
import wid6 from '../../assets/wid6.png'

const WhoAre = () => {
  return (
   <section className="pt-[100px] pb-[80px] bg-[#FFF] ">
      <Container>
         <Flex className="gap-x-[102px]">
            <div className="w-[542px] h-[545px] relative">
                <div className="w-[440px] h-[467px] rounded-[60px] relative top-0 left-[102px] z-[999]">
                    <Images className="w-[100%] h-[100%] rounded-[60px]" src={Pic2}/>
                </div>
                <div className="w-[296px] h-[279px] rounded-[60px] absolute top-[266px] left-0 z-[999]">
                    <Images className="w-[100%] h-[100%] rounded-[60px] border-8 border-[#FFF]" src={Pic4}/>
                </div>
                <div className="absolute top-[129px] left-[12px] ">
                    <Images src={Dot1}/>
                </div>
            </div>
            <div className="w-[469px]">
                <Images src={Common}/>
                <Heading className="font-open font-extrabold text-[#192239] text-[48px] pt-[16px] pb-[15px]" text="Who We Are" as="h1"/>
                <Pragraph className="font-regular font-pap text-[#6C7D93] text-[18px] leading-[36px] pb-[45px]" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "/>
                <Flex className="w-[460px] gap-x-[65px] gap-y-[40px] flex-wrap">
               
                    <div className="w-[84px] h-[21px] ">
                        <Images src={wap1}/>
                    </div>
                    <div className="w-[84px] h-[21px] ">
                        <Images src={cre2}/>
                    </div>
                    <div className="w-[84px] h-[21px] ">
                        <Images src={rin3}/>
                    </div>
                    <div className="w-[84px] h-[21px] ">
                        <Images src={uia4}/>
                    </div>
                    <div className="w-[84px] h-[21px] ">
                        <Images src={spi5}/>
                    </div>
                    <div className="w-[84px] h-[21px] ">
                        <Images src={wid6}/>
                    </div>
             
                </Flex>
            
            </div>
         </Flex>
      </Container>
   </section>
  )
}

export default WhoAre