import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Client from '../../assets/review.png'
import Pic5 from '../../assets/pic5.jpg'

const Review = () => {
  return (
    <section className="py-[100px] bg-[#FFF]">
        <Container>
            <Flex>
                <div className="w-[348px] bg-[#FFF] mr-[52px]">
                    <Images src={common}/>
                    <Heading className="font-open font-extrabold text-[#192239] text-[48px] pt-[16px] pb-[20px]" text="Client Review" as="h1"/>
                    <Pragraph className="font-pap font-regular text-[#6C7D93] text-[18px] leading-[30px] pb-[15px]" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "/>
                    <div className="">
                        <a href="#" className="px-[22px] py-[15px] rounded-full bg-[#C4C4C4] hover:text-[#FFF] hover:bg-[#FF7628]"><i class="fa-solid fa-angle-left"></i></a>
                        <a href="#" className="px-[22px] py-[15px] rounded-full bg-[#C4C4C4] hover:text-[#FFF] hover:bg-[#FF7628] ml-[20px]"><i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="w-[370px] px-[40px] py-[25px] bg-[#D8EAFF] rounded-2xl mr-[30px]">
                    <Pragraph className="font-pap font-regular text-[#6C7D93] text-[18px] leading-[30px] pr-[10px] pb-[23px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>
                    <div className="text-right relative">
                        <Heading className="font-open font-semibold text-[#202427] text-[24px]" text="Jane Cooper" as="h3"/>
                        <Heading className="font-open font-regular text-[#202427] text-[18px] pt-[8px]" text="Fashion Designer" as="h5"/>
                        <div className="absolute bottom-[-12px] left-[102px]">
                            <Images src={Client}/>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] px-[40px] py-[25px] bg-[#FFFFFF] shadow-lg rounded-2xl">
                    <Pragraph className="font-pap font-regular text-[#6C7D93] text-[18px] leading-[30px] pr-[10px] pb-[10px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>
                    <Flex className="relative items-center">
                        <div className="w-[90px] h-[90px] mr-[45px]">
                            <Images className="w-[100%] h-[100%] rounded-full" src={Pic5}/>
                        </div>
                        <div className="">
                            <Heading className=" font-open font-semibold text-[#202427] text-[24px]" text="EleanorPena" as="h3"/>
                            <Heading className="font-open font-regular text-[#202427] text-[18px] pt-[8px]" text="Architecture" as="h5"/>
                        </div>
                         <div className="absolute bottom-[-5px] left-[72px]">
                            <Images src={Client}/>
                        </div>
                    </Flex>
                       
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Review